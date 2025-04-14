const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const mainRoutes = require("./routes/TaxRoute");
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

app.use("/calculate-tax", mainRoutes);
app.use("/calculations", mainRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
