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

app.get("*", (req, res) => {
  res.send("<h1>Welcome to online parking system</h1>");
});

app.use("/user", userRoute);
app.use("/booking", bookingRoute);

let server = app.listen(port, () => {
  console.log(`Server Started Successfully`);
});


let socket = require('socket.io')(server);
socket.on('connection', (socket) => {
  console.log('Client Connected ...!')
  socket.on('add-new-booking', () => {
    console.log('new booking added')
    socket.broadcast.emit('new-booking-added', 'notify all user')

  })

  // socket.on('Send-New-Message', (data) => {

  //   socket.broadcast.emit('On-Message-Received', data)

  // })
})