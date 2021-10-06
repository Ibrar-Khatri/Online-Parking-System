const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoute = require("./modules/user/userRoute");
const bookingRoute = require("./modules/booking/bookingRoute");
const port = process.env.PORT || 7000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use("/user", userRoute);
app.use("/booking", bookingRoute);

app.get("*", (req, res) => {
  res.send("<h1>Welcome to online parking system</h1>");
});

let server = app.listen(port, () => {
  console.log(`Server Started Successfully`);
});

let socket = require('socket.io')(server);
socket.on('connection', (socket) => {
  console.log('Client Connected ...!')

  socket.on('newUserCreated', (user) => {
    socket.broadcast.emit('newUserAdded', user)
  })
  socket.on('userDeleted', (uid) => {
    socket.broadcast.emit('userDeletedNotifyToUser', uid)
  })
  socket.on('newParkingAreaAdded', (newParking) => {
    socket.broadcast.emit('newParkingArea', newParking)
  })
  socket.on('parkingAreaRemoved', (removedParkingAreaDet) => {
    socket.broadcast.emit('parkingAreaRemovedByAdmin', removedParkingAreaDet)
  })
  socket.on('add-new-booking', newBooking => {
    socket.broadcast.emit('new-booking-added', newBooking)
  })
  socket.on('upcomingBookingDeleted', (bookingID) => {
    socket.broadcast.emit('bookingDeleted', bookingID)
  })
})