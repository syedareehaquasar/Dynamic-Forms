import * as Mongoose from "mongoose";

let database: Mongoose.Connection;

export const connect = () => {
  
  if (database) {
    return;
  }

  Mongoose.connect(process.env.URI);

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