const firebase = require('../../firebase/firebase')

module.exports.signupWithDetails = (req, res) => {
    console.log(req, "email")
    // firebase.auth().createUserWithEmailAndPassword(req.email, req.password)
    //     .then(user => {
    //         console.log(user)
    //         res.send({
    //             status: 'true', user: user
    //         })
    //     })
    //     .catch(err => {
    //         res.send({
    //             status: 'false',
    //         })
    //     })
}