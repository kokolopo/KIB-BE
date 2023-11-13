import express from "express";
import kategoriController from "../controllers/kategori_controller.js";

const kategori = express.Router();

kategori.get("/:kategori", kategoriController.getKategoris);

export default kategori;
