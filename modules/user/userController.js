const firebase = require('../../firebase/firebase')

module.exports.signupWithDetails = (req, res) => {
    console.log('Requested data ' + (req))
    firebase.auth().createUser({name :req.body.name, email: req.body.email, password:req.body.password})
        .then(user => {
            console.log(user)
            res.send({
                status: 'true', user: user
            })
        })
        .catch(err => {
            console.log(err + 'Error')
            res.send({
                status: 'false', error:err
            })
        })
}

module.exports.signinWithDetails = (req, res) => {
    firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password)
        .then(user => {
            console.log(user)
            res.send({
                status: 'true', user: user
            })
        })
        .catch(err => {
            console.log(err + 'Error')
            res.send({
                status: 'false', errorMessage: err.message
            })
        })
}
module.exports.getUserDetailsById = (req, res) => {
    firebase.auth().getUser(uid)
        .then(user => {
            console.log(`Successfully fetched user data: ${user.toJSON()}`);
                        res.send({
                status: 'true', user: user
            })
        })
        .catch(err => {
            console.log('Error fetching user data:', errs);
            res.send({
                status: 'false', errorMessage: err.message
            })
        })
}

