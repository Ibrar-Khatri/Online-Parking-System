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
    .then( async(userBookings) => {
      console.log("Query Snapshot" + userBookings)
      await userBookings.map(bking => {
        let bookingDetails = bking.doc()
        return { ...bookingDetails, bookingsId: bking.id }
      })
      console.log("Bookings >>>> " + JSON.stringify(userBookings))
      res.send({
        status:true,bookings:userBookings
      })
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
      res.send({
        status: false, error: error
      });
    });
};
