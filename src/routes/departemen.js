import express from "express";
import departemenController from "../controllers/departemen_controller.js";

const departemen = express.Router();

departemen.get("/", departemenController.getAll);

export default departemen;
