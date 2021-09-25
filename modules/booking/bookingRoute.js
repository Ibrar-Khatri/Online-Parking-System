const express = require("express");
const route = express.Router();
const bookingController = require("./bookingController");

route.post("/book-parking", bookingController.bookParkingArea);
route.post("/user-bookings", bookingController.getUsersAllBookings);
route.post("/get-available-slots", bookingController.getAllBookingsOfSelectedArea);
route.post("/delete-upcoming-booking", bookingController.deletUpcomingBookingById);

module.exports = route;
