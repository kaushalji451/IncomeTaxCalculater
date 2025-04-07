module.exports.data = [
  {
    taxableIncome: 750000,
    taxAmount: 45000,
    taxBreakdown: [
      { slab: 0 - 250000, rate: 0, amount: 0 },
      { slab: 250001 - 500000, rate: 0.05, amount: 12500 },
      { slab: 500001 - 750000, rate: 0.1, amount: 32500 },
    ],
  },
  {
    taxableIncome: 1000000,
    taxAmount: 75000,
    taxBreakdown: [
      { slab: 0 - 250000, rate: 0, amount: 0 },
      { slab: 250001 - 500000, rate: 0.05, amount: 12500 },
      { slab: 500001 - 750000, rate: 0.1, amount: 32500 },
      { slab: 750001 - 1000000, rate: 0.15, amount: 75000 },
    ],
  },
  {
    taxableIncome: 1200000,
    taxAmount: 90000,
    taxBreakdown: [
      { slab: 0 - 250000, rate: 0, amount: 0 },
      { slab: 250001 - 500000, rate: 0.05, amount: 12500 },
      { slab: 500001 - 750000, rate: 0.1, amount: 32500 },
      { slab: 750001 - 1000000, rate: 0.15, amount: 75000 },
      { slab: 1000001 - 1200000, rate: 0.2, amount: 90000 },
    ],
  },
  {
    taxableIncome: 1500000,
    taxAmount: 120000,
    taxBreakdown: [
      { slab: 0 - 250000, rate: 0, amount: 0 },
      { slab: 250001 - 500000, rate: 0.05, amount: 12500 },
      { slab: 500001 - 750000, rate: 0.1, amount: 32500 },
      { slab: 750001 - 1000000, rate: 0.15, amount: 75000 },
      { slab: 1000001 - 1500000, rate: 0.25, amount: 120000 },
    ],
  },
  {
    taxableIncome: 2000000,
    taxAmount: 200000,
    taxBreakdown: [
      { slab: 0 - 250000, rate: 0, amount: 0 },
      { slab: 250001 - 500000, rate: 0.05, amount: 12500 },
      { slab: 500001 - 750000, rate: 0.1, amount: 32500 },
      { slab: 750001 - 1000000, rate: 0.15, amount: 75000 },
      { slab: 1000001 - 1500000, rate: 0.25, amount: 120000 },
      { slab: 1500001 - 2000000, rate: 0.3, amount: 200000 },
    ],
  },
];
