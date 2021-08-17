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
  // res.send({
  //   status: true,
  // });

  db.collection("bookings")
    .where("userId", "==", req.body.userId)
    .get()
    .then((userBookings) => {
      console.log("User Bookings" + JSON.stringify(userBookings));
      userBookings.map((bking) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        return {...bking, bookingId:bking.id}
      });
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
