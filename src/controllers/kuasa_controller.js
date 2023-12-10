import { responseAPI } from "../helper/response_api.js";
import kuasaModel from "../models/kuasa_model.js";

const { fetchKuasa } = kuasaModel;

const kuasaController = {
    getKuasa: async (req, res) => {
        const { departemen_id } = req.params;
        try {
            const kuasa = await fetchKuasa(departemen_id);
            res.status(200).json(responseAPI("list kuasa", kuasa));
        } catch (error) {
            res.status(400).json({ msg: "gagal mengambil kuasa!", error });
        }
    },
};

export default kuasaController;
