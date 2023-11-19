import DB from "../config/db.js";

const kelurahanModel = {
    fetchAll: () => {
        let query = `
            SELECT 
                kel.kode as kelurahan_kd,
                kel.nama as kelurahan_nm,
            FROM 
                aset_manfaat.kelurahan AS kel
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
