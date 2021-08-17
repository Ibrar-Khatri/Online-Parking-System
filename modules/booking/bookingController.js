const firebaseConfig = require("../../firebaseConfig/firebaseConfig");
const db = firebaseConfig.firestore();
const firebase = require("firebase");

module.exports.bookParkingArea = (req, res) => {
  // console.log("Responed data " + JSON.stringify(req.body.userId));
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
  console.log("Responed data " + req.body.userId);
  db.collection("bookings")
    .where("userId", "==", req.body.userId)
    .get()
    .then((userBookings) => {
      console.log("Query Snapshot" + userBookings);
      let bookings = userBookings.map((boks) => {
        return {...boks, bookingId:boks.id}
      });
      console.log('bookings lenght ' +bookings.length  + ' userbookings length' + userBookings.length)
      if(bookings.length === userBookings.length) {
        res.send({
          status: true,bookings:bookings
        });
      }
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
      res.send({
        status: false, error:error
      });
    });
};
