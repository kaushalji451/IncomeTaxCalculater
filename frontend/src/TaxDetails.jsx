import React from 'react'

const TaxDetails = ({data}) => {
  return (
    <div className="border-t mt-20  mt-4 px-20">
    <h1 className="font-bold text-3xl text-center pb-4 py-6">
      Your Tax Details
    </h1>
    <div className="flex justify-between border-t border-slate-500 py-2">
      <p className="px-4 text-slate-700 text-xl">Regime Type</p>
      {data.regime === "oldRegime" ? (
        <p>Old Regime</p>
      ) : (
        <p>New Regime</p>
      )}
    </div>
    <div className="flex justify-between border-t border-slate-500 py-2">
      <p className="px-4 text-slate-700 text-xl">Gross Total Income</p>
      <p>₹{data.anualIncome}</p>
    </div>
    <div className="flex justify-between border-t border-slate-500 py-2">
      <p className="px-4 text-slate-700 text-xl ">Eligible Deduction</p>
      <p>₹{data.deduction}</p>
    </div>
    <div className="flex justify-between border-t border-slate-500 py-2">
      <p className="px-4 text-slate-700 text-xl ">Total Income</p>
      <p>₹{data.taxableIncome}</p>
    </div>

    <div className="flex justify-between border-t border-slate-500 py-2">
      <h1 className="text-xl py-4 font-semibold">
        Computation fo Tax Liability
      </h1>
    </div>
    <div className="flex justify-between border-t border-slate-500 py-2">
      <p className="px-4 text-slate-700 text-xl">
        Income tax After relief u/s 87A
      </p>
      <p>₹{data.tax}</p>
    </div>
    <div className="flex justify-between border-t border-slate-500 py-2">
      <p className="px-4 text-slate-700 text-xl">Surcharge</p>
      <p>₹{data.surcharge}</p>
    </div>
    <div className="flex justify-between border-t border-slate-500 py-2">
      <p className="px-4 text-slate-700 text-xl">
        Health And Education Cess
      </p>
      <p>₹{data.cess}</p>
    </div>
    <div className="flex justify-between border-t border-slate-500 py-2">
      <p className="px-4 text-slate-700 text-xl">Total Tax Liability</p>
      <p>₹{data.totalTax}</p>
    </div>
    <div className="my-4 py-4 border-t">
      <p className="font-bold text-3xl text-center">Tax BreakDown</p>
      <div className="flex justify-around py-4 font-bold text-2xl">
        <p>Tax Slab</p>
        <p>Tax Amount</p>
      </div>
      <p>
        {/* map to get all taxbreakdown one by one */}
        {data != null &&
          data.taxBreakdown.map((d) => (
            <div className="flex gap-5  justify-around text-xl border-t border-b border-slate-400 py-2">
                <p className="">{d.slab || 0}</p>
              <p>₹{Math.floor(d.amount)}</p>
            </div>
          ))}
      </p>
    </div>
  </div>
  )
}

export default TaxDetails
