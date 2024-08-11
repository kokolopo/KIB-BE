import { responseAPI } from "../helper/response_api.js";
import kategoriModel from "../models/kategori_model.js";

const {
  fetchKategoriTanah,
  fetchKategoriPeralatanMesin,
  fetchKategoriGedungBangunan,
  fetchKategoriJalanJaringanIrigasi,
  fetchKategoriAsetLainnya,
  fetchKategoriKDP,
} = kategoriModel;

const kategoriController = {
  getKategoris: async (req, res) => {
    const { kategori } = req.params;
    try {
      let data;
      switch (kategori) {
        case "A":
          data = await fetchKategoriTanah();
          break;
        case "B":
          data = await fetchKategoriPeralatanMesin();
          break;
        case "C":
          data = await fetchKategoriGedungBangunan();
          break;
        case "D":
          data = await fetchKategoriJalanJaringanIrigasi();
          break;
        case "E":
          data = await fetchKategoriAsetLainnya();
          break;
        case "ATB":
          data = await fetchKategoriKDP();
          break;

        default:
          break;
      }

      res.status(200).json(responseAPI("list kategori", data));
    } catch (error) {
      res.status(400).json({ msg: "gagal mengambil kategori!", error });
    }
  },
};

export default kategoriController;
