import express from "express";
import inventarisController from "../controllers/inventaris_controller.js";

const inventaris = express.Router();

// INSERT ROUTE
inventaris.post("/add/A", inventarisController.insertInventarisA);
inventaris.post("/add/B", inventarisController.insertInventarisB);
inventaris.post("/add/C", inventarisController.insertInventarisC);
inventaris.post("/add/D", inventarisController.insertInventarisD);
inventaris.post("/add/E", inventarisController.insertInventarisE);

// UPDATE ROUTE
inventaris.put("/edit/A/:kib_id", inventarisController.updateInventarisA);
inventaris.put("/edit/B/:kib_id", inventarisController.updateInventarisB);
inventaris.put("/edit/C/:kib_id", inventarisController.updateInventarisC);
inventaris.put("/edit/D/:kib_id", inventarisController.updateInventarisD);
inventaris.put("/edit/E/:kib_id", inventarisController.updateInventarisE);

// UPLOAD IMAGE
inventaris.post("/image", inventarisController.uploadImage);

export default inventaris;
