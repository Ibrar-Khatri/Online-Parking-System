module.exports.bookParkingArea = (req, res) => {
  console.log("Responed data " + JSON.stringify(req.body));
  res.send({
    status: true,
  });
};
