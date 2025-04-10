import React, { useState } from "react";
import TaxCalculation from "./TaxCalculation";
import TaxHistory from "./TaxHistory";
const App = () => {
  return (
    <>
      <div className=" h-screen flex justify-center items-center">
        <div className=" w-[80%] h-full rounded-xl p-4">
          <h1 className="text-center py-6 font-bold text-2xl">
            Income Tax Calculater
          </h1>

          <div className="w-full flex gap-4 h-[90%] ">
            <TaxCalculation></TaxCalculation>   {/*Tax Calculation Component   */}
            <TaxHistory></TaxHistory>           {/* All tax History Component */}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
