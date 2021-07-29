

module.exports.signupWithDetails = (req, res) => {
    console.log(req + "requested data")
    res.send({
        status: 'true', res: req
    })
}