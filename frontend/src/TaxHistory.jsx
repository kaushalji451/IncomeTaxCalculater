import React from "react";
import { useState, useEffect } from "react";
import TaxDetails from "./TaxDetails";
const TaxHistory = () => {
  // A state variable to store the Tax Calculation History
  const [data, setdata] = useState(null);

  // Fetch history data from backend
  useEffect(() => {
    let handleData = async () => {
      let responce = await fetch("http://localhost:8080/calculations");
      let result = await responce.json();
      if (result) {
        setdata(result);
      }
    };
    handleData();
  }, []);

  return (
    <>
      <div className="h-[80vh] border bg-slate-200 border-slate-300 rounded-xl pt-6 overflow-y-scroll">
        <h1 className="font-bold text-2xl text-center">
          Your History of Calculating Income Tax
        </h1>

        {/* // Render history if data is available */}
        {data != null &&
          data.map((data) => (
            <div>
              <TaxDetails data={data}></TaxDetails>
            </div>
          ))}
      </div>
    </>
  );
};

export default TaxHistory;
