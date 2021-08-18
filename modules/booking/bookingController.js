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
  let userBookingDet = req.body
  console.log('location ' + JSON.stringify(userBookingDet))
  db.collection("bookings")
    .where("location", "==", userBookingDet.location)
    .get()
    .then(async (userSelectedAreaBokings) => {
      await userSelectedAreaBokings.forEach((doc) => {
        console.log('location ' + doc.data().startTime)
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


// let userStart = 2
// let userEnd = 5
// let myStart = 6
// let myEnd = 8
// Date.parse(new Date(2020, 5, 20))
// if((myStart > userStart && myEnd   > userEnd) || (myStart < userStart && myEnd < userEnd )){
// console.log(true)
// }else{
// console.log(false)
// }
