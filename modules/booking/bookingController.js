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
  // console.log('location ' + JSON.stringify(userBookingDet))
  db.collection("bookings")
    .where("location", "==", userBookingDet.location)
    .get()
    .then(async (userSelectedAreaBokings) => {
      let bookedSlot = []
      await userSelectedAreaBokings.forEach((doc,) => {
        let start = Date.parse(userBookingDet.startTime).between(new Date(doc.data().startTime), new Date(doc.data().endTime))
        let end = Date.parse(userBookingDet.endTime).between(new Date(doc.data().startTime), new Date(doc.data().endTime))
        if (start || end) {
          bookedSlot.push(doc.data().slotName)
          console.log("hello" + doc.data().slotName)
        }


        //cutome work
        // let myStart = Date.parse(new Date(userBookingDet.startTime))
        // let myEnd = Date.parse(new Date(userBookingDet.endTime))
        // let userStart = Date.parse(new Date(doc.data().startTime))
        // let userEnd = Date.parse(new Date(doc.data().endTime))
        // if ((myStart > userStart && userEnd < myStart) || (myStart < userStart && myEnd < userStart)) {
        //   bookedSlot.push(doc.data().slotName)
        // }
      })
      console.log(bookedSlot)
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