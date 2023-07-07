"use strict";

console.log("******************** index ");
const connectDB = require("./config/db.config.js");

const app = require("./server.js");

const port = process.env.PORT || 3000;

const DATABASR_URL = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/';
connectDB(DATABASR_URL).then(() => {
    app.listen(port, ()=>{
        console.log(`🚀 Server is running on http://127.0.0.1:${port}`);
    });
}).catch((err) => {
    console.log(">>>>>>>>>>Error is ::", err.message);
});