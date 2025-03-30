import mongoose from "mongoose";
import colors from "colors";
import { exit } from "node:process";
import { env } from "./env";

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(env.MONGO_URI!);
    const url = `${connection.host}:${connection.port}`;
    console.log(colors.green.bold("MongoDB conectado en: " + url));
  } catch (error) {
    console.log(
      colors.red.bold(`Ha ocurrido un error al conectar a MongoDB:${error}`)
    );
    exit(1);
  }
};
