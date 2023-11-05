import prisma from "../config/prisma.js";
import { responseAPI } from "../helper/response_api.js";
import penetapanModel from "../models/penetapan_model.js";

const {
  fetchDataById,
  fetchTanahByDepartemen,
  fetchPeralatanMesinByDepartemen,
  fetchGedungBangunanByDepartemen,
  fetchJalanJaringanIrigasiByDepartemen,
  fetchAsetTetapLainnyaByDepartemen,
  fetchKDPByDepartemen,
  contTotalRows,
} = penetapanModel;

const penetapanController = {
  getDataPenetapanById: async (req, res) => {
    const { id } = req.params;
    try {
      const data = await fetchDataById(parseInt(id));

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
      let total_data;
      switch (kategori) {
        case "A":
          data = await fetchTanahByDepartemen(
            parseInt(id_departemen),
            perPage,
            page,
            tahun
          );
          break;
        case "B":
          data = await fetchPeralatanMesinByDepartemen(
            parseInt(id_departemen),
            perPage,
            page,
            tahun
          );
          break;
        case "C":
          data = await fetchGedungBangunanByDepartemen(
            parseInt(id_departemen),
            perPage,
            page,
            tahun
          );
          break;
        case "D":
          data = await fetchJalanJaringanIrigasiByDepartemen(
            parseInt(id_departemen),
            perPage,
            page,
            tahun
          );
          break;
        case "E":
          data = await fetchAsetTetapLainnyaByDepartemen(
            parseInt(id_departemen),
            perPage,
            page,
            tahun
          );
          break;
        case "F":
          data = await fetchKDPByDepartemen(
            parseInt(id_departemen),
            perPage,
            page,
            tahun
          );
          break;

        default:
          break;
      }

      res.status(200).json(responseAPI("list penetapan", data, total_data));
    } catch (error) {
      res.status(400).json({ msg: "gagal mengambil penetapan!", error });
    }
  },

  update: async (req, res) => {
    const { penetapan_id } = req.params;
    const bodyRequest = req.body;
    try {
      const penetapan = await fetchDataById(parseInt(id));

      await prisma.penetapan.update({
        data: {
          uraian: bodyRequest.uraian || penetapan.uraian,
          tahun: bodyRequest.tahun || penetapan.tahun,
          no_register: bodyRequest.no_register || penetapan.no_register,
          tgl_perolehan: bodyRequest.tgl_perolehan || penetapan.tgl_perolehan,
          cara_perolehan:
            bodyRequest.cara_perolehan || penetapan.cara_perolehan,
          th_beli: bodyRequest.th_beli || penetapan.th_beli,
          asal_usul: bodyRequest.asal_usul || penetapan.asal_usul,
          harga: bodyRequest.harga || penetapan.harga,
          jumlah: bodyRequest.jumlah || penetapan.jumlah,
          satuan: bodyRequest.satuan || penetapan.satuan,
          kondisi: bodyRequest.kondisi || penetapan.kondisi,
          masa_manfaat: bodyRequest.masa_manfaat || penetapan.masa_manfaat,
          nilai_sisa: bodyRequest.nilai_sisa || penetapan.nilai_sisa,
          masa_sisa: bodyRequest.masa_sisa || penetapan.tahun,
          penyusutan: bodyRequest.penyusutan || penetapan.penyusutan,
          akumulasi: bodyRequest.akumulasi || penetapan.akumulasi,
          thn_nilai: bodyRequest.thn_nilai || penetapan.thn_nilai,
          no_sp2d: bodyRequest.no_sp2d || penetapan.tahun,
          no_id: bodyRequest.no_id || penetapan.no_id,
          kib: bodyRequest.kib || penetapan.kib,
          keterangan: bodyRequest.keterangan || penetapan.keterangan,
          lat: bodyRequest.lat || penetapan.lat,
          long: bodyRequest.long || penetapan.long,
          a_rtrw: bodyRequest.a_rtrw || penetapan.a_rtrw,
          a_nop: bodyRequest.a_nop || penetapan.a_nop,
          a_luas_m2: bodyRequest.a_luas_m2 || penetapan.a_luas_m2,
          a_alamat: bodyRequest.a_alamat || penetapan.a_alamat,
          a_hak_tanah: bodyRequest.a_hak_tanah || penetapan.a_hak_tanah,
          a_sertifikat_tanggal:
            bodyRequest.a_sertifikat_tanggal || penetapan.a_sertifikat_tanggal,
          a_sertifikat_nomor:
            bodyRequest.a_sertifikat_nomor || penetapan.a_sertifikat_nomor,
          a_penggunaan: bodyRequest.a_penggunaan || penetapan.a_penggunaan,
          a_kelurahan_id:
            bodyRequest.a_kelurahan_id || penetapan.a_kelurahan_id,
          a_kecamatan_id:
            bodyRequest.a_kecamatan_id || penetapan.a_kecamatan_id,
          a_batas_utara: bodyRequest.a_batas_utara || penetapan.a_batas_utara,
          a_batas_selatan:
            bodyRequest.a_batas_selatan || penetapan.a_batas_selatan,
          a_batas_barat: bodyRequest.a_batas_barat || penetapan.a_batas_barat,
          a_batas_timur: bodyRequest.a_batas_timur || penetapan.a_batas_timur,
          a_ukur_tgl: bodyRequest.a_ukur_tgl || penetapan.a_ukur_tgl,
          a_ukur_ba: bodyRequest.a_ukur_ba || penetapan.a_ukur_ba,
          a_ukur_hasil: bodyRequest.a_ukur_hasil || penetapan.a_ukur_hasil,
          a_ukur_notes: bodyRequest.a_ukur_notes || penetapan.a_ukur_notes,
          a_fisik_jenis: bodyRequest.a_fisik_jenis || penetapan.a_fisik_jenis,
          a_fisik_tgl: bodyRequest.a_fisik_tgl || penetapan.a_fisik_tgl,
          a_dok_jenis: bodyRequest.a_dok_jenis || penetapan.a_dok_jenis,
          a_dok_no: bodyRequest.a_dok_no || penetapan.a_dok_no,
          a_dok_tgl: bodyRequest.a_dok_tgl || penetapan.a_dok_tgl,
          a_dok_notes: bodyRequest.a_dok_notes || penetapan.a_dok_notes,
          a_dok_simpan: bodyRequest.a_dok_simpan || penetapan.a_dok_simpan,
          a_tata_ruang: bodyRequest.a_tata_ruang || penetapan.a_tata_ruang,
          a_manfaat: bodyRequest.a_manfaat || penetapan.a_manfaat,
          a_manfaat_alamat:
            bodyRequest.a_manfaat_alamat || penetapan.a_manfaat_alamat,
          a_manfaat_sk_no:
            bodyRequest.a_manfaat_sk_no || penetapan.a_manfaat_sk_no,
          a_manfaat_sk_tgl:
            bodyRequest.a_manfaat_sk_tgl || penetapan.a_manfaat_sk_tgl,
          a_manfaat_mulai:
            bodyRequest.a_manfaat_mulai || penetapan.a_manfaat_mulai,
          a_manfaat_selesai:
            bodyRequest.a_manfaat_selesai || penetapan.a_manfaat_selesai,
          b_merk: bodyRequest.b_merk || penetapan.b_merk,
          b_type: bodyRequest.b_type || penetapan.b_type,
          b_cc: bodyRequest.b_cc || penetapan.b_cc,
          b_bahan: bodyRequest.b_bahan || penetapan.b_bahan,
          b_nomor_pabrik:
            bodyRequest.b_nomor_pabrik || penetapan.b_nomor_pabrik,
          b_nomor_rangka:
            bodyRequest.b_nomor_rangka || penetapan.b_nomor_rangka,
          b_nomor_mesin: bodyRequest.b_nomor_mesin || penetapan.b_nomor_mesin,
          b_nomor_polisi:
            bodyRequest.b_nomor_polisi || penetapan.b_nomor_polisi,
          b_nomor_bpkb: bodyRequest.b_nomor_bpkb || penetapan.b_nomor_bpkb,
          b_ukuran: bodyRequest.b_ukuran || penetapan.b_ukuran,
          b_warna: bodyRequest.b_warna || penetapan.b_warna,
          b_thbuat: bodyRequest.b_thbuat || penetapan.b_thbuat,
          c_bertingkat_tidak:
            bodyRequest.c_bertingkat_tidak || penetapan.c_bertingkat_tidak,
          c_beton_tidak: bodyRequest.c_beton_tidak || penetapan.c_beton_tidak,
          c_luas_lantai: bodyRequest.c_luas_lantai || penetapan.c_luas_lantai,
          c_lokasi: bodyRequest.c_lokasi || penetapan.c_lokasi,
          c_dokumen_tanggal:
            bodyRequest.c_dokumen_tanggal || penetapan.c_dokumen_tanggal,
          c_dokumen_nomor:
            bodyRequest.c_dokumen_nomor || penetapan.c_dokumen_nomor,
          c_status_tanah:
            bodyRequest.c_status_tanah || penetapan.c_status_tanah,
          c_kode_tanah: bodyRequest.c_kode_tanah || penetapan.c_kode_tanah,
          c_luas_bangunan:
            bodyRequest.c_luas_bangunan || penetapan.c_luas_bangunan,
          d_konstruksi: bodyRequest.d_konstruksi || penetapan.d_konstruksi,
          d_panjang: bodyRequest.d_panjang || penetapan.d_panjang,
          d_lebar: bodyRequest.d_lebar || penetapan.d_lebar,
          d_luas: bodyRequest.d_luas || penetapan.d_luas,
          d_lokasi: bodyRequest.d_lokasi || penetapan.d_lokasi,
          d_dokumen_tanggal:
            bodyRequest.d_dokumen_tanggal || penetapan.d_dokumen_tanggal,
          d_dokumen_nomor:
            bodyRequest.d_dokumen_nomor || penetapan.d_dokumen_nomor,
          d_status_tanah:
            bodyRequest.d_status_tanah || penetapan.d_status_tanah,
          d_kode_tanah: bodyRequest.d_kode_tanah || penetapan.d_kode_tanah,
          e_judul: bodyRequest.e_judul || penetapan.e_judul,
          e_pencipta: bodyRequest.e_pencipta || penetapan.e_pencipta,
          e_bahan: bodyRequest.e_bahan || penetapan.e_bahan,
          e_spek: bodyRequest.e_spek || penetapan.e_spek,
          e_asal: bodyRequest.e_asal || penetapan.e_asal,
          e_ukuran: bodyRequest.e_ukuran || penetapan.e_ukuran,
          e_jenis: bodyRequest.e_jenis || penetapan.e_jenis,
          f_bertingkat_tidak:
            bodyRequest.f_bertingkat_tidak || penetapan.f_bertingkat_tidak,
          f_beton_tidak: bodyRequest.f_beton_tidak || penetapan.f_beton_tidak,
          f_panjang: bodyRequest.f_panjang || penetapan.f_panjang,
          f_lebar: bodyRequest.f_lebar || penetapan.f_lebar,
          f_luas_lantai: bodyRequest.f_luas_lantai || penetapan.f_luas_lantai,
          f_lokasi: bodyRequest.f_lokasi || penetapan.f_lokasi,
          f_dokumen_tanggal:
            bodyRequest.f_dokumen_tanggal || penetapan.f_dokumen_tanggal,
          f_dokumen_nomor:
            bodyRequest.f_dokumen_nomor || penetapan.f_dokumen_nomor,
          f_status_tanah:
            bodyRequest.f_status_tanah || penetapan.f_status_tanah,
          f_kode_tanah: bodyRequest.f_kode_tanah || penetapan.f_kode_tanah,
          f_luas_bangunan:
            bodyRequest.f_luas_bangunan || penetapan.f_luas_bangunan,
          created: bodyRequest.created || penetapan.created,
          updated: bodyRequest.updated || penetapan.updated,
          create_uid: bodyRequest.create_uid || penetapan.create_uid,
          update_uid: bodyRequest.update_uid || penetapan.update_uid,
          status: bodyRequest.status || penetapan.status,
          g_jenis_barang:
            bodyRequest.g_jenis_barang || penetapan.g_jenis_barang,
          g_keterangan1: bodyRequest.g_keterangan1 || penetapan.g_keterangan1,
          g_keterangan2: bodyRequest.g_keterangan2 || penetapan.g_keterangan2,
          g_keterangan3: bodyRequest.g_keterangan3 || penetapan.g_keterangan3,
          perolehan_item_id:
            bodyRequest.perolehan_item_id || penetapan.perolehan_item_id,
          kib_id: bodyRequest.kib_id || penetapan.kib_id,
          kategori_id: bodyRequest.kategori_id || penetapan.kategori_id,
          departemen_id: bodyRequest.departemen_id || penetapan.departemen_id,
          pemilik_id: bodyRequest.pemilik_id || penetapan.pemilik_id,
          b_kd_ruang: bodyRequest.b_kd_ruang || penetapan.b_kd_ruang,
          file_nm: { file1: "file1.pdf", file2: "file2.jpg" },
          kondisi_audited_2019:
            bodyRequest.kondisi_audited_2019 || penetapan.kondisi_audited_2019,
          koreksi: bodyRequest.koreksi || penetapan.koreksi,
          selisih: bodyRequest.selisih || penetapan.selisih,
          old_kondisi: bodyRequest.old_kondisi || penetapan.old_kondisi,
          harga_old: bodyRequest.harga_old || penetapan.harga_old,
          koma: bodyRequest.koma || penetapan.koma,
          dasar_susut: bodyRequest.dasar_susut || penetapan.dasar_susut,
          perolehan: bodyRequest.perolehan || penetapan.perolehan,
          max_manfaat: bodyRequest.max_manfaat || penetapan.max_manfaat,
          b_pemakai: bodyRequest.b_pemakai || penetapan.b_pemakai,
          b_nip_pemakai: bodyRequest.b_nip_pemakai || penetapan.b_nip_pemakai,
          b_jabatan_pemakai:
            bodyRequest.b_jabatan_pemakai || penetapan.b_jabatan_pemakai,
          pemecahan_id: bodyRequest.pemecahan_id || penetapan.pemecahan_id,
          no_bast: bodyRequest.no_bast || penetapan.no_bast,
          tgl_bast: bodyRequest.tgl_bast || penetapan.tgl_bast,
          a_manfaat_nilai_sewa:
            bodyRequest.a_manfaat_nilai_sewa || penetapan.a_manfaat_nilai_sewa,
          b_tanggal_stnk:
            bodyRequest.b_tanggal_stnk || penetapan.b_tanggal_stnk,
          manfaat_file_nm:
            bodyRequest.manfaat_file_nm || penetapan.manfaat_file_nm,
          manfaat_kategori_id:
            bodyRequest.manfaat_kategori_id || penetapan.manfaat_kategori_id,
          manfaat_status_id:
            bodyRequest.manfaat_status_id || penetapan.manfaat_status_id,
        },

        where: { id: parseInt(penetapan_id) },
      });
    } catch (error) {
      res.status(400).json({ msg: "gagal edit penetapan!", error });
    }
  },
};

export default penetapanController;
