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
  
  // // Calculate income tax using the calculateTax function
  let body = req.body;
  let data = calculateTax(body);
  // // Store the calculated tax data in the database
  try {
    let result = await Calculation.insertOne({
     assismenYear : body.year,
     categery : body.categery,
     age : body.age,
     residentalStatus : body.resStatus,
     anualIncome : body.income,
     deduction : body.deduction,
     totalTax : data.totalTax,
     taxableIncome : data.taxableincome,
     taxBreakdown : data.taxBreakdown, 
    });
    
  res.json(result);
  } catch (error) {
    console.log(error); 
  }
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
