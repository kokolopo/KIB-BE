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
        p.*, 
        k.nama, 
        k.kode, 
        k.nama, 
        TO_CHAR(i.tgl_inventaris, 'DD-MM-YYYY') AS tgl_inventaris_formated,
        i.keberadaan_fisik, 
        i.kondisi_akhir, 
        i.penggunaan_status, 
        i.file_nm,
        ROW_NUMBER() OVER (ORDER BY p.id) AS nomor, 
        TO_CHAR(p.tgl_perolehan, 'DD-MM-YYYY') AS tgl_perolehan_formated,
        TO_CHAR(a_sertifikat_tanggal, 'DD-MM-YYYY') AS sertifikat_tgl,
        'Rp.' || REPLACE(TO_CHAR(harga, 'FM999,999,999,999'), ',', '.') AS harga_formated
      FROM 
        aset.penetapan AS p
      JOIN 
        public.departemen AS d ON p.departemen_id = d.id
      JOIN 
        aset.kategoris AS k ON p.kategori_id = k.id
      LEFT JOIN 
        aset.kib_inventaris AS i on i.kib_id = p.kib_id
        AND i.departemen_id = p.departemen_id
        AND extract(year from i.tgl_inventaris) = ${tahun}
      WHERE 
        p.thn_nilai = ${tahun} - 1
        AND p.departemen_id = ${idDepartemen}
        AND p.kondisi IN ('B', 'KB')
        AND p.kib = 'A'
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
        p.*, 
        k.nama, 
        k.kode, 
        k.nama, 
        TO_CHAR(i.tgl_inventaris, 'DD-MM-YYYY') AS tgl_inventaris_formated,
        i.keberadaan_fisik, 
        i.kondisi_akhir, 
        i.penggunaan_status, 
        i.file_nm,
        ROW_NUMBER() OVER (ORDER BY p.id) AS nomor, 
        TO_CHAR(p.tgl_perolehan, 'DD-MM-YYYY') AS tgl_perolehan_formated,
        'Rp.' || REPLACE(TO_CHAR(harga, 'FM999,999,999,999'), ',', '.') AS harga_formated
      FROM 
        aset.penetapan AS p
      JOIN 
        public.departemen AS d ON p.departemen_id = d.id
      JOIN 
        aset.kategoris AS k ON p.kategori_id = k.id
      LEFT JOIN 
        aset.kib_inventaris AS i on i.kib_id = p.kib_id
        AND i.id = p.id
        AND i.departemen_id = p.departemen_id
        AND extract(year from i.tgl_inventaris) = ${tahun}
      WHERE 
        p.thn_nilai = ${tahun} - 1
        AND p.departemen_id = ${idDepartemen}
        AND p.kondisi IN ('B', 'KB')
        AND p.kib = 'B'
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
        p.*, 
        k.nama, 
        k.kode, 
        k.nama, 
        i.tgl_inventaris, 
        i.keberadaan_fisik, 
        i.kondisi_akhir, 
        i.penggunaan_status, 
        i.file_nm,
        ROW_NUMBER() OVER (ORDER BY p.id) AS nomor, 
        TO_CHAR(p.tgl_perolehan, 'DD-MM-YYYY') AS tgl_perolehan_formated,
        TO_CHAR(c_dokumen_tanggal, 'DD-MM-YYYY') AS dokumen_tgl
      FROM 
        aset.penetapan AS p
      JOIN 
        public.departemen AS d ON p.departemen_id = d.id
      JOIN 
        aset.kategoris AS k ON p.kategori_id = k.id
      LEFT JOIN 
        aset.kib_inventaris AS i on i.kib_id = p.kib_id
        AND i.id = p.id
        AND i.departemen_id = p.departemen_id
        AND extract(year from i.tgl_inventaris) = ${tahun}
      WHERE 
        p.thn_nilai = ${tahun} - 1
        AND p.departemen_id = ${idDepartemen}
        AND p.kondisi IN ('B', 'KB')
        AND p.kib = 'C'
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
        p.*, 
        k.nama, 
        k.kode, 
        k.nama, 
        i.tgl_inventaris, 
        i.keberadaan_fisik, 
        i.kondisi_akhir, 
        i.penggunaan_status, 
        i.file_nm,
        ROW_NUMBER() OVER (ORDER BY p.id) AS nomor, 
        TO_CHAR(p.tgl_perolehan, 'DD-MM-YYYY') AS tgl_perolehan_formated,
        TO_CHAR(d_dokumen_tanggal, 'DD-MM-YYYY') AS dokumen_tgl
      FROM 
        aset.penetapan AS p
      JOIN 
        public.departemen AS d ON p.departemen_id = d.id
      JOIN 
        aset.kategoris AS k ON p.kategori_id = k.id
      LEFT JOIN 
        aset.kib_inventaris AS i on i.kib_id = p.kib_id
        AND i.id = p.id
        AND i.departemen_id = p.departemen_id
        AND extract(year from i.tgl_inventaris) = ${tahun}
      WHERE 
        p.thn_nilai = ${tahun} - 1
        AND p.departemen_id = ${idDepartemen}
        AND p.kondisi IN ('B', 'KB')
        AND p.kib = 'D'
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
        p.*, 
        k.nama, 
        k.kode, 
        k.nama, 
        i.tgl_inventaris, 
        i.keberadaan_fisik, 
        i.kondisi_akhir, 
        i.penggunaan_status, 
        i.file_nm,
        ROW_NUMBER() OVER (ORDER BY p.id) AS nomor, 
        TO_CHAR(p.tgl_perolehan, 'DD-MM-YYYY') AS tgl_perolehan_formated
      FROM 
        aset.penetapan AS p
      JOIN 
        public.departemen AS d ON p.departemen_id = d.id
      JOIN 
        aset.kategoris AS k ON p.kategori_id = k.id
      LEFT JOIN 
        aset.kib_inventaris AS i on i.kib_id = p.kib_id
        AND i.id = p.id
        AND i.departemen_id = p.departemen_id
        AND extract(year from i.tgl_inventaris) = ${tahun}
      WHERE 
        p.thn_nilai = ${tahun} - 1
        AND p.departemen_id = ${idDepartemen}
        AND p.kondisi IN ('B', 'KB')
        AND p.kib = 'E'
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
        p.*, 
        k.nama, 
        k.kode, 
        k.nama, 
        i.tgl_inventaris, 
        i.keberadaan_fisik, 
        i.kondisi_akhir, 
        i.penggunaan_status, 
        i.file_nm,
        ROW_NUMBER() OVER (ORDER BY p.id) AS nomor, 
        TO_CHAR(p.tgl_perolehan, 'DD-MM-YYYY') AS tgl_perolehan_formated,
        TO_CHAR(f_dokumen_tanggal, 'DD-MM-YYYY') AS dokumen_tgl
      FROM 
        aset.penetapan AS p
      JOIN 
        public.departemen AS d ON p.departemen_id = d.id
      JOIN 
        aset.kategoris AS k ON p.kategori_id = k.id
      LEFT JOIN 
        aset.kib_inventaris AS i on i.kib_id = p.kib_id
        AND i.id = p.id
        AND i.departemen_id = p.departemen_id
        AND extract(year from i.tgl_inventaris) = ${tahun}
      WHERE 
        p.thn_nilai = ${tahun} - 1
        AND p.departemen_id = ${idDepartemen}
        AND p.kondisi IN ('B', 'KB')
        AND p.kib = 'F'
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
};

export default penetapanModel;
