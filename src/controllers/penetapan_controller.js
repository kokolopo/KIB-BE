import { responseAPI } from "../helper/response_api.js";
import penetapanModel from "../models/penetapan_model.js";

const { fetchByDepartemen } = penetapanModel;

const penetapanController = {
  getByDepartemen: async (req, res) => {
    const { id_depatemen } = req.params;
    try {
      const data = await fetchByDepartemen(parseInt(id_depatemen));

      res.status(200).json(responseAPI("list penetapan", data));
    } catch (error) {
      res.status(400).json({ msg: "gagal mengambil penetapan!", error });
    }
  },
};

export default penetapanController;
