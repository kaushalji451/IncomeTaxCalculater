const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const calculationSchema = new Schema(
  {
    income: {
      type: Number,
      required: true,
    },
    taxAmount: {
      type: Number,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    fillingStatus: {
      type: String,
      required: true,
    },
    taxBreakdown: [
      {
        slab: String,
        rate: Number,
        amount: Number,
      },
    ],
  },
  { timestamps: true }
);

const Calculation = mongoose.model("Calculation", calculationSchema);

module.exports = Calculation;
