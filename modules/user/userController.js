const firebase = require('../../firebase/firebase')

module.exports.signupWithDetails = (req, res) => {
    firebase.auth().createUserWithEmailAndPassword(req.body.email, req.body.password)
        .then(user => {
            console.log('User created successfully' + user)
            res.send({
                status: true, user: user
            })
        })
        .catch(err => {
            console.log('User cannot be created' + err)
            res.send({
                status: false, error :err
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