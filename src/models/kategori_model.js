import DB from "../config/db.js";

const kategoriModel = {
  fetchKategoriTanah: () => {
    let query = `
        SELECT DISTINCT
          k.id,
          k.kode, 
          k.nama
        FROM 
          aset.penetapan AS p
        JOIN 
          aset.kategoris AS k ON p.kategori_id = k.id
        WHERE
          p.kib = 'A'
          AND p.kondisi IN ('B', 'KB')
        `;

    return new Promise((resolve, reject) => {
      DB.query(query, (err, result) => {
        if (err) reject(err);
        resolve(result.rows);
      });
    });
  },

  fetchKategoriPeralatanMesin: () => {
    let query = `
        SELECT DISTINCT
          k.id,
          k.kode, 
          k.nama
        FROM 
          aset.penetapan AS p
        JOIN 
          aset.kategoris AS k ON p.kategori_id = k.id
        WHERE
          p.kib = 'B'
          AND p.kondisi IN ('B', 'KB')

        `;

    return new Promise((resolve, reject) => {
      DB.query(query, (err, result) => {
        if (err) reject(err);
        resolve(result.rows);
      });
    });
  },

  fetchKategoriGedungBangunan: () => {
    let query = `
        SELECT DISTINCT
          k.id,
          k.kode, 
          k.nama
        FROM 
          aset.penetapan AS p
        JOIN 
          aset.kategoris AS k ON p.kategori_id = k.id
        WHERE
          p.kib = 'C'
          AND p.kondisi IN ('B', 'KB')

        `;

    return new Promise((resolve, reject) => {
      DB.query(query, (err, result) => {
        if (err) reject(err);
        resolve(result.rows);
      });
    });
  },

  fetchKategoriJalanJaringanIrigasi: () => {
    let query = `
        SELECT DISTINCT
          k.id,
          k.kode, 
          k.nama
        FROM 
          aset.penetapan AS p
        JOIN 
          aset.kategoris AS k ON p.kategori_id = k.id
        WHERE
          p.kib = 'D'
          AND p.kondisi IN ('B', 'KB')

        `;

    return new Promise((resolve, reject) => {
      DB.query(query, (err, result) => {
        if (err) reject(err);
        resolve(result.rows);
      });
    });
  },

  fetchKategoriAsetLainnya: () => {
    let query = `
        SELECT DISTINCT
          k.id,
          k.kode, 
          k.nama
        FROM 
          aset.penetapan AS p
        JOIN 
          aset.kategoris AS k ON p.kategori_id = k.id
        WHERE
          p.kib = 'E'
          AND p.kondisi IN ('B', 'KB')

        `;

    return new Promise((resolve, reject) => {
      DB.query(query, (err, result) => {
        if (err) reject(err);
        resolve(result.rows);
      });
    });
  },

  fetchKategoriKDP: () => {
    let query = `
        select id, kode, nama 
        from aset.kategoris
        where substr(kode,1,5) = '1.5.3'
        `;

    return new Promise((resolve, reject) => {
      DB.query(query, (err, result) => {
        if (err) reject(err);
        resolve(result.rows);
      });
    });
  },
};

export default kategoriModel;
