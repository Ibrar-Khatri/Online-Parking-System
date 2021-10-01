const { firebaseConfig } = require("../../firebaseConfig/firebaseConfig");
const db = firebaseConfig.firestore();
const firebase = require("firebase");
require('datejs')

module.exports.getAllParkingAreas = (req, res) => {
  db.collection('locations').get()
    .then(async parkingsAreas => {
      let locations = []
      await parkingsAreas.forEach((location) => {
        locations.push({ ...location.data(), id: location.id })
      });
      res.send({
        status: true, locations: locations
      })
    })
    .catch(error => {
      res.send({
        status: false,
      })
    })
};
module.exports.craeteNewParkingArea = (req, res) => {
  let locationDetails = req.body
  db.collection('locations').add(locationDetails)
    .then(locationAdded => {
      locationDetails.id = locationAdded.id
      res.send({
        status: true, locationDetails, message: 'New location Added Successfully'
      })
    })
    .catch(error => {
      res.send({
        status: false, message: 'Sorry something went wrong, Please try again'
      })
    })
};

module.exports.deleteParkingAreaFromDb = (req, res) => {

  let { locationId, location } = req.body
  db.collection("bookings")
    // .where("location", "==", location)
    .where("location", "==", location, '&&', "startTime", ">", Date.parse(new Date()))
    .get()
    .then(async (selectedAreaBookings) => {
      let bookings = []
      await selectedAreaBookings.forEach((bking) => {
        bookings.push({ ...bking.data(), id: bking.id })
      });
      console.log('bookings', bookings)
      res.send({
        status: true, message: 'Parking area removed successfully'
      })
    })
    .catch((error) => {
      console.log(error)
      res.send({
        status: false, message: 'Sorry something went wrong, Please try again'
      })
    });
  // db.collection("locations").doc(locationId).delete()
  //   .then(locationDeleted => {
  //     // res.send({
  //     //   status: true, message: 'Parking area removed successfully'
  //     // })

  //   })
  //   .catch(error => {
  //     res.send({
  //       status: false, message: 'Sorry something went wrong, Please try again'
  //     })
  //   })
};
module.exports.bookParkingArea = (req, res) => {
  db.collection("bookings")
    .add(req.body)
    .then((slotBooked) => {
      res.send({
        status: true,
        slotBooked: true,
        slotId: slotBooked.id,
        message: 'Booking added successfully'
      });
    })
    .catch((error) => {
      res.send({
        status: false,
        slotBooked: false,
        message: 'Sorry something went wrong, Please try again'
      });
    });
};

module.exports.getUsersAllBookings = (req, res) => {

  const dbReference = req.body.userId ? db.collection("bookings")
    .where("userId", "==", req.body.userId) : db.collection("bookings")

  dbReference
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

module.exports.getAllBookingsOfSelectedArea = (req, res) => {
  let location = req.body.location
  db.collection("bookings")
    .where("location", "==", location)
    .get()
    .then(async (selectedAreaBookings) => {
      let bookings = []
      await selectedAreaBookings.forEach((bking) => {
        bookings.push({ ...bking.data(), id: bking.id })
      });
      res.send({
        status: true,
        bookings: bookings
      })
    })
    .catch((error) => {
      res.send({
        status: false,
        error: error
      });
    });
};

module.exports.deletUpcomingBookingById = (req, res) => {
  db.collection("bookings").doc(req.body.id).delete()
    .then(bkingDeleted => {
      res.send({
        status: true,
        message: 'Booking deleted successfully'
      })
    })
    .catch(err => {
      res.send({
        status: false,
        message: 'Sorry something went wrong, Please try again'
      })
    })

};
