# Incometax calculator api 
 this is a microservice to calculate the income tax by getting the user details like ,
 gross income,year of bussiness, nature of bussiness.

# Table of Content
 Api Endpoint
 Tax Calculation Logic
 Backend Setup
 FrontEnd Setup
 Taech Stack

# Api Endpoint

 post - /calculate-tax  
 Description - Getting the user input and calculating the income tax and save it onto the database.
 Request body -

    {
    "income" : 925000,
    "fillingStatus" : "indivisual",
    "age" : 30
    }

  Response - 

    {
    "_id": "...",
    "income": 925000,
    "taxAmount": 32499.85,
    "fillingStatus": "individual",
    "age": 30,
    "taxBreakdown": [
        {
        "slab": "₹0 - ₹400000",
        "rate": "0%",
        "amount": "0.00"
        },
        ...
    ]
    }
  
    Get - /calculation 
    Description - getting the all Historical data from the backend and return in the from of json data.

    Response - 
    [
    {
        "_id": "...",
        "income": 1000000,
        "taxAmount": 75000,
        "fillingStatus": "HUF",
        "age": 42
    },
    ...
    ]


# Tax Calculation Logic
    To calculate the income the this is the slab as Defin below.

    Slab Range(₹)                   Rate
    0 - 400000                      0%
    400001 - 800000                 5%
    800001 - 1200000                10%
    1200001 - 1600000               15%
    1600001 - 2000000               20%

    the logic has been iterate throught the range only the amout within the slab range.


# Backend Setup
 1. Clone the Repo.
    git clone https://github.com/kaushalji451/IncomeTaxCalculater.git
    cd backend

 2. Install dependencies.
    npm install 

 3. Start the mongodb (Insue the mongdb run localy)

 4. Run the Server
    node app.js

 5. Server is running on port:-  http://localhost:8080  


# Frontend Setup

 1. Navigate to frontend Folder 
    cd ../frontend

  2. Install dependencies
    npm install

  3. Start React Server
    npm run dev

  4. Frontend running on prt : http://localhost:5173

# Tech Stack 

  Frontend   - React.js , Tailwind Css  
  Backend    - Node.js , Express.js , 
  Database   - MongoDb 
  Validation - Joi











