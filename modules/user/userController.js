const firebase = require('../../firebase/firebase')
const db = firebase.firestore()

module.exports.signupWithDetails = (req, res) => {
    firebase.auth().createUserWithEmailAndPassword(req.body.email, req.body.password)
        .then(user => {

            db.collection("user").doc(user.user.uid).set({
                displayName: req.body.name,
                email: req.body.email,
            })
                .then(() => {
                    console.log('Displayname and email added successfully');
                    res.send({
                        status: true, user: {
                            uid: user.user.uid,
                            displayName: req.body.name,
                            email: req.body.email,
                        }
                    })
                })
                .catch((error) => {
                    res.send({
                        status: false, error: error
                    })
                    console.error("Error adding document: ", error);
                });
        })
        .catch(err => {
            console.log('User cannot be created' + err)
            res.send({
                status: false, error: err
            })
        })
}

module.exports.signinWithDetails = (req, res) => {
    firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password)
        .then(user => {
            console.log('User found successfully')
            db.collection('user').doc(user.user.uid).get()
                .then((doc) => {
                    // console.log("Document data:", doc.data());
                    if (doc.exists) {
                        res.send({
                            status: true, user: {
                                uid: user.user.uid,
                                email: req.body.email,
                                displayName: doc.data().displayName,
                            }
                        })
                    }
                }).catch((error) => {
                    res.send({
                        status: false, error: error
                    })
                });
        })
        .catch(err => {
            console.log('User cannot be found' + err)
            res.send({
                status: false, error: err
            })
        })
}


module.exports.getUserDetails = (req, res) => {
    console.log('user details' + req.body.uid)
    db.collection('user').doc(req.body.uid).get()
        .then((user) => {
            console.log("Document data:", doc.data().displayName);
            if (doc.exists) {
                res.send({
                    status: true, user: {
                        uid: req.body.uid,
                        email: doc.data().email,
                        displayName: doc.data().displayName,
                    }
                })
            }
        }).catch((error) => {
            res.send({
                status: false, error: error
            })
        });
}



