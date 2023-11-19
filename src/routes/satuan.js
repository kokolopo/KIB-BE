import express from "express";
import satuanController from "../controllers/satuan_controller.js";

const satuan = express.Router();

satuan.get("/", satuanController.getAll);

export default satuan;
