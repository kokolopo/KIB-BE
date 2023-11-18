import DB from "../config/db.js";

const penetapanModel = {
  fetchDataById: (id) => {
    let query = `
      SELECT 
        p.*, 
        TO_CHAR(tgl_perolehan, 'DD-MM-YYYY') AS tgl_perolehan_formated,
        TO_CHAR(a_sertifikat_tanggal, 'DD-MM-YYYY') AS sertifikat_tgl,
        REPLACE(TO_CHAR(perolehan, 'FM999,999,999,999'), ',', '.') AS perolehan_formated,
        d.kode,
        d.nama,
        k.kode AS kode_kategori,
        k.nama AS nama_kategori,
        k.id AS id_kategori
      FROM 
        aset.penetapan AS p
      JOIN 
        public.departemen AS d ON p.departemen_id = d.id
      JOIN 
        aset.kategoris AS k ON p.kategori_id = k.id
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
        aset.penetapan p
      JOIN 
        public.departemen d ON d.id = p.departemen_id
      JOIN 
        aset.kategoris kat ON kat.id = p.kategori_id
      LEFT JOIN 
        aset.kib_inventaris inv ON inv.penetapan_id = p.id
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
        aset.penetapan p
      JOIN 
        public.departemen d ON d.id = p.departemen_id
      JOIN 
        aset.kategoris kat ON kat.id = p.kategori_id
      LEFT JOIN 
        aset.kib_inventaris inv ON inv.penetapan_id = p.id
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
        aset.penetapan p
      JOIN 
        public.departemen d ON d.id = p.departemen_id
      JOIN 
        aset.kategoris kat ON kat.id = p.kategori_id
      LEFT JOIN 
        aset.kib_inventaris inv ON inv.penetapan_id = p.id
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
        aset.penetapan p
      JOIN 
        public.departemen d ON d.id = p.departemen_id
      JOIN 
        aset.kategoris kat ON kat.id = p.kategori_id
      LEFT JOIN 
        aset.kib_inventaris inv ON inv.penetapan_id = p.id
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
        aset.penetapan p
      JOIN 
        public.departemen d ON d.id = p.departemen_id
      JOIN 
        aset.kategoris kat ON kat.id = p.kategori_id
      LEFT JOIN 
        aset.kib_inventaris inv ON inv.penetapan_id = p.id
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
        aset.penetapan p
      JOIN 
        public.departemen d ON d.id = p.departemen_id
      JOIN 
        aset.kategoris kat ON kat.id = p.kategori_id
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

  countTotalPage: (kategori = "") => {
    let query = `SELECT CEIL(COUNT(*)::float / 2) AS total_halaman FROM aset.penetapan WHERE aset.penetapan.kib = '${kategori}'`;
    return new Promise((resolve, reject) => {
      DB.query(query, (err, result) => {
        if (err) reject(err);
        resolve(result.rows[0].total_halaman);
      });
    });
  },
};

export default penetapanModel;
