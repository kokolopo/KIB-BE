import DB from "../config/db.js";

const penetapanModel = {
  // INVENTARIS BY ID
  fetchTanahById: (id) => {
    let query = `
      SELECT 
        inv.kib_id,
        TO_CHAR(inv.tgl_inventaris, 'DD-MM-YYYY') AS tgl_inventaris_formatted,
        d.kode AS departemen_kd,
        d.nama AS departemen_nm,
        inv.no_register_awal,
        inv.no_register_akhir,
        inv.no_register_status,
        inv.kategori_id_awal,
        inv.kategori_id_akhir,
        inv.kategori_id_status,
        kat.kode AS kategori_kd,
        kat.nama AS kategori_nm,
        inv.nama_spesifikasi_awal,
        inv.nama_spesifikasi_akhir,
        inv.nama_spesifikasi_status,
        inv.jumlah_awal,
        inv.jumlah_akhir,
        inv.jumlah_status,
        inv.a_luas_m2_awal,
        inv.a_luas_m2_akhir,
        inv.a_luas_m2_status,
        inv.satuan,
        inv.cara_perolehan_awal,
        inv.cara_perolehan_akhir,
        inv.cara_perolehan_status,
        TO_CHAR(inv.tgl_perolehan, 'DD-MM-YYYY') AS tgl_perolehan_formatted,
        inv.tahun_perolehan,
        REPLACE(TO_CHAR(inv.perolehan_awal, 'FM999,999,999,999'), ',', '.') AS perolehan_awal_formatted,
        REPLACE(TO_CHAR(inv.perolehan_akhir, 'FM999,999,999,999'), ',', '.') AS perolehan_akhir_formatted,
        inv.perolehan_status,
        inv.atribusi_status,
        inv.atribusi_nibar,
        inv.atribusi_kode_barang,
        inv.atribusi_kode_lokasi,
        inv.atribusi_no_register,
        inv.atribusi_nama_barang,
        inv.atribusi_spesifikasi_barang,
        inv.a_alamat_awal,
        inv.a_alamat_akhir,
        inv.a_alamat_status,
        inv.alamat_kota,
        inv.alamat_kecamatan,
        inv.alamat_kelurahan,
        inv.alamat_jalan,
        inv.alamat_no,
        inv.alamat_rt,
        inv.alamat_rw,
        inv.alamat_kodepos,
        inv.a_hak_tanah_awal,
        inv.a_hak_tanah_akhir,
        inv.a_hak_tanah_status,
        inv.a_sertifikat_nomor_awal,
        inv.a_sertifikat_nomor_akhir,
        inv.a_sertifikat_nomor_status,
        TO_CHAR(inv.a_sertifikat_tanggal_awal, 'DD-MM-YYYY') AS a_sertifikat_tanggal_awal_formatted,
        TO_CHAR(inv.a_sertifikat_tanggal_akhir, 'DD-MM-YYYY') AS a_sertifikat_tanggal_akhir_formatted,
        inv.a_sertifikat_tanggal_status,
        inv.keberadaan_barang_status,
        inv.kondisi_awal,
        inv.kondisi_akhir,
        inv.kondisi_status,
        inv.asal_usul_awal,
        inv.asal_usul_akhir,
        inv.asal_usul_status,
        inv.penggunaan_status,
        inv.penggunaan_awal,
        inv.penggunaan_pemda_status,
        inv.penggunaan_pemda_akhir,
        inv.penggunaan_pempus_status,
        inv.penggunaan_pempus_yt,
        inv.penggunaan_pempus_y_nm,
        inv.penggunaan_pempus_y_doc,
        inv.penggunaan_pempus_t_nm,
        inv.penggunaan_pdl_status,
        inv.penggunaan_pdl_yt,
        inv.penggunaan_pdl_y_nm,
        inv.penggunaan_pdl_y_doc,
        inv.penggunaan_pdl_t_nm,
        inv.penggunaan_pl_status,
        inv.penggunaan_pl_yt,
        inv.penggunaan_pl_y_nm,
        inv.penggunaan_pl_y_doc,
        inv.penggunaan_pl_t_nm,
        inv.tercatat_ganda,
        inv.tercatat_ganda_nibar,
        inv.tercatat_ganda_no_register,
        inv.tercatat_ganda_kode_barang,
        inv.tercatat_ganda_nama_barang,
        inv.tercatat_ganda_spesifikasi_barang,
        inv.tercatat_ganda_luas,
        inv.tercatat_ganda_satuan,
        inv.tercatat_ganda_perolehan,
        inv.tercatat_ganda_tanggal_perolehan,
        inv.tercatat_ganda_kuasa_pengguna,
        inv.pemilik_id,
        inv.lat,
        inv.long,
        inv.lainnya,
        inv.keterangan,
        inv.petugas
        FROM 
        aset.penetapan AS p
        JOIN 
        public.departemen AS d ON d.id = p.departemen_id
        JOIN 
        aset.kategoris AS kat ON kat.id = p.kategori_id
        LEFT JOIN 
        aset.kib_inventaris AS inv ON inv.penetapan_id = p.id
        AND inv.kib_id = p.kib_id 
        WHERE 
        p.id = ${id}
    `;

    return new Promise((resolve, reject) => {
      DB.query(query, (err, result) => {
        if (err) reject(err);
        resolve(result.rows[0]);
      });
    });
  },

  // INVENTARIS BY DEPARTEMENT
  fetchTanahByDepartemen: (
    idDepartemen,
    perPage = 10,
    page = 1,
    tahun = 2023
  ) => {
    const offset = (page - 1) * perPage;

    let query = `
      SELECT
        p.id AS penetapan_id,
        p.kib_id,
        p.th_beli,
        TO_CHAR(p.tgl_perolehan, 'DD-MM-YYYY') AS tgl_perolehan_formatted,
        p.no_register,
        kat.id AS kategori_id,
        kat.kode AS kategori_kd,
        kat.nama AS kategori_nm,
        p.a_luas_m2,
        p.a_alamat,
        p.a_penggunaan,
        p.a_hak_tanah,
        TO_CHAR(p.a_sertifikat_tanggal, 'DD-MM-YYYY') AS a_sertifikat_tanggal_formatted,
        p.a_sertifikat_nomor,
        p.asal_usul,
        p.keterangan,
        'Rp.' || REPLACE(TO_CHAR(p.perolehan, 'FM999,999,999,999'), ',', '.') AS perolehan_formatted,
        p.kondisi,
        inv.id AS inventaris_id,
        inv.tahun AS inventaris_tahun,
        TO_CHAR(inv.tgl_inventaris, 'DD-MM-YYYY') AS tgl_inventaris_formatted,
        inv.keberadaan_barang_status,
        ROW_NUMBER() OVER (ORDER BY p.id) AS nomor,
        CASE WHEN inv.id IS NULL THEN 0 ELSE 1 END AS status_inventaris,
        CASE 
          WHEN inv.penggunaan_pemda_status = 1 THEN 'Pemerintah Daerah'
          WHEN inv.penggunaan_pempus_status = 1 THEN 'Pemerintah Pusat'
          WHEN inv.penggunaan_pdl_status = 1 THEN 'Pemerintah Daerah Lainnya'
          WHEN inv.penggunaan_pl_status = 1 THEN 'Pihak Lain'
          ELSE ''
        END AS penguasaan
      FROM 
        aset.penetapan AS p
      JOIN 
        public.departemen AS d ON d.id = p.departemen_id
      JOIN 
        aset.kategoris AS kat ON kat.id = p.kategori_id
      LEFT JOIN 
        aset.kib_inventaris AS inv ON inv.penetapan_id = p.id
        AND inv.kib_id = p.kib_id 
        AND inv.tahun = ${tahun}
      WHERE 
        p.thn_nilai = ${tahun}-1
        AND p.departemen_id = ${idDepartemen}
        AND p.kondisi IN ('B', 'KB')
        AND p.kib = 'A'
        AND p.status < 9
    `;

    if (perPage !== "" && page !== "")
      query += `limit ${perPage} offset ${offset}`;

    return new Promise((resolve, reject) => {
      DB.query(query, (err, result) => {
        if (err) reject(err);
        resolve(result.rows);
      });
    });
  },

  fetchPeralatanMesinByDepartemen: (
    idDepartemen,
    perPage = 10,
    page = 1,
    tahun = 2023
  ) => {
    const offset = (page - 1) * perPage;
    let query = `
      SELECT
        p.id AS penetapan_id,
        p.kib_id,
        p.th_beli,
        TO_CHAR(p.tgl_perolehan, 'DD-MM-YYYY') AS tgl_perolehan_formatted,
        p.no_register,
        kat.id AS kategori_id,
        kat.kode AS kategori_kd,
        kat.nama AS kategori_nm,
        p.b_cc,
        p.b_bahan,
        p.b_nomor_pabrik,
        p.b_nomor_rangka,
        p.b_nomor_mesin,
        p.b_nomor_polisi,
        p.b_nomor_bpkb,
        p.b_merk,
        p.b_type,
        p.asal_usul,
        p.keterangan,
        'Rp.' || REPLACE(TO_CHAR(p.perolehan, 'FM999,999,999,999'), ',', '.') AS perolehan_formatted,
        p.kondisi,
        inv.kondisi_akhir,
        inv.id AS inventaris_id,
        inv.tahun AS inventaris_tahun,
        TO_CHAR(inv.tgl_inventaris, 'DD-MM-YYYY') AS tgl_inventaris_formatted,
        inv.keberadaan_barang_status,
        ROW_NUMBER() OVER (ORDER BY p.id) AS nomor,
        CASE WHEN inv.id IS NULL THEN 0 ELSE 1 END AS status_inventaris,
        CASE 
          WHEN inv.penggunaan_pemda_status = 1 THEN 'Pemerintah Daerah'
          WHEN inv.penggunaan_pempus_status = 1 THEN 'Pemerintah Pusat'
          WHEN inv.penggunaan_pdl_status = 1 THEN 'Pemerintah Daerah Lainnya'
          WHEN inv.penggunaan_pl_status = 1 THEN 'Pihak Lain'
          ELSE ''
        END AS penguasaan
      FROM 
        aset.penetapan AS p
      JOIN 
        public.departemen AS d ON d.id = p.departemen_id
      JOIN 
        aset.kategoris AS kat ON kat.id = p.kategori_id
      LEFT JOIN 
        aset.kib_inventaris AS inv ON inv.penetapan_id = p.id
        AND inv.kib_id = p.kib_id 
        AND inv.tahun = ${tahun}
      WHERE 
        p.thn_nilai = ${tahun}-1
        AND p.departemen_id = ${idDepartemen}
        AND p.kondisi IN ('B', 'KB')
        AND p.kib = 'B'
        AND p.status < 9
    `;

    if (perPage !== "" && page !== "")
      query += `limit ${perPage} offset ${offset}`;

    return new Promise((resolve, reject) => {
      DB.query(query, (err, result) => {
        if (err) reject(err);
        resolve(result.rows);
      });
    });
  },

  fetchGedungBangunanByDepartemen: (
    idDepartemen,
    perPage = 10,
    page = 1,
    tahun = 2023
  ) => {
    const offset = (page - 1) * perPage;

    let query = `
      SELECT
        p.id AS penetapan_id,
        p.kib_id,
        p.th_beli,
        TO_CHAR(p.tgl_perolehan, 'DD-MM-YYYY') AS tgl_perolehan_formatted,
        p.no_register,
        kat.id AS kategori_id,
        kat.kode AS kategori_kd,
        kat.nama AS kategori_nm,
        p.c_bertingkat_tidak,
        p.c_beton_tidak,
        p.c_luas_lantai,
        p.c_lokasi,
        TO_CHAR(p.c_dokumen_tanggal, 'DD-MM-YYYY') AS c_dokumen_tanggal_formatted,
        p.c_dokumen_nomor,
        p.c_luas_bangunan,
        p.c_status_tanah,
        p.c_kode_tanah,
        p.asal_usul,
        p.keterangan,
        'Rp.' || REPLACE(TO_CHAR(p.perolehan, 'FM999,999,999,999'), ',', '.') AS perolehan_formatted,
        p.kondisi,
        inv.kondisi_akhir,
        inv.id AS inventaris_id,
        inv.tahun AS inventaris_tahun,
        TO_CHAR(inv.tgl_inventaris, 'DD-MM-YYYY') AS tgl_inventaris_formatted,
        inv.keberadaan_barang_status,
        ROW_NUMBER() OVER (ORDER BY p.id) AS nomor,
        CASE WHEN inv.id IS NULL THEN 0 ELSE 1 END AS status_inventaris,
        CASE 
          WHEN inv.penggunaan_pemda_status = 1 THEN 'Pemerintah Daerah'
          WHEN inv.penggunaan_pempus_status = 1 THEN 'Pemerintah Pusat'
          WHEN inv.penggunaan_pdl_status = 1 THEN 'Pemerintah Daerah Lainnya'
          WHEN inv.penggunaan_pl_status = 1 THEN 'Pihak Lain'
          ELSE ''
        END AS penguasaan
      FROM 
        aset.penetapan AS p
      JOIN 
        public.departemen AS d ON d.id = p.departemen_id
      JOIN 
        aset.kategoris AS kat ON kat.id = p.kategori_id
      LEFT JOIN 
        aset.kib_inventaris AS inv ON inv.penetapan_id = p.id
        AND inv.kib_id = p.kib_id 
        AND inv.tahun = ${tahun}
      WHERE 
        p.thn_nilai = ${tahun}-1
        AND p.departemen_id = ${idDepartemen}
        AND p.kondisi IN ('B', 'KB')
        AND p.kib = 'C'
        AND p.status < 9
    `;

    if (perPage !== "" && page !== "")
      query += `limit ${perPage} offset ${offset}`;

    return new Promise((resolve, reject) => {
      DB.query(query, (err, result) => {
        if (err) reject(err);
        resolve(result.rows);
      });
    });
  },

  fetchJalanJaringanIrigasiByDepartemen: (
    idDepartemen,
    perPage = 10,
    page = 1,
    tahun = 2023
  ) => {
    const offset = (page - 1) * perPage;

    let query = `
      SELECT
        p.id AS penetapan_id,
        p.kib_id,
        p.th_beli,
        TO_CHAR(p.tgl_perolehan, 'DD-MM-YYYY') AS tgl_perolehan_formatted,
        p.no_register,
        kat.id AS kategori_id,
        kat.kode AS kategori_kd,
        kat.nama AS kategori_nm,
        p.d_konstruksi,
        p.d_panjang, 
        p.d_lebar,
        p.d_luas,
        p.d_lokasi,
        TO_CHAR(p.d_dokumen_tanggal, 'DD-MM-YYYY') AS d_dokumen_tanggal_formatted,
        p.d_dokumen_nomor,
        p.d_kode_tanah,
        p.asal_usul,
        p.keterangan,
        'Rp.' || REPLACE(TO_CHAR(p.perolehan, 'FM999,999,999,999'), ',', '.') AS perolehan_formatted,
        p.kondisi,
        inv.id AS inventaris_id,
        inv.tahun AS inventaris_tahun,
        TO_CHAR(inv.tgl_inventaris, 'DD-MM-YYYY') AS tgl_inventaris_formatted,
        inv.keberadaan_barang_status,
        ROW_NUMBER() OVER (ORDER BY p.id) AS nomor,
        CASE WHEN inv.id IS NULL THEN 0 ELSE 1 END AS status_inventaris,
        CASE 
          WHEN inv.penggunaan_pemda_status = 1 THEN 'Pemerintah Daerah'
          WHEN inv.penggunaan_pempus_status = 1 THEN 'Pemerintah Pusat'
          WHEN inv.penggunaan_pdl_status = 1 THEN 'Pemerintah Daerah Lainnya'
          WHEN inv.penggunaan_pl_status = 1 THEN 'Pihak Lain'
          ELSE ''
        END AS penguasaan
      FROM 
        aset.penetapan AS p
      JOIN 
        public.departemen AS d ON d.id = p.departemen_id
      JOIN 
        aset.kategoris AS kat ON kat.id = p.kategori_id
      LEFT JOIN 
        aset.kib_inventaris AS inv ON inv.penetapan_id = p.id
        AND inv.kib_id = p.kib_id 
        AND inv.tahun = ${tahun}
      WHERE 
        p.thn_nilai = ${tahun}-1
        AND p.departemen_id = ${idDepartemen}
        AND p.kondisi IN ('B', 'KB')
        AND p.kib = 'D'
        AND p.status < 9
    `;

    if (perPage !== "" && page !== "")
      query += `limit ${perPage} offset ${offset}`;

    return new Promise((resolve, reject) => {
      DB.query(query, (err, result) => {
        if (err) reject(err);
        resolve(result.rows);
      });
    });
  },

  fetchAsetTetapLainnyaByDepartemen: (
    idDepartemen,
    perPage = 10,
    page = 1,
    tahun = 2023
  ) => {
    const offset = (page - 1) * perPage;

    let query = `
      SELECT
        p.id AS penetapan_id,
        p.kib_id,
        p.th_beli,
        TO_CHAR(p.tgl_perolehan, 'DD-MM-YYYY') AS tgl_perolehan_formatted,
        p.no_register,
        kat.id AS kategori_id,
        kat.kode AS kategori_kd,
        kat.nama AS kategori_nm,
        p.e_judul,
        p.e_spek,
        p.e_asal,
        p.e_pencipta,
        p.e_jenis,
        p.e_ukuran,
        p.asal_usul,
        p.keterangan,
        'Rp.' || REPLACE(TO_CHAR(p.perolehan, 'FM999,999,999,999'), ',', '.') AS perolehan_formatted,
        p.kondisi,
        inv.id AS inventaris_id,
        inv.tahun AS inventaris_tahun,
        TO_CHAR(inv.tgl_inventaris, 'DD-MM-YYYY') AS tgl_inventaris_formatted,
        inv.keberadaan_barang_status,
        ROW_NUMBER() OVER (ORDER BY p.id) AS nomor,
        CASE WHEN inv.id IS NULL THEN 0 ELSE 1 END AS status_inventaris,
        CASE 
          WHEN inv.penggunaan_pemda_status = 1 THEN 'Pemerintah Daerah'
          WHEN inv.penggunaan_pempus_status = 1 THEN 'Pemerintah Pusat'
          WHEN inv.penggunaan_pdl_status = 1 THEN 'Pemerintah Daerah Lainnya'
          WHEN inv.penggunaan_pl_status = 1 THEN 'Pihak Lain'
          ELSE ''
        END AS penguasaan
      FROM 
        aset.penetapan AS p
      JOIN 
        public.departemen AS d ON d.id = p.departemen_id
      JOIN 
        aset.kategoris kat AS ON kat.id = p.kategori_id
      LEFT JOIN 
        aset.kib_inventaris AS inv ON inv.penetapan_id = p.id
        AND inv.kib_id = p.kib_id 
        AND inv.tahun = ${tahun}
      WHERE 
        p.thn_nilai = ${tahun}-1
        AND p.departemen_id = ${idDepartemen}
        AND p.kondisi IN ('B', 'KB')
        AND p.kib = 'E'
        AND p.status < 9
    `;

    if (perPage !== "" && page !== "")
      query += `limit ${perPage} offset ${offset}`;

    return new Promise((resolve, reject) => {
      DB.query(query, (err, result) => {
        if (err) reject(err);
        resolve(result.rows);
      });
    });
  },

  fetchKDPByDepartemen: (
    idDepartemen,
    perPage = 10,
    page = 1,
    tahun = 2023
  ) => {
    const offset = (page - 1) * perPage;

    let query = `
      SELECT
        p.id AS penetapan_id,
        p.kib_id,
        p.th_beli,
        TO_CHAR(p.tgl_perolehan, 'DD-MM-YYYY') AS tgl_perolehan_formatted,
        p.no_register,
        kat.id AS kategori_id,
        kat.kode AS kategori_kd,
        kat.nama AS kategori_nm,
        p.f_bertingkat_tidak,
        p.f_beton_tidak, 
        p.f_luas_bangunan,
        p.f_lokasi,
        TO_CHAR(p.f_dokumen_tanggal, 'DD-MM-YYYY') AS f_dokumen_tanggal_formatted,
        p.f_dokumen_nomor, 
        p.f_status_tanah, 
        p.f_kode_tanah,
        p.asal_usul,
        p.keterangan,
        'Rp.' || REPLACE(TO_CHAR(p.perolehan, 'FM999,999,999,999'), ',', '.') AS perolehan_formatted,
        p.kondisi,
        inv.id AS inventaris_id,
        inv.tahun AS inventaris_tahun,
        TO_CHAR(inv.tgl_inventaris, 'DD-MM-YYYY') AS tgl_inventaris_formatted,
        inv.keberadaan_barang_status,
        ROW_NUMBER() OVER (ORDER BY p.id) AS nomor,
        CASE WHEN inv.id IS NULL THEN 0 ELSE 1 END AS status_inventaris,
        CASE 
          WHEN inv.penggunaan_pemda_status = 1 THEN 'Pemerintah Daerah'
          WHEN inv.penggunaan_pempus_status = 1 THEN 'Pemerintah Pusat'
          WHEN inv.penggunaan_pdl_status = 1 THEN 'Pemerintah Daerah Lainnya'
          WHEN inv.penggunaan_pl_status = 1 THEN 'Pihak Lain'
          ELSE ''
        END AS penguasaan
      FROM 
        aset.penetapan AS p
      JOIN 
        public.departemen AS d ON d.id = p.departemen_id
      JOIN 
        aset.kategoris AS kat ON kat.id = p.kategori_id
      LEFT JOIN 
        aset.kib_inventaris inv ON inv.penetapan_id = p.id
        AND inv.kib_id = p.kib_id 
        AND inv.tahun = ${tahun}
      WHERE 
        p.thn_nilai = ${tahun}-1
        AND p.departemen_id = ${idDepartemen}
        AND p.kondisi IN ('B', 'KB')
        AND p.kib = 'F'
        AND p.status < 9
    `;

    if (perPage !== "" && page !== "")
      query += `limit ${perPage} offset ${offset}`;

    return new Promise((resolve, reject) => {
      DB.query(query, (err, result) => {
        if (err) reject(err);
        resolve(result.rows);
      });
    });
  },

  countTotalPage: (kategori, idDepartemen, perPage=10, tahun=2023) => {
    let query = `
      SELECT 
        CEIL(COUNT(*)::float / ${perPage}) AS total_halaman 
      FROM 
        aset.penetapan AS p
      WHERE 
        p.kib = '${kategori}' 
        AND p.departemen_id=${idDepartemen} 
        AND p.thn_nilai = ${tahun}-1 
        AND p.kondisi IN ('B', 'KB')
        AND p.status < 9
    `;
    return new Promise((resolve, reject) => {
      DB.query(query, (err, result) => {
        if (err) reject(err);
        resolve(result.rows[0].total_halaman);
      });
    });
  },
};

export default penetapanModel;
