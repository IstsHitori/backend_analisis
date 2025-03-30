//Error
import errorHandler from "./middlewares/errorHandler";
//
import express from "express";
import morgan from "morgan";
import { connectDB } from "./config/db";
import dotenv from "dotenv";
//Routes
import authRoutes from "./routes/authRoutes";
//

dotenv.config();

const app = express();
connectDB();
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/api/auth", authRoutes);

app.use(errorHandler);
export default app;
