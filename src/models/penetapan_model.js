import DB from "../config/db.js";

const penetapanModel = {
  fetchDataById: (id) => {
    let query = `
      SELECT aset.penetapan.*, TO_CHAR(tgl_perolehan, 'DD-MM-YYYY') AS tgl_perolehan_formated, public.departemen.kode, public.departemen.nama, aset.kategoris.kode AS barang, aset.kategoris.nama AS nama_barang
      FROM aset.penetapan
      JOIN public.departemen ON aset.penetapan.departemen_id = public.departemen.id
      JOIN aset.kategoris ON aset.penetapan.kategori_id = aset.kategoris.id
      WHERE aset.penetapan.id = ${id}
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
      SELECT p.*, k.nama, k.kode, k.nama, i.tgl_inventaris, i.keberadaan_fisik, i.kondisi_akhir, i.penggunaan_status, i.file_nm,
      ROW_NUMBER() OVER (ORDER BY p.id) AS nomor, 
      TO_CHAR(p.tgl_perolehan, 'DD-MM-YYYY') AS tgl_perolehan_formated,
      TO_CHAR(a_sertifikat_tanggal, 'DD-MM-YYYY') AS sertifikat_tgl,
      (SELECT COUNT(*) FROM aset.penetapan 
      WHERE aset.penetapan.thn_nilai = ${tahun} - 1
      AND p.departemen_id = ${idDepartemen}
      AND p.kondisi IN ('B', 'KB')
      AND p.kib='A'
      ) AS total_data
      FROM aset.penetapan AS p
      JOIN public.departemen AS d ON p.departemen_id = d.id
      JOIN aset.kategoris AS k ON p.kategori_id = k.id
      LEFT JOIN aset.kib_inventaris AS i on i.kib_id = p.kib_id
      AND i.id = p.id
      AND i.departemen_id = p.departemen_id
      AND extract(year from i.tgl_inventaris) = ${tahun}
      WHERE p.thn_nilai = ${tahun} - 1
      AND p.departemen_id = ${idDepartemen}
      AND p.kondisi IN ('B', 'KB')
      AND p.kib='A'
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

  fetchPeralatanMesinAlatByDepartemen: (
    idDepartemen,
    perPage = 10,
    page = 1,
    tahun = 2023
  ) => {
    const offset = (page - 1) * perPage;
    let query = `
    SELECT p.*, k.nama, ROW_NUMBER() OVER (ORDER BY p.id) AS nomor, TO_CHAR(p.tgl_perolehan, 'DD-MM-YYYY') AS tgl_perolehan_formated,
    (SELECT COUNT(*) FROM aset.penetapan 
    WHERE aset.penetapan.thn_nilai = ${tahun} - 1
    AND p.departemen_id = ${idDepartemen}
    AND p.kondisi IN ('B', 'KB')
    AND p.kib='A'
    ) AS total_data
    FROM aset.penetapan AS p
    JOIN public.departemen AS d ON p.departemen_id = d.id
    JOIN aset.kategoris AS k ON p.kategori_id = k.id
    LEFT JOIN aset.kib_inventaris AS i on i.kib_id = p.kib_id
    AND i.id = p.id
    AND i.departemen_id = p.departemen_id
    AND extract(year from i.tgl_inventaris) = ${tahun}
    WHERE p.thn_nilai = ${tahun} - 1
    AND p.departemen_id = ${idDepartemen}
    AND p.kondisi IN ('B', 'KB')
    AND p.kib='B'
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
      SELECT p.*, k.nama, k.kode, k.nama, i.tgl_inventaris, i.keberadaan_fisik, i.kondisi_akhir, i.penggunaan_status, i.file_nm,
      ROW_NUMBER() OVER (ORDER BY p.id) AS nomor, 
      TO_CHAR(p.tgl_perolehan, 'DD-MM-YYYY') AS tgl_perolehan_formated,
      TO_CHAR(a_sertifikat_tanggal, 'DD-MM-YYYY') AS sertifikat_tgl,
      FROM aset.penetapan AS p
      JOIN public.departemen AS d ON p.departemen_id = d.id
      JOIN aset.kategoris AS k ON p.kategori_id = k.id
      LEFT JOIN aset.kib_inventaris AS i on i.kib_id = p.kib_id
      AND i.id = p.id
      AND i.departemen_id = p.departemen_id
      AND extract(year from i.tgl_inventaris) = ${tahun}
      WHERE p.thn_nilai = ${tahun} - 1
      AND p.departemen_id = ${idDepartemen}
      AND p.kondisi IN ('B', 'KB')
      AND p.kib='C'
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
      SELECT p.*, k.nama, k.kode, k.nama, i.tgl_inventaris, i.keberadaan_fisik, i.kondisi_akhir, i.penggunaan_status, i.file_nm,
      ROW_NUMBER() OVER (ORDER BY p.id) AS nomor, 
      TO_CHAR(p.tgl_perolehan, 'DD-MM-YYYY') AS tgl_perolehan_formated,
      TO_CHAR(a_sertifikat_tanggal, 'DD-MM-YYYY') AS sertifikat_tgl,
      FROM aset.penetapan AS p
      JOIN public.departemen AS d ON p.departemen_id = d.id
      JOIN aset.kategoris AS k ON p.kategori_id = k.id
      LEFT JOIN aset.kib_inventaris AS i on i.kib_id = p.kib_id
      AND i.id = p.id
      AND i.departemen_id = p.departemen_id
      AND extract(year from i.tgl_inventaris) = ${tahun}
      WHERE p.thn_nilai = ${tahun} - 1
      AND p.departemen_id = ${idDepartemen}
      AND p.kondisi IN ('B', 'KB')
      AND p.kib='D'
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
      SELECT p.*, k.nama, k.kode, k.nama, i.tgl_inventaris, i.keberadaan_fisik, i.kondisi_akhir, i.penggunaan_status, i.file_nm,
      ROW_NUMBER() OVER (ORDER BY p.id) AS nomor, 
      TO_CHAR(p.tgl_perolehan, 'DD-MM-YYYY') AS tgl_perolehan_formated,
      TO_CHAR(a_sertifikat_tanggal, 'DD-MM-YYYY') AS sertifikat_tgl,
      FROM aset.penetapan AS p
      JOIN public.departemen AS d ON p.departemen_id = d.id
      JOIN aset.kategoris AS k ON p.kategori_id = k.id
      LEFT JOIN aset.kib_inventaris AS i on i.kib_id = p.kib_id
      AND i.id = p.id
      AND i.departemen_id = p.departemen_id
      AND extract(year from i.tgl_inventaris) = ${tahun}
      WHERE p.thn_nilai = ${tahun} - 1
      AND p.departemen_id = ${idDepartemen}
      AND p.kondisi IN ('B', 'KB')
      AND p.kib='E'
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

  fetchKDPBByDepartemen: (
    idDepartemen,
    perPage = 10,
    page = 1,
    tahun = 2023
  ) => {
    const offset = (page - 1) * perPage;

    let query = `
      SELECT p.*, k.nama, k.kode, k.nama, i.tgl_inventaris, i.keberadaan_fisik, i.kondisi_akhir, i.penggunaan_status, i.file_nm,
      ROW_NUMBER() OVER (ORDER BY p.id) AS nomor, 
      TO_CHAR(p.tgl_perolehan, 'DD-MM-YYYY') AS tgl_perolehan_formated,
      TO_CHAR(a_sertifikat_tanggal, 'DD-MM-YYYY') AS sertifikat_tgl,
      FROM aset.penetapan AS p
      JOIN public.departemen AS d ON p.departemen_id = d.id
      JOIN aset.kategoris AS k ON p.kategori_id = k.id
      LEFT JOIN aset.kib_inventaris AS i on i.kib_id = p.kib_id
      AND i.id = p.id
      AND i.departemen_id = p.departemen_id
      AND extract(year from i.tgl_inventaris) = ${tahun}
      WHERE p.thn_nilai = ${tahun} - 1
      AND p.departemen_id = ${idDepartemen}
      AND p.kondisi IN ('B', 'KB')
      AND p.kib='F'
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
