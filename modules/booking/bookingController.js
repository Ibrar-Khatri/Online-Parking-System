const { firebaseConfig } = require("../../firebaseConfig/firebaseConfig");
const db = firebaseConfig.firestore();
const firebase = require("firebase");
require('datejs')

module.exports.bookParkingArea = (req, res) => {
  db.collection("bookings")
    .add(req.body)
    .then((slotBooked) => {
      res.send({
        status: true,
        slotBooked: true,
        slotId: slotBooked.id,
      });
    })
    .catch((error) => {
      res.send({
        status: false,
        slotBooked: false,
      });
    });
};

module.exports.getUsersAllBookings = (req, res) => {
  db.collection("bookings")
    .where("userId", "==", req.body.userId)
    .get()
    .then(async (userBookings) => {
      let bookings = []
      await userBookings.forEach((bking) => {
        bookings.push({ ...bking.data(), id: bking.id })
      });
      res.send({
        status: true, bookings: bookings
      });
    })
    .catch((error) => {
      res.send({
        status: false,
      });
    });
}

module.exports.getAllBookingsOfSelectedArea = (req, res) => {
  let location = req.body.location
  db.collection("bookings")
    .where("location", "==", location)
    .get()
    .then(async (selectedAreaBookings) => {
      let bookings = []
      await selectedAreaBookings.forEach((bking) => {
        bookings.push({ ...bking.data() })
      });
      res.send({
        status: true,
        bookings: bookings
      })
    })
    .catch((error) => {
      res.send({
        status: false,
        error: error
      });
    });
};
