const firebaseConfig = require("../../firebaseConfig/firebaseConfig");
const db = firebaseConfig.firestore();
const firebase = require("firebase");

module.exports.bookParkingArea = (req, res) => {
  console.log("Responed data " + JSON.stringify(req.body.userId));
  db.collection("bookings")
    .add(req.body)
    .then((slotBooked) => {
      console.log(
        "Document successfully written!",
        JSON.stringify(slotBooked.id)
      );
      db.collection("user")
        .doc(req.body.userId)
        .update({
          myBookings: firebase.firestore.FieldValue.arrayUnion(Date.now()),
        })
        .then((bookingAdd) => {
          res.send({
            status: true,
            booking: slotBooked,
          });
        });
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
      res.send({
        status: false,
      });
    });
};
