import DB from "../config/db.js";

const kuasaModel = {
    fetchKuasa: (departemen_id) => {
        let query = `
            select
                p.kode,
                p.nama,
                j.nama jabatan
            from
                partner as p
                join partner_departemen pd on pd.partner_id = p.id
                join jabatan j on j.id = pd.jabatan_id
            where
                pd.departemen_id = ${departemen_id}
                and j.kode in ('3000');
        `;

        return new Promise((resolve, reject) => {
            DB.query(query, (err, result) => {
                if (err) reject(err);
                resolve(result.rows);
            });
        });
    },
};

export default kuasaModel;