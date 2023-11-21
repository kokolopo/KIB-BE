import DB from "../config/db.js";

const satuanModel = {
    fetchAll: () => {
        let query = `
            SELECT 
                s.kode as satuan_kd,
                s.nama as satuan_nm
            FROM 
                aset.satuan AS s
        `;

        return new Promise((resolve, reject) => {
        DB.query(query, (err, result) => {
            if (err) reject(err);
            resolve(result.rows);
        });
        });
    },
};

export default satuanModel;
