import DB from "../config/db.js";

const inventarisModel = {
  // Select KIBS
  SelectKIBS: (
    kodeDepartemen,
    kodeKategori,
    perPage = 10,
    page = 1,
    tahun = 2024
  ) => {
    const offset = (page - 1) * perPage;

    let query = `
    SELECT
      p.id as penetapan_id,
      p.kib_id as id,
      k.kode as kode_barang,
      p.no_register,
      k.nama as uraian,
      p.a_alamat,
      p.tgl_perolehan,
      p.th_beli,
      p.perolehan,
      p.kondisi,
      p.masa_manfaat,
      k.id as id_barang,
      p.jumlah,
      p.a_luas_m2 as luas,
      d.nama as kuasa_pengguna,
      d.kode as kode_lokasi,
      p.kib,
      p.keterangan,
      '12.32.71.'|| p.th_beli || '.' || k.kode || '.' || LPAD(p.no_id::text, 6, '0') as nibar
    FROM
      aset.penetapan AS p
    JOIN 
      aset.kategoris AS k ON p.kategori_id = k.id
    JOIN
      departemen AS d ON p.departemen_id = d.id
    LEFT JOIN
      aset.inventaris_kib AS inv ON inv.penetapan_id = p.id
    WHERE 
      d.kode = '${kodeDepartemen}' AND p.thn_nilai = ${
      tahun - 1
    } AND k.kode LIKE '%${kodeKategori}%' AND p.kondisi = 'B'
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

export default inventarisModel;
