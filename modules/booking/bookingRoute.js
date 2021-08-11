const express = require("express");
const route = express.Router();
const bookingController = require("./bookingController");

route.post("/book-parking", bookingController.bookParkingArea);
route.post("/user-bookings", bookingController.getUsersAllBookings);

module.exports = route;
