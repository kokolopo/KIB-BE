import DB from "../config/db.js";

const kategoriModel = {
  fetchKategoriTanah: () => {
    let query = `
        SELECT aset.kategoris.nama, aset.kategoris.id
        FROM aset.kategoris
        WHERE nama LIKE 'Tanah%'
        GROUP BY nama, id;
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
