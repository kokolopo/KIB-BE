import { responseAPI } from "../helper/response_api.js";
import penetapanModel from "../models/penetapan_model.js";

const { fetchTanahByDepartemen, fetchPeralatanMesinAlatByDepartemen } =
  penetapanModel;

const penetapanController = {
  getTanahByDepartemen: async (req, res) => {
    const { id_departemen } = req.params;
    const { perPage, page } = req.query;
    try {
      const data = await fetchTanahByDepartemen(
        parseInt(id_departemen),
        perPage,
        page
      );

      res.status(200).json(responseAPI("list penetapan", data));
    } catch (error) {
      res.status(400).json({ msg: "gagal mengambil penetapan!", error });
    }
  },

  getPerkakasByDepartemen: async (req, res) => {
    const { id_departemen } = req.params;
    const { perPage, page } = req.query;
    try {
      const data = await fetchPeralatanMesinAlatByDepartemen(
        parseInt(id_departemen),
        perPage,
        page
      );

      res.status(200).json(responseAPI("list penetapan", data));
    } catch (error) {
      res.status(400).json({ msg: "gagal mengambil penetapan!", error });
    }
  },
};

export default penetapanController;
