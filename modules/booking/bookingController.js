module.exports.bookParkingArea = (req, res) => {
  console.log("Responed data " + req.body);
  res.send({
    status: true,
  });
};
