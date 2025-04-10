const Joi = require("joi");

// Joi schema to validate tax calculation input
const TaxSchema = Joi.object({
  income: Joi.number().required(),
  fillingStatus: Joi.string().required(),
  age: Joi.number().required(),
}).required();

module.exports = TaxSchema;
