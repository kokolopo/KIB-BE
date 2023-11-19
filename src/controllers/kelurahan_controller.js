import { responseAPI } from "../helper/response_api.js";
import kelurahanModel from "../models/kelurahan_model.js";

const { fetchAll } = kelurahanModel;

const kelurahanController = {
    getAll: async (req, res) => {
        try {
        const kelurahan = await fetchAll();
        res.status(200).json(responseAPI("list kelurahan", kelurahan));
        } catch (error) {
        res.status(400).json({ msg: "gagal mengambil kelurahan!", error });
        }
    },
};

export default kelurahanController;
