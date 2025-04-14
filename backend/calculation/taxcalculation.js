const {
  newRegimeSlab_2425,
  newRegimeSlab_2526,
  oldRegimeIndivisual,
  oldRegimeSeniorCitizen,
  oldRegimeSuperSeniorCitizen,
} = require("./taxSlab");

module.exports = function calculateTax(taxData) {
  let { income, deduction = 0, regime, age } = taxData;
  let taxableincome = income - deduction;
  let tax = 0;
  let totalTax = 0;
  let taxBreakdown = [];

  let slabs;

  if (regime === "newRegime") {
    if (taxData.year === "2025-2026") {
      slabs = newRegimeSlab_2526;
    } else {
      slabs = newRegimeSlab_2425;
    }
  } else {
    if (age >= "80") {
      slabs = oldRegimeSuperSeniorCitizen;
    } else if (age >= "60") {
      slabs = oldRegimeSeniorCitizen;
    } else {
      slabs = oldRegimeIndivisual;
    }
  }

  for (let slab of slabs) {
    if (taxableincome < slab.from) continue;

    let slabFrom = slab.from;
    let slabTo = Math.min(taxableincome, slab.to);
    let slabIncome = slabTo - slabFrom;

    let slabTax = (slabIncome * slab.rate) / 100;
    tax += slabTax;

    taxBreakdown.push({
      slab: `₹${slabFrom} - ₹${slabTo}`,
      rate: slab.rate / 100,
      amount: Math.round(slabTax),
    });

    if (taxableincome <= slab.to) break;
  }

  // added all tax in totaltax first
    totalTax+=tax;

  // // Apply surcharge based on income slabs
  let surchargeRate = 0;
  if (taxableincome > 5000000 && taxableincome <= 10000000) {
    surchargeRate = 10;
  } else if (taxableincome > 10000000 && taxableincome <= 20000000) {
    surchargeRate = 15;
  } else if (taxableincome > 20000000) {
    surchargeRate = 25;
  }
  let surchargeAmount = (tax * surchargeRate) / 100;
  totalTax += surchargeAmount;

  // Apply cess
  let cess = 0.04 * totalTax;
  totalTax += cess;

  return {
    taxableincome,
    tax: Math.round(tax),
    surcharge: Math.round(surchargeAmount),
    surchargeRate,
    cess: Math.round(cess),
    totalTax: Math.round(totalTax),
    taxBreakdown,
  };
};
