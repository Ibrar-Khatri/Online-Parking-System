const firebaseConfig = require("../../firebaseConfig/firebaseConfig");
const db = firebaseConfig.firestore();
const firebase = require("firebase");

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
  console.log('user details +>' + req.body)
  let userBookingDet = req.body
  db.collection("bookings")
    .where("nameOfLocation", "==", userBookingDet.nameOfLocation)
    .where()
    .get()
    .then(async (userSelectedAreaBokings) => {
      await userSelectedAreaBokings.forEach((doc) => {
        console.log('Namae of location ' + doc.data().nameOfLocation)
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
