require("dotenv").config();

import express from "express";
import configViewEngien from "./config/viewEngien";
import initWebRoutes from "./routes/web";
let app =express();
// config view engine
configViewEngien(app);
// init all web routes
initWebRoutes(app);

let port=process.env.PORT || 8080;
app.listen(port,()=>{
    console.log(`App is running at the port ${port}`);
});
