const { firebaseConfig, adminConfig } = require("../../firebaseConfig/firebaseConfig");
const storage = firebaseConfig.storage()
const db = firebaseConfig.firestore();


module.exports.signupWithDetails = (req, res) => {
  let email = req.body.email
  let password = Buffer.from(req.body.password, 'base64').toString('ascii')
  firebaseConfig
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      db.collection("user")
        .doc(user.user.uid)
        .set({
          displayName: req.body.name,
          email: req.body.email,
        })
        .then(() => {
          res.send({
            status: true,
            user: {
              uid: user.user.uid,
              displayName: req.body.name,
              email: req.body.email,
              password: req.body.password
            },
          });
        })
        .catch((error) => {
          res.send({
            status: false,
            error: error,
          });
        });
    })
    .catch((err) => {
      res.send({
        status: false,
        error: err,
      });
    });
};

module.exports.signinWithDetails = (req, res) => {
  let email = req.body.email
  let password = Buffer.from(req.body.password, 'base64').toString('ascii')
  firebaseConfig
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      db.collection("user")
        .doc(user.user.uid)
        .get()
        .then((doc) => {
          if (doc.exists) {
            res.send({
              status: true,
              user: {
                uid: user.user.uid,
                email: req.body.email,
                displayName: doc.data().displayName,
                profileImage: doc.data().profileImage,
                myBookings: doc.data().myBookings,
              },
            });
          }
        })
        .catch((error) => {
          res.send({
            status: false,
            error: error,
          });
        });
    })
    .catch((err) => {
      res.send({
        status: false,
        error: err,
      });
    });
};

module.exports.getUserDetails = (req, res) => {
  db.collection("user")
    .doc(req.body.uid)
    .get()
    .then((doc) => {
      if (doc.exists) {
        res.send({
          status: true,
          user: {
            uid: req.body.uid,
            email: doc.data().email,
            displayName: doc.data().displayName,
            myBookings: doc.data().myBookings,
            profileImage: doc.data().profileImage,
          },
        });
      }
    })
    .catch((error) => {
      res.send({
        status: false,
        error: error,
      });
    });
};
module.exports.updateUserDetails = (req, res) => {
  let userDetails = JSON.parse(req.body.userDetails)
  userDetails.password = Buffer.from(userDetails.password, 'base64').toString('ascii')
  let image = JSON.parse(req.body.profileImage)
  let storageRef = storage.ref('profileImages').child(userDetails.uid)
  let uploadImageInDB = () => {
    storageRef.putString(image.base64, 'base64', { contentType: 'image/jpg' })
      .then(() => {
        storageRef.getDownloadURL().then((url) => {
          updateUserDetails({
            displayName: userDetails.name,
            profileImage: url
          }, 'imageAdded')
        })
      })
      .catch(err => {
        res.send({
          status: false,
          message: 'Sorry something went wrong, Please try again'
        })
      })
  }

  let updateUserDetails = (update, condition) => {
    db.collection("user")
      .doc(userDetails.uid)
      .update(update)
      .then(() => {
        res.send({
          status: true,
          update: { displayName: userDetails.name, profileImage: update.profileImage, condition: condition },
          message: 'Your profile has been updated successfully!'
        });
      })
      .catch((error) => {
        res.send({
          status: false,
          message: 'Sorry something went wrong, Please try again'
        });
      })
  }

  firebaseConfig
    .auth()
    .signInWithEmailAndPassword(userDetails.email, userDetails.password)
    .then(() => {
      if (image) {
        if (image.condition === 'updateProfileImage') {
          uploadImageInDB()
        } else if (image.condition === 'removeProfileImage') {
          storageRef.delete()
            .then(() => {
              updateUserDetails({
                displayName: userDetails.name,
                profileImage: ''
              }, 'imageRemoved')
            })
        }
      } else {
        updateUserDetails({
          displayName: userDetails.name
        }, 'updateDetails')
      }
    })
    .catch(() => {
      res.send({
        status: false,
        message: 'Please enter a valid password'
      });
    })
}

module.exports.updateUserPassword = (req, res) => {
  let userDetails = req.body
  userDetails.oldPassword = Buffer.from(userDetails.oldPassword, 'base64').toString('ascii')
  userDetails.newPassword = Buffer.from(userDetails.newPassword, 'base64').toString('ascii')
  firebaseConfig
    .auth()
    .signInWithEmailAndPassword(userDetails.email, userDetails.oldPassword)
    .then(() => {
      adminConfig.
        auth()
        .updateUser(userDetails.uid, {
          password: userDetails.newPassword,
        })
        .then((userRecord) => {
          res.send({
            status: true,
            message: 'Password updated successfully'
          });
        })
        .catch((error) => {
          res.send({
            status: false,
            message: 'Something went wrong, Please try again'
          });
        })
    })
    .catch(() => {
      res.send({
        status: false,
        message: 'Please enter a valid password'
      });
    })
}