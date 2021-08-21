const firebaseConfig = require("../../firebaseConfig/firebaseConfig");
const db = firebaseConfig.firestore();
const firebase = require("firebase");
require('datejs')

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
}

module.exports.getAvailaleBookingsFromDB = (req, res) => {
  let userBookingDet = req.body
  console.log('location ' + JSON.stringify(userBookingDet))
  db.collection("bookings")
    .where("location", "==", userBookingDet.location)
    .get()
    .then(async (userSelectedAreaBokings) => {

      let availableBookings = []

      await userSelectedAreaBokings.forEach((doc) => {
        // console.log('location ' + doc.data().startTime)
        // console.log('start Time Aavailble ', date.parse(userBookingDet.startTime).between(doc.data().startTime, doc.data().endTime))
        // console.log('End time also available', date.parse(userBookingDet.endTime).between(doc.data().startTime, doc.data().endTime))
        console.log('start Time Aavailble '+ Date.parse(userBookingDet.startTime).between(doc.data().startTime, doc.data().endTime))
        // console.log('End time also available' )
      })
      res.send({
        status: true
      })
    })
    .catch((error) => {
      res.send({
        status: false,
      });
    });
};









// let userStart = 2
// let userEnd = 4
// let myStart = 3
// let myEnd = 140

// console.log('User Start', userStart)
// console.log('User End', userEnd)
// console.log('My Start', myStart)
// console.log('My End', myEnd)



// if ((myStart > userStart && userEnd < myStart) || (myStart < userStart && myEnd < userStart)) {
//   console.log('Available')
// } else {
//   console.log('Not available')
// }