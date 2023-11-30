import express from "express";
import inventarisController from "../controllers/inventaris_controller.js";

const inventaris = express.Router();

inventaris.put("/edit/A/:kib_id", inventarisController.updateInventarisA);
inventaris.put("/edit/B/:kib_id", inventarisController.updateInventarisB);
inventaris.put("/edit/C/:kib_id", inventarisController.updateInventarisC);
inventaris.put("/edit/D/:kib_id", inventarisController.updateInventarisD);

inventaris.post("/add/A", inventarisController.insertInventarisA);
inventaris.post("/add/B", inventarisController.insertInventarisB);

export default inventaris;
