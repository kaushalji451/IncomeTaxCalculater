const TaxSchema = require('./Schema');

const ValideteTax = (req, res, next) => {
    const { error } = TaxSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
}

module.exports.ValideteTax  = ValideteTax;