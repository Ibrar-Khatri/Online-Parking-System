const firebaseConfig = require("../../firebaseConfig/firebaseConfig");
const db = firebaseConfig.firestore();

module.exports.signupWithDetails = (req, res) => {
  firebaseConfig
    .auth()
    .createUserWithEmailAndPassword(req.body.email, req.body.password)
    .then((user) => {
      db.collection("user")
        .doc(user.user.uid)
        .set({
          displayName: req.body.name,
          email: req.body.email,
          myBookings: [],
        })
        .then(() => {
          console.log("Displayname and email added successfully");
          res.send({
            status: true,
            user: {
              uid: user.user.uid,
              displayName: req.body.name,
              email: req.body.email,
              myBookings: [],
            },
          });
        })
        .catch((error) => {
          res.send({
            status: false,
            error: error,
          });
          console.error("Error adding document: ", error);
        });
    })
    .catch((err) => {
      console.log("User cannot be created" + err);
      res.send({
        status: false,
        error: err,
      });
    });
};

module.exports.signinWithDetails = (req, res) => {
  firebaseConfig
    .auth()
    .signInWithEmailAndPassword(req.body.email, req.body.password)
    .then((user) => {
      console.log("User found successfully");
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
                myBookings: doc.data().myBookings,
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
          },
        });
      }
    })
    .catch((error) => {
      console.log("User deatils cannot be found" + error);
      res.send({
        status: false,
        error: error,
      });
    });
};
