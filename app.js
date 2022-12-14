const express = require("express");
const app = express();
const cors = require("cors");

// require("dotenv").config({ path: ".env" });

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  try {
    console.log("api is running");
    res.send("<h1>Exam Hub Running</h1>");
  } catch (err) {
    console.log("error");
  }
});

const usersRoute = require("./routes/users");
const questionsRoute = require("./routes/questions");
app.use("/users", usersRoute);
app.use("/questions", questionsRoute);
app.listen(process.env.PORT || 4000);
