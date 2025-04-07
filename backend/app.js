const express = require("express");
const cors = require("cors");
const { ValideteTax } = require("./middleware");
const calculateTax = require("./taxcalculation");
const data = require("./dummydata");
const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/calculate-tax", ValideteTax, (req, res) => {
  let { income } = req.body;
  let data = calculateTax(income);
  res.json(data.TaxBreakdown);
});

app.get("/calculations", (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
