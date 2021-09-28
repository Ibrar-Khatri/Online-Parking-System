const express = require("express");
const route = express.Router();
const bookingController = require("./bookingController");

route.get("/get-all-parking-areas", bookingController.getAllParkingAreas);
route.post("/add-new-location", bookingController.craeteNewParkingArea);
route.post("/book-parking", bookingController.bookParkingArea);
route.post("/user-bookings", bookingController.getUsersAllBookings);
route.post("/get-available-slots", bookingController.getAllBookingsOfSelectedArea);
route.post("/delete-upcoming-booking", bookingController.deletUpcomingBookingById);

module.exports = route;
