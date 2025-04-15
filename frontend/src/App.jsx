import React from "react";
import TaxCalculation from "./TaxCalculation";
import TaxHistory from "./TaxHistory";
import { Routes, Route, Link } from "react-router-dom";
const App = () => {
  return (
    <>
      <div className=" flex justify-center items-center">
        <div className=" w-[80%] h-full rounded-xl p-4">
          <h1 className="text-center py-6 font-bold text-2xl">
            Income Tax Calculater
          </h1>
          <div className="flex gap-5 pb-2">
            <Link to="/">
              <button
                type="button"
                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Calculator
              </button>
            </Link>

            <Link to="/history">
              <button
                type="button"
                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                History
              </button>
            </Link>
          </div>
          <div>
            <Routes>
              <Route path="/" element={<TaxCalculation />}></Route>
              <Route path="/history" element={<TaxHistory />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
