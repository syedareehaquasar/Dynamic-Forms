import * as Mongoose from "mongoose";

let database: Mongoose.Connection;

export const connect = () => {

  const uri = "mongodb+srv://formdata:mama%40123@cluster0.ad708cn.mongodb.net/?retryWrites=true&w=majority";
  
  if (database) {
    return;
  }

  Mongoose.connect(uri);

  database = Mongoose.connection;

  database.once("open", async () => {
    console.log("Connected to database");
  });

  database.on("error", () => {
    console.log("Error connecting to database");
  });

  return;
};

export const disconnect = () => {
  if (!database) {
    return;
  }

  Mongoose.disconnect();
};