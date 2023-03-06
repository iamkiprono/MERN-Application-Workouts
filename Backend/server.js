require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const workoutRoutes = require("./routes/workouts");

const app = express();

// middleware
app.use(express.json());

app.use("/api/workouts", workoutRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log(
        "Connected to db and server is running on port",
        process.env.PORT
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
  