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
  db.collection("bookings")
    .where("location", "==", userBookingDet.location)
    .get()
    .then(async (userSelectedAreaBokings) => {
      let bookedSlot = []
      await userSelectedAreaBokings.forEach((doc) => {
        //datejs compare return 1,-1, and 0 
        let myStart = Date.parse(userBookingDet.startTime).compareTo(Date.parse(doc.data().startTime))
        let userStart = Date.parse(userBookingDet.startTime).compareTo(Date.parse(doc.data().endTime))
        let userEnd = Date.parse(userBookingDet.endTime).compareTo(Date.parse(doc.data().startTime))
        console.log("myStart " + myStart, 'userStart ' + userStart, 'userEnd ' + userEnd)
        if ((myStart === 1 && userStart === 1 || userStart === 0 ) || (myStart === -1 && userEnd === -1 || userEnd === 0)) {
          console.log('Available')
        }
        else {
          bookedSlot.push(doc.data().slotName)
        }
      })
      res.send({
        status: true,
        bookedSlot: bookedSlot
      })
    })
    .catch((error) => {
      res.send({
        status: false,
        error: error
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