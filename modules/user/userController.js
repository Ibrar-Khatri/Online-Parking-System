const firebase = require('../../firebase/firebase')

module.exports.signupWithDetails = (req, res) => {
    firebase.auth().createUserWithEmailAndPassword(req.body.email, req.body.password)
        .then(user => {
            console.log(user)
            res.send({
                status: 'true', user: user
            })
        })
        .catch(err => {
            console.log(err + 'Error')
            res.send({
                status: 'false',
            })
        })
}