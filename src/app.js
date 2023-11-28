const express = require("express");
const applyMiddleware = require("./middlewares/applyMiddleware");
const connectDB = require("./db/connectDB");
require("dotenv").config();
const app = express();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const port = process.env.PORT || 5000;

//routes
const userRoutes = require("./routes/users");
const campRoutes = require("./routes/camps");
const registeredCampRoutes = require("./routes/RegisteredCamps");

applyMiddleware(app);

app.use(userRoutes);
app.use(campRoutes);
app.use(registeredCampRoutes);



app.get("/", (req, res) => {
  res.send("Service Server Is Running");
});

app.all("*", (req, res, next) => {
  const err = new Error(`The Requested URL [${req.url}] Is Invalid`);
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
  });
});

// database connect
// const main = async () => {
//   await connectDB();
//   app.listen(port, () => {
//     console.log(`Server Running on Port : ${port}`);
//   });
// };

// main();

module.exports = app;