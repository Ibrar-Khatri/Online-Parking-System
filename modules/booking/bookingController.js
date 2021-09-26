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
        message: 'Booking added successfully'
      });
    })
    .catch((error) => {
      res.send({
        status: false,
        slotBooked: false,
        message: 'Sorry something went wrong, Please try again'
      });
    });
};

module.exports.getUsersAllBookings = (req, res) => {

  const dbReference = req.body.userId ? db.collection("bookings")
    .where("userId", "==", req.body.userId) : db.collection("bookings")
  dbReference
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

module.exports.deletUpcomingBookingById = (req, res) => {
  console.log(req.body.id)

  db.collection("bookings").doc(req.body.id).delete()
    .then(bkingDeleted => {
      console.log(bkingDeleted)
      res.send({
        status: true,
        message: 'Booking deleted successfully'
      })
    })
    .catch(err => {
      res.send({
        status: false,
        message: 'Sorry something went wrong, Please try again'
      })
    })

};
