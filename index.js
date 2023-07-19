import express from "express";
import * as dotenv from "dotenv";
import connectDB from "./src/db/connect.js";
import tasks from "./src/routes/task.routes.js";
dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
app.use("/api/v1/tasks", tasks);

const startserver = async () => {
  await connectDB(process.env.MONGDB_URL);
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
};

startserver();
