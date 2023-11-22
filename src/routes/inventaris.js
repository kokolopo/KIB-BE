import express from "express";
import inventarisController from "../controllers/inventaris_controller.js";

const inventaris = express.Router();

inventaris.put("/A/:id/:kib_id", inventarisController.updateInventarisA);

export default inventaris;
