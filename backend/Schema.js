const Joi = require("joi");

const TaxSchema = Joi.object({
  income: Joi.number().required(),
}).required();

module.exports = TaxSchema;
