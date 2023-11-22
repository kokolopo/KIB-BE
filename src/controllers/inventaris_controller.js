import { responseAPI } from "../helper/response_api.js";
import inventarisModel from "../models/inventaris_model.js";

const { updateInventarisA } = inventarisModel;

const inventarisController = {
  updateInventarisA: async (req, res) => {
    const { id, kib_id } = req.param;
    const { data } = req.body;
    try {
      await updateInventarisA(id, kib_id, data);
      res.status(200).json(responseAPI("list departemens", departemens));
    } catch (error) {
      res.status(400).json({ msg: "gagal mengambil departemens!", error });
    }
  },
};

export default inventarisController;
