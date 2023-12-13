// require('dotenv).config({path: './env})
import dotenv from 'dotenv';
import connectDB from './db/index.js';

dotenv.config({
    path: process.cwd() + '/.env',
});

connectDB();

















/*
import express from "express";
const app = express()(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
        console.log("ERROR: ", error)
        throw error
    })

    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`)
    })
  } catch (ERROR) {
    console.log("Error al conectar a la base de datos: ", ERROR);
    throw err;
  }
})();
*/
