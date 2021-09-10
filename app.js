const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoute = require("./modules/user/userRoute");
const bookingRoute = require("./modules/booking/bookingRoute");
const port = process.env.PORT || 7000;
var multer = require("multer");
var upload = multer({});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("*", (req, res) => {
  res.send("<h1>Welcome to online parking system</h1>");
});

app.use("/user",upload.single(), userRoute);
app.use("/booking",  bookingRoute);

app.listen(port, () => {
  console.log(`Server Started Successfully`);
});
