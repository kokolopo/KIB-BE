import { responseAPI } from "../helper/response_api.js";
import inventarisModel from "../models/inventaris_model.js";

const { updateInventarisA } = inventarisModel;

const inventarisController = {
  updateInventarisA: async (req, res) => {
    const { kib_id } = req.params; 
    const { data } = req.body;
    try {
      await updateInventarisA(kib_id, data);
      res.status(200).json(responseAPI("berhasil update data"));
    } catch (error) {
      res.status(400).json({ msg: "gagal update data!", error });
    }
  },
};

export default inventarisController;
