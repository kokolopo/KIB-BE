import DB from "../config/db.js";

const kelurahanModel = {
  fetchAll: (id_kecamatan) => {
    let query = `
            SELECT
                kel.id,
            kel.nama as kelurahan_nm,
            kel.kode || ' - ' || kel.nama as value
            FROM 
                aset_manfaat.kelurahan as kel
            where
                kel.kecamatan_id = ${id_kecamatan}
        `;

    return new Promise((resolve, reject) => {
      DB.query(query, (err, result) => {
        if (err) reject(err);
        resolve(result.rows);
      });
    });
  },
};

export default kelurahanModel;
