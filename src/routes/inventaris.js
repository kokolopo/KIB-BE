import express from "express";
import inventarisController from "../controllers/inventaris_controller.js";

const inventaris = express.Router();

inventaris.put("/A/edit/:kib_id", inventarisController.updateInventarisA);
inventaris.put("/B/edit/:kib_id", inventarisController.updateInventarisB);
inventaris.put("/C/edit/:kib_id", inventarisController.updateInventarisC);
inventaris.put("/D/edit/:kib_id", inventarisController.updateInventarisD);

export default inventaris;
