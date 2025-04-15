import React, { useState } from "react";
import TaxDetails from "./TaxDetails";
const TaxCalculation = () => {
  // to store the tax calculation result from the backend
  const [formdata, setformdata] = useState({
    year: "",
    categery: "",
    age: "",
    resStatus: "",
    income: "",
    regime: "",
  });

  //to store the data fetch from backend
  const [data, setdata] = useState(null);

  // handle form input changes
  let handleChange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  // to post the data to backend and fetch the tax Calculation result
  let handleSubmit = async (e) => {
    e.preventDefault(); //to prevent the form default behavior
    try {
      let responce = await fetch(`${import.meta.env.VITE_API_BASE_URL}/calculate-tax`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });
      let result = await responce.json();
      setdata(result); // set the output from backend to data State

      e.target.reset(); // reset the form fields
    } catch (error) {
      console.log(error); // log any errors to the console
    }
  };

  return (
    <>
      <div className=" border bg-slate-200 border-slate-300 rounded-xl mb-20">
        <h1 className="font-bold text-2xl text-center py-4">
          Fill your Details
        </h1>
        {/* form to submit user input */}
        <form onSubmit={handleSubmit}>
          <div className="flex  flex-col w-full items-center">
            <div className="flex flex-col gap-2  pb-2 w-full px-10">
              {/* regime type */}
              <div className="flex flex-col gap-2  pb-2 ">
                <label htmlFor="regime">Regime</label>
                <select
                  name="regime"
                  id="regime"
                  className="bg-white rounded-xl py-3 px-2"
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled selected>
                    Select your Regime
                  </option>
                  <option value="oldRegime">Old Regime</option>
                  <option value="newRegime">New Regime</option>
                </select>
              </div>

              <div className="flex w-full gap-5">
                {/* assisment year */}
                <div className="flex flex-col gap-2  pb-2 w-1/2">
                  {" "}
                  <label htmlFor="year">Assessment Year</label>
                  <select
                    name="year"
                    id="year"
                    className="bg-white rounded-xl py-3 px-2"
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled selected>
                      Select your Assisment Year
                    </option>
                    <option value="2025-2026">2025-2026</option>
                    <option value="2025-2026">2024-2025</option>
                  </select>
                </div>
                {/* Taxpayer Categery */}
                <div className="flex flex-col gap-2  pb-2 w-1/2">
                  <label htmlFor="categery">Taxpayer Categery</label>
                  <select
                    name="categery"
                    id="categery"
                    className="bg-white rounded-xl py-3 px-2"
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled selected>
                      Select your Taxpayer Categery
                    </option>
                    <option value="individual">Individual</option>
                    <option value="huf">HUF</option>
                    <option value="aop">
                      Association of Persons &#40;AOP &#41; / Body of
                      Individuals &#40;BOI &#41;
                    </option>
                  </select>
                </div>
              </div>

              <div className="flex gap-5">
                {/* Your age  */}
                <div className="flex flex-col gap-2  pb-2 w-1/2">
                  {" "}
                  <label htmlFor="age">Your Age</label>
                  <select
                    name="age"
                    id="age"
                    className="bg-white rounded-xl py-3 px-2"
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled selected>
                      Select your Your Age
                    </option>
                    <option value="0-60">Below 60 years</option>
                    <option value="60-79">Between 60-79</option>
                    <option value="80">80 and above</option>
                  </select>
                </div>

                {/* Ressidencial stataus   */}
                <div className="flex flex-col gap-2  pb-2 w-1/2">
                  {" "}
                  <label htmlFor="resStatus">Residental Status</label>
                  <select
                    name="resStatus"
                    id="resStatus"
                    className="bg-white rounded-xl py-3 px-2"
                    required
                    onChange={handleChange}
                  >
                    <option value="" disabled selected>
                      Select your Residental Status
                    </option>
                    <option value="res">RES &#40;Resident&#41;</option>
                    <option value="rnor">
                      RNOR &#40;Resident But Not Ordinarily Resident&#41;
                    </option>
                    <option value="nr">NR &#40;Non Resident&#41;</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex flex-col w-1/2 gap-2">
                  {/* total income  */}
                  <label htmlFor="income">Total Anual Income</label>
                  <input
                    type="number"
                    className="bg-white rounded-xl py-3 px-2"
                    id="income"
                    name="income"
                    placeholder="0"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm w-1/3 mt-4 px-5 py-2.5 text-center me-2 mb-2"
            >
              Sumbit
            </button>
          </div>
        </form>

        {/* // Display the tax calculation result */}
        {/*// show result section only if income is present in response*/}
        {data != null && (
    <TaxDetails data={data}></TaxDetails>
        )}
      </div>
    </>
  );
};

export default TaxCalculation;
