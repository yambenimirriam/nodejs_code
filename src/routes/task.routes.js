import express from "express";
import {
  createTask,
  getTask,
  deleteTask,
  updateTask,
} from "../controllers/task.controller.js";

const router = express.Router();

router.route("/").post(createTask);
router.route("/").get(getTask);
router.route("/:id").patch(updateTask);
router.route("/:id").delete(deleteTask);

export default router;
