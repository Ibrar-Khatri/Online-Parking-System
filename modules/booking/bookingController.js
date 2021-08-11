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
  console.log("Responed data " + JSON.stringify(req.body));
  // res.send({
  //   status: true,
  // });

  db.collection("bookings")
    .where("userId", "==", req.body)
    .get()
    .then((querySnapshot) => {
      console.log("Query Snapshot" + querySnapshot);
      res.send({
        status: true,
      });
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
      res.send({
        status: false,
      });
    });
};
