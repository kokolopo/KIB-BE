import DB from "../config/db.js";

const kelurahanModel = {
    fetchAll: (id_kecamatan) => {
        let query = `
            SELECT 
                kel.kode as kelurahan_kd,
                kel.nama as kelurahan_nm
            FROM 
                aset_manfaat.kelurahan AS kel
            WHERE
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
