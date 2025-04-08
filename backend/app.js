const express = require("express");
const cors = require("cors");
const { ValideteTax } = require("./middleware");
const calculateTax = require("./taxcalculation");
const mongoose = require("mongoose");
const Calculation = require('./models/Calculation');
const data = require("./dummydata");
const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// db connection
const main = async () => {
  await mongoose
    .connect("mongodb://127.0.0.1:27017/calculatetax")
    .then(console.log("connect to db"));
};
main();

// ValideteTax
app.post("/calculate-tax", ValideteTax, async(req, res) => {
  let { income, fillingStatus, age } = req.body;
  let data = calculateTax(income);

  let result = await Calculation.insertOne({
    income : income,
    taxAmount : data.totalTax,
    age : age,
    fillingStatus : fillingStatus,
    taxBreakdown : data.TaxBreakdown
  });
  res.json(result);
});

app.get("/calculations", async(req, res) => {
  let data  =await Calculation.find({});
  if(data){
    res.json(data);
  }
  else{
    res.json("no values find");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
