const express = require("express");
const cors = require("cors");
const { ValidateTax } = require("./middleware");
const calculateTax = require("./taxcalculation");
const mongoose = require("mongoose");
const Calculation = require("./models/Calculation");
const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB database
const main = async () => {
  await mongoose
    .connect("mongodb://127.0.0.1:27017/calculatetax")
    .then(console.log("connect to db"));
};
main();

// Validate the request using the ValidateTax middleware
app.post("/calculate-tax", ValidateTax, async (req, res) => {
  let { income, fillingStatus, age } = req.body;

  // Calculate income tax using the calculateTax function
  let data = calculateTax(income);

  // Store the calculated tax data in the database
  let result = await Calculation.insertOne({
    income: income,
    taxAmount: data.totalTax,
    age: age,
    fillingStatus: fillingStatus,
    taxBreakdown: data.TaxBreakdown,
  });
  res.json(result);
});

// Fetch historical tax data from the database
app.get("/calculations", async (req, res) => {
  let data = await Calculation.find({});
  if (data) {
    res.json(data);
  } else {
    res.json("no values find");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
