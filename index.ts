import express from "express";
import restaurantsRouter from "./routes/restaurants.js"
import cuisinesRouter from "./routes/cuisines.js"
import { errorHandler } from "./middleware/errorHandler.js";

// Variables
const PORT = process.env.PORT || 3000;
const app = express();

// Middlewares
app.use(express.json());
app.use(errorHandler)

// Routes
app.use('/restaurants', restaurantsRouter);
app.use('/cuisines', cuisinesRouter);


// App Initialization 
app.listen(PORT, ()=>{
    console.log("Application Running Successfully")
    console.log(`http://localhost:${PORT}`)
}).on("error", (error)=>{
    throw new Error(error.message);
})