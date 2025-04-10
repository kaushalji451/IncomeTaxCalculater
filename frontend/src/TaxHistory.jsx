import React from "react";
import { useState } from "react";
const TaxHistory = () => {
  // A state variable to store the Tax Calculation History
  const [data, setdata] = useState(null);

  // Fetch history data from backend
  let handleClick = async () => {
    let responce = await fetch("http://localhost:8080/calculations");
    let result = await responce.json();
    if (result) {
      setdata(result);
      console.log(result);
    }
  };
  return (
    <>
      <div className="w-1/2 border bg-slate-200 border-slate-300 rounded-xl pt-6 overflow-y-scroll">
        <h1 className="font-bold text-2xl text-center">
          Your History of Calculating Income Tax
        </h1>
        <div className="w-full flex justify-center">
          <button
            type="submit"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-md w-1/3 mt-4 px-5 py-2.5 text-center me-2 mb-2"
            onClick={handleClick}
          >
            Show All Past History
          </button>
        </div>

        {/* // Render history if data is available */}
        {data != null &&
          data.map((data) => (
            <div className="border py-4 mb-2 mx-4 px-4 rounded-xl border-slate-500 bg-slate-200">
              <div className="flex gap-5">
                <p className="font-bold">Income</p>
                <p>{data.income}</p>
              </div>

              <div className="flex gap-5">
                <p className="font-bold">Tax Amount</p>
                <p>{data.taxAmount}</p>
              </div>

              <div className="flex gap-5">
                <p className="font-bold">Filling Status</p>
                <p>{data.fillingStatus}</p>
              </div>

              <div className="py-4">
              <p className="font-bold text-xl text-center">Tax BreakDown</p>
              <div className="flex justify-around py-4 font-bold">
                <p>Slab</p>
                <p>Tax Amount</p>
              </div>
              <p>
                
                {/* map to get all taxbreakdown one by one */}
                {data.taxBreakdown.map((data) => (
                  <div className="flex gap-5 justify-around">
                    <p>{data.slab || 0}</p>
                    <p>₹{data.amount}</p>
                  </div>
                ))}
              </p>
            </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default TaxHistory;
