import { responseAPI } from "../helper/response_api.js";
import penetapanModel from "../models/penetapan_model.js";

const {
  fetchTanahById,
  fetchPeralatanMesinById,
  fetchGedungBangunanById,
  fetchJalanJaringanIrigasiById,
  fetchAsetTetapLainnyaById,
  fetchTanahByDepartemenNew,
  fetchPeralatanMesinByDepartemen,
  fetchGedungBangunanByDepartemen,
  fetchJalanJaringanIrigasiByDepartemen,
  fetchAsetTetapLainnyaByDepartemen,
  fetchAsetLainLainByDepartemen,
  countTotalPage,
} = penetapanModel;

const penetapanController = {
  getInventarisById: async (req, res) => {
    const { id, kategori } = req.params;
    try {
      let data;
      switch (kategori) {
        case "A":
          data = await fetchTanahById(parseInt(id));
          break;
        case "B":
          data = await fetchPeralatanMesinById(parseInt(id));
          break;
        case "C":
          data = await fetchGedungBangunanById(parseInt(id));
          break;
        case "D":
          data = await fetchJalanJaringanIrigasiById(parseInt(id));
          break;
        case "E":
          data = await fetchAsetTetapLainnyaById(parseInt(id));
          break;
        default:
          break;
      }

      res.status(200).json(responseAPI("berhasil", data));
    } catch (error) {
      res.status(400).json({ msg: "gagal mengambil data!", error });
    }
  },

  getInventarisByDepartemen: async (req, res) => {
    const { id_departemen, kategori } = req.params;
    const { perPage, page, tahun } = req.query;
    try {
      let data;
      let result;
      let total_page;
      switch (kategori) {
        case "A":
          data = await fetchTanahByDepartemenNew(
            id_departemen,
            perPage,
            page,
            tahun
          );
          total_page = await countTotalPage(
            "1.3.1",
            id_departemen,
            perPage,
            tahun
          );
          break;
        case "B":
          data = await fetchPeralatanMesinByDepartemen(
            id_departemen,
            perPage,
            page,
            tahun
          );
          total_page = await countTotalPage(
            "1.3.2",
            id_departemen,
            perPage,
            tahun
          );
          break;
        case "C":
          data = await fetchGedungBangunanByDepartemen(
            id_departemen,
            perPage,
            page,
            tahun
          );
          total_page = await countTotalPage(
            "1.3.3",
            id_departemen,
            perPage,
            tahun
          );
          break;
        case "D":
          data = await fetchJalanJaringanIrigasiByDepartemen(
            id_departemen,
            perPage,
            page,
            tahun
          );
          total_page = await countTotalPage(
            "1.3.4",
            id_departemen,
            perPage,
            tahun
          );
          break;
        case "E":
          data = await fetchAsetTetapLainnyaByDepartemen(
            id_departemen,
            perPage,
            page,
            tahun
          );
          total_page = await countTotalPage(
            "1.3.5",
            id_departemen,
            perPage,
            tahun
          );
          break;
        case "ATB":
          data = await fetchAsetLainLainByDepartemen(
            id_departemen,
            perPage,
            page,
            tahun
          );
          total_page = await countTotalPage(
            "1.5.3",
            id_departemen,
            perPage,
            tahun
          );
          break;
        default:
          break;
      }

      // file doc merged
      for (const v of data) {
        if (v.inv_file_nm === null) {
          delete v.inv_file_nm;
          continue;
        }
        if (v.file_nm === null) {
          delete v.inv_file_nm;
          continue;
        }
        if (v.inv_file_nm != null || v.inv_file_nm != []) {
          // Menggabungkan kedua daftar dan memberikan uid ke item dari inv_file_nm
          let uidCounter = v.file_nm.length + 1;
          let mergedList = v.file_nm.concat(
            v.inv_file_nm.map((filename) => ({
              uid: uidCounter++,
              filename: filename,
            }))
          );
          v.file_nm = mergedList;
          delete v.inv_file_nm;
        }
      }

      res.status(200).json(responseAPI("list penetapan", data, total_page));
    } catch (error) {
      res.status(400).json({ msg: "gagal mengambil penetapan!", error });
    }
  },
};

export default penetapanController;
