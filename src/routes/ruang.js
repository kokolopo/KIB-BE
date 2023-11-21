import express from "express";
import ruangController from "../controllers/ruang_controller.js";

const ruang = express.Router();

ruang.get("/", ruangController.getAll);

export default ruang;
