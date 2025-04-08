import React, { useState } from "react";

const TaxCalculation = () => {
  const [formdata, setformdata] = useState({
    income: "",
    fillingStatus: "",
    age: "",
  });
  const [data, sedata] = useState({});

  let handleChange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let responce = await fetch("http://localhost:8080/calculate-tax", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });
      let result = await responce.json();
      console.log(result);
      sedata(result);
      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="w-1/2 border bg-slate-200 border-slate-300 rounded-xl ">
        <h1 className="font-bold text-2xl text-center py-4">
          Fill your Details
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex  flex-col w-full items-center">
            <div className="flex flex-col gap-2  pb-2 w-2/3">
              <label htmlFor="income">Income</label>
              <input
                type="number"
                id="income"
                name="income"
                className="bg-white rounded-xl py-1 px-2"
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col gap-2  pb-2 w-2/3">
              <label htmlFor="filling-status">Filling status</label>
              <select
                name="fillingStatus"
                id="filling-status"
                className="bg-white rounded-xl py-1 px-2"
                onChange={handleChange}
                required
              >
                <option>Select your Filling status</option>
                <option value="individual">Individual</option>
                <option value="huf">HUF</option>
                <option value="company">Company </option>
                <option value="firm">Firm / LLP / Partnership</option>
                <option value="aop">
                  Association of Persons &#40;AOP &#41; / Body of Individuals
                  &#40;BOI &#41;
                </option>
              </select>
            </div>
            <div className="flex flex-col gap-2  pb-2 w-2/3">
              <label htmlFor="age">Age</label>
              <input
                type="number"
                id="age"
                name="age"
                className="bg-white rounded-xl py-1 px-2"
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm w-1/3 mt-4 px-5 py-2.5 text-center me-2 mb-2"
            >
              Sumbit
            </button>
          </div>
        </form>

        {data.income> 0 && <div className="bg-red-300 mt-4 px-8">
          <h1 className="font-bold text-2xl text-center pb-4">
            Your Tax Details
          </h1>
          <div className="flex justify-around">
            <p className="font-bold text-xl">Income</p>
            <p>₹{data.income}</p>
          </div>
          <div className="flex justify-around">
            <p className="font-bold text-xl">Total Tax</p>
            <p>₹{data.taxAmount}</p>
          </div>
          <div className="py-4">
            <p className="font-bold text-xl text-center">Tax BreakDown</p>
            <div className="flex justify-around py-4 font-bold">
                <p>Slab</p>
                <p>Tax Amount</p>
            </div>
            <p>
            {data.taxBreakdown.map((data) => (
                <div className="flex gap-5 justify-around">
                    <p>{data.slab || 0}</p>
                    <p>{data.amount}</p>
                </div>

              ))}
            </p>
          </div>
        </div>}
      </div>
    </>
  );
};

export default TaxCalculation;
