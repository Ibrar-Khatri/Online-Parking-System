// import firebase from '../../firebase/firebase'
const firebase = require('../../firebase/firebase')

module.exports.signupWithDetails = (req, res) => {
    console.log(req.body.email, "email")
    // console.log(req.password + "password")
    firebase.auth().createUserWithEmailAndPassword(req.email, req.password)
        .then(user => {
            console.log(user)
            res.send({
                status: 'true', user: user
            })
        })
        .catch(err => {
            res.send({
                status: 'false',
            })
        })
}