

module.exports.signupWithDetails = (req, res) => {
    console.log(req.body + "requested data")
    res.send({
        status: 'true', res: req.body
    })
}