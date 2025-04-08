import React from 'react'
import { useState } from 'react';
const AllCalculation = () => {
    const [data, setdata] = useState(null);
    
      let handleClick = async()=>{
        let responce = await fetch("http://localhost:8080/calculations");
        let data =await responce.json();
        if(data){
          setdata(data);
        }
      }
  return (
   <>
   <div className="w-1/2 border bg-slate-200 border-slate-300 rounded-xl pt-6 overflow-y-scroll">
              <h1 className="font-bold text-2xl text-center">Your History of Calculating Income Tax</h1>
              <div className="w-full flex justify-center">
              <button
              type="submit"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-md w-1/3 mt-4 px-5 py-2.5 text-center me-2 mb-2"
              onClick={handleClick}
            >
              Show All Past History
            </button>
              </div>
        {data!=null && data.map((data)=>(
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
          
           </div>

        ))}

            </div>
   </>
  )
}

export default AllCalculation
