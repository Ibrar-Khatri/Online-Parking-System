const firebase = require("../../firebase/firebase");
const db = firebase.firestore();

module.exports.bookParkingArea = (req, res) => {
  // console.log("Responed data " + JSON.stringify(req.body));
  // res.send({
  //   status: true,
  // });

  // Add a new document in collection "cities"
  db.collection("bookings")
    .doc()
    .set(req.body)
    .then((slotBooked) => {
      console.log("Document successfully written!", slotBooked);
      res.send({
        status: true,
        booking: slotBooked,
      });
      db.collection("user")
        .doc(req.body.userId)
        .update({
          myBookings: db.FieldValue.arrayUnion("01"),
        });
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
      res.send({
        status: false,
      });
    });
};
