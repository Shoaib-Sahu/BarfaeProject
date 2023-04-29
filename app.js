import express from 'express';
import userRoute from "./routes/userRoute.js";
const app = express();

// Middleware
app.use(express.json());

// Imported route
app.use("/user", userRoute);

export default app