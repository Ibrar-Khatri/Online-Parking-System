const firebase = require('../../firebase/firebase')
const db = firebase.firestore()

module.exports.signupWithDetails = (req, res) => {
    firebase.auth().createUserWithEmailAndPassword(req.body.email, req.body.password)
        .then(user => {

            db.collection("user").doc(user.user.uid).set({
                displayName: req.body.name,
                email: req.body.email,
            })
                .then((docRef) => {
                    console.log("Document written with ID: ", JSON.stringify(docRef.id));
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
                    if (doc.exists) {
                        console.log("Document data:", doc.data());
                    } else {
                        // doc.data() will be undefined in this case
                        console.log("No such document!");
                    }
                }).catch((error) => {
                    console.log("Error getting document:", error);
                });
        })
        .catch(err => {
            console.log('User cannot be found' + err)
            res.send({
                status: false, error: err
            })
        })
}