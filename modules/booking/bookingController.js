const firebaseConfig = require("../../firebaseConfig/firebaseConfig");
const db = firebaseConfig.firestore();
const firebase = require("firebase");
const { json } = require("body-parser");

module.exports.bookParkingArea = (req, res) => {
  db.collection("bookings")
    .add(req.body)
    .then((slotBooked) => {
      db.collection("user")
        .doc(req.body.userId)
        .update({
          myBookings: firebase.firestore.FieldValue.arrayUnion(slotBooked.id),
        })
        .then(() => {
          res.send({
            status: true,
            slotBooked: true,
            slotId: slotBooked.id,
          });
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
};

module.exports.getAvailaleBookingsFromDB = (req, res) => {
  let userBookingDet = req.body
  db.collection("bookings")
    .where("nameOfLocation", "==", userBookingDet.location)
    .where()
    .get()
    .then(async (userSelectedAreaBokings) => {
      await userSelectedAreaBokings.forEach((doc) => {
        console.log('location ' + doc.data().location)
      });
      res.send({
        status: true
      });
    })
    .catch((error) => {
      res.send({
        status: false,
      });
    });
};
