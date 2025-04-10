let slabArray = [
  { from: 0, to: 400000, rate: 0 },
  { from: 400001, to: 800000, rate: 5 },
  { from: 800001, to: 1200000, rate: 10 },
  { from: 1200001, to: 1600000, rate: 15 },
  { from: 1600001, to: 2000000, rate: 20 },
];
module.exports = function calculateTax(taxableincome) {
  let totalTax = 0;
  let TaxBreakdown = [];

  for (let slab of slabArray) {
    if (taxableincome < slab.from) {
      continue;
    }

    let slabFrom = slab.from;
    let slabTo = Math.min(taxableincome, slab.to);

    let slabIncome = slabTo - slabFrom;

    let slabtax = (slabIncome * slab.rate) / 100;
    totalTax += slabtax;
    TaxBreakdown.push({
      slab: `₹${slabFrom} - ₹${slabTo}`,
      rate: `${slab.rate / 100}`,
      amount: `${slabtax}`,
    });

    if (taxableincome <= slab.to) {
      break;
    }
  }

  return {
    taxableincome,
    totalTax,
    TaxBreakdown,
  };
};
