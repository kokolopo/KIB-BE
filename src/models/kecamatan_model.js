import DB from "../config/db.js";

const kecamatanModel = {
    fetchAll: () => {
        let query = `
            SELECT 
                kec.kode as kecamatan_kd,
                kec.nama as kecamatan_nm
            FROM 
                aset_manfaat.kecamatan AS kec
        `;

        return new Promise((resolve, reject) => {
        DB.query(query, (err, result) => {
            if (err) reject(err);
            resolve(result.rows);
        });
        });
    },
};

export default kecamatanModel;
