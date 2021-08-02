const firebase = require('../../firebase/firebase')
const db = firebase.firestore()

module.exports.signupWithDetails = (req, res) => {
    firebase.auth().createUserWithEmailAndPassword(req.body.email, req.body.password)
        .then(user => {
            console.log('User created successfully' + JSON.stringify(user.uid))
            // res.send({
            //     status: true, user: user
            // })

            db.collection("cities").doc(user.uid).set({
                username: req.body.name,
                email: req.body.email,
            })
                .then((docRef) => {
                    console.log("Document written with ID: ", docRef);
                    res.send({
                        status: true, user: user
                    })
                })
                .catch((error) => {
                    res.send({
                        status: false, error: error
                    })
                    console.error("Error adding document: ", error);
                });
            // db.collection("users").doc(user.uid).set({
            //     name: req.body.name,
            //     email:req.eemail,
            // })
            //     .then(() => {
            //         console.log("Document successfully written!");
            //     })
            //     .catch((error) => {
            //         console.error("Error writing document: ", error);
            //     });

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
            res.send({
                status: true, user: user
            })
        })
        .catch(err => {
            console.log('User cannot be found')
            res.send({
                status: false, error: err
            })
        })
}