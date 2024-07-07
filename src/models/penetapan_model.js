import DB from "../config/db.js";

const penetapanModel = {
  // INVENTARIS BY ID
  fetchTanahById: (id) => {
    let query = `
      SELECT
        p.id as penetapan_id,
        p.kib_id as penetapan_kib_id,
        p.kategori_id as penetapan_kategori_id,
        p.thn_nilai as penetapan_thn_nilai,
        p.no_register as penetapan_no_register,
        p.tgl_perolehan as penetapan_tgl_perolehan,
        p.th_beli as penetapan_th_beli,
        p.a_luas_m2 as penetapan_a_luas_m2,
        p.a_alamat as penetapan_a_alamat,
        p.a_penggunaan as penetapan_a_penggunaan,
        p.a_hak_tanah as penetapan_a_hak_tanah,
        p.a_sertifikat_nomor as penetapan_a_sertifikat_nomor,
        p.a_sertifikat_tanggal as penetapan_a_sertifikat_tanggal,
        p.harga as penetapan_harga,
        p.asal_usul as penetapan_asal_usul,
        p.keterangan AS penetapan_keterangan,
        p.kondisi as penetapan_kondisi,
        p.jumlah as penetapan_jumlah,
        p.departemen_id as penetapan_departemen_id,
        
        k.kode AS kategori_kd,
        k.nama AS kategori_nm,
        
        d.kode AS departemen_kd,
        d.nama AS departemen_nm,
        
        inv.id AS inv_id,
        inv.tgl_inventaris,
        inv.no_register_status,
        inv.no_register_awal,
        inv.no_register_akhir,
        inv.kategori_status,
        inv.kategori_id_awal,
        inv.kategori_id_akhir,
        inv.nama_spesifikasi_status,
        inv.nama_spesifikasi_awal,
        inv.nama_spesifikasi_akhir,
        inv.jumlah_status,
        inv.jumlah_awal,
        inv.jumlah_akhir,
        inv.satuan,
        inv.cara_perolehan_status,
        inv.cara_perolehan_awal,
        inv.cara_perolehan_akhir,
        inv.perolehan_status,
        inv.perolehan_awal,
        inv.perolehan_akhir,
        inv.a_luas_m2_status,
        inv.a_luas_m2_awal,
        inv.a_luas_m2_akhir,
        inv.a_hak_tanah_status,
        inv.a_hak_tanah_awal,
        inv.a_hak_tanah_akhir,
        inv.a_sertifikat_nomor_status,
        inv.a_sertifikat_nomor_awal,
        inv.a_sertifikat_nomor_akhir,
        inv.a_sertifikat_tanggal_status,
        inv.a_sertifikat_tanggal_awal,
        inv.a_sertifikat_tanggal_akhir,
        inv.atribusi_biaya,
        inv.atribusi_status,
        inv.atribusi_kib_id,
        inv.atribusi_nibar,
        inv.atribusi_kategori_id,
        inv.atribusi_kategori_kd,
        inv.atribusi_kategori_nm,
        inv.atribusi_no_register,
        inv.atribusi_nama,
        inv.alamat_status,
        inv.alamat_awal,		
        inv.alamat_akhir,
        inv.alamat_kota,		
        inv.alamat_kecamatan,		
        inv.alamat_kelurahan,		
        inv.alamat_jalan,		
        inv.alamat_no,		
        inv.alamat_rt,		
        inv.alamat_rw,		
        inv.alamat_kode_pos,
        inv.kartu_inventaris_ruangan_status,
        inv.kartu_inventaris_ruangan_awal,
        inv.kartu_inventaris_ruangan_akhir,
        inv.barcode_barang_status,
        inv.barcode_ruangan_status,
        inv.keberadaan_barang_status,
        inv.keberadaan_barang_awal,
        inv.keberadaan_barang_akhir,
        inv.kondisi_status,
        inv.kondisi_awal,
        inv.kondisi_akhir,
        inv.asal_usul_status,
        inv.asal_usul_awal,
        inv.asal_usul_akhir,
        inv.penggunaan_status,
        inv.penggunaan_barang_pemda_status,
        inv.penggunaan_barang_pemda_nama,
        inv.penggunaan_barang_pemda_doc,
        inv.penggunaan_barang_pemda_status_pemakai,
        inv.penggunaan_barang_pemda_bast,
        inv.penggunaan_barang_pemda_sip,
        inv.penggunaan_barang_pemda_imb,
        inv.penggunaan_barang_pempus_status,
        inv.penggunaan_barang_pempus_yt,
        inv.penggunaan_barang_pempus_y_nama,
        inv.penggunaan_barang_pempus_y_doc,
        inv.penggunaan_barang_pempus_t_nama,
        inv.penggunaan_barang_pdl_status,
        inv.penggunaan_barang_pdl_yt,
        inv.penggunaan_barang_pdl_y_nama,
        inv.penggunaan_barang_pdl_y_doc,
        inv.penggunaan_barang_pdl_t_nama,
        inv.penggunaan_barang_pl_status,
        inv.penggunaan_barang_pl_yt,
        inv.penggunaan_barang_pl_y_nama,
        inv.penggunaan_barang_pl_y_doc,
        inv.penggunaan_barang_pl_t_nama,
        inv.tercatat_ganda_status,
        inv.tercatat_ganda_kib_id,
        inv.tercatat_ganda_nibar,
        inv.tercatat_ganda_no_register,
        inv.tercatat_ganda_kategori_id,
        inv.tercatat_ganda_kategori_kd,
        inv.tercatat_ganda_kategori_nm,
        inv.tercatat_ganda_nama_spesifikasi,
        inv.tercatat_ganda_luas,
        inv.tercatat_ganda_satuan,
        inv.tercatat_ganda_perolehan,
        inv.tercatat_ganda_tgl_perolehan,
        inv.tercatat_ganda_kuasa_pengguna,
        inv.diatas_tanah_milik,
        inv.diatas_tanah_milik_pemda,		
        inv.long,	
        inv.lat,	
        inv.lainnya,	
        inv.keterangan,
        
        CASE WHEN inv.id IS NULL THEN 0 ELSE 1 END AS is_inventaris
      FROM
        aset.penetapan AS p
      JOIN 
        aset.kategoris AS k ON p.kategori_id = k.id
      JOIN
        departemen AS d ON p.departemen_id = d.id
      LEFT JOIN
        aset.inventaris_kib AS inv ON inv.penetapan_id = p.id
      WHERE 
        p.id = ${id}
    `;

    return new Promise((resolve, reject) => {
      DB.query(query, (err, result) => {
        if (err) reject(err);
        resolve(result.rows[0]);
      });
    });
  },

  fetchPeralatanMesinById: (id) => {
    let query = `
      SELECT 
        p.kib_id AS kib_id,
        p.id AS penetapan_id,
        p.departemen_id AS departemen_id,
        d.kode AS departemen_kd,
        d.nama AS departemen_nm,
        p.no_register,
        p.kategori_id,
        kat.kode AS kategori_kd,
        kat.nama AS kategori_nm,
        p.jumlah,
        p.satuan AS satuan_awal,
        p.cara_perolehan,
        TO_CHAR(p.tgl_perolehan, 'DD-MM-YYYY') AS tgl_perolehan_penetapan,
        p.th_beli,
        REPLACE(TO_CHAR(p.perolehan, 'FM999,999,999,999'), ',', '.') AS perolehan_formatted,
        p.a_alamat,
        p.b_merk,
        p.b_cc,
        p.b_nomor_polisi,
        p.b_nomor_rangka,
        p.b_nomor_mesin,
        p.b_nomor_bpkb,
        p.b_bahan,
        p.b_nomor_pabrik,
        p.b_kd_ruang,
        p.a_penggunaan,
        p.kondisi,
        p.asal_usul,
        p.keterangan AS keterangan_penetapan,
        p.file_nm AS file_penetapan,
        TO_CHAR(inv.tgl_inventaris, 'DD-MM-YYYY') AS tgl_inventaris_formatted,
        inv.no_register_awal,
        inv.no_register_akhir,
        inv.no_register_status,
        inv.kategori_id_awal,
        inv.kategori_id_akhir,
        inv.kategori_id_status,
        inv.nama_spesifikasi_awal,
        inv.nama_spesifikasi_akhir,
        inv.nama_spesifikasi_status,
        inv.jumlah_awal,
        inv.jumlah_akhir,
        inv.jumlah_status,
        inv.satuan AS satuan_akhir,
        inv.cara_perolehan_awal,
        inv.cara_perolehan_akhir,
        inv.cara_perolehan_status,
        TO_CHAR(inv.tgl_perolehan, 'DD-MM-YYYY') AS tgl_perolehan_inventaris,
        inv.tahun_perolehan,
        REPLACE(TO_CHAR(inv.perolehan_awal, 'FM999,999,999,999'), ',', '.') AS perolehan_awal_formatted,
        REPLACE(TO_CHAR(inv.perolehan_akhir, 'FM999,999,999,999'), ',', '.') AS perolehan_akhir_formatted,
        inv.perolehan_status,
        inv.atribusi_biaya,
        inv.atribusi_status,
        inv.atribusi_nibar,
        inv.atribusi_kode_barang,
        inv.atribusi_kode_lokasi,
        inv.atribusi_no_register,
        inv.atribusi_nama_barang,
        inv.atribusi_spesifikasi_barang,
        inv.a_alamat_awal,
        inv.a_alamat_akhir,
        inv.a_alamat_status,
        inv.alamat_kota,
        inv.alamat_kecamatan,
        inv.alamat_kelurahan,
        inv.alamat_jalan,
        inv.alamat_no,
        inv.alamat_rt,
        inv.alamat_rw,
        inv.alamat_kodepos,
        inv.b_merk_awal,
        inv.b_merk_akhir,
        inv.b_merk_status,
        inv.b_cc_awal,
        inv.b_cc_akhir,
        inv.b_cc_status,
        inv.b_nomor_polisi_awal,
        inv.b_nomor_polisi_akhir,
        inv.b_nomor_polisi_status,
        inv.b_nomor_rangka_awal,
        inv.b_nomor_rangka_akhir,
        inv.b_nomor_rangka_status,
        inv.b_nomor_mesin_awal,
        inv.b_nomor_mesin_akhir,
        inv.b_nomor_mesin_status,
        inv.b_nomor_bpkb_awal,
        inv.b_nomor_bpkb_akhir,
        inv.b_nomor_bpkb_status,
        inv.b_bahan_awal,
        inv.b_bahan_akhir,
        inv.b_bahan_status,
        inv.b_nomor_pabrik_awal,
        inv.b_nomor_pabrik_akhir,
        inv.b_nomor_pabrik_status,
        inv.kartu_inv_awal,
        inv.kartu_inv_akhir,
        inv.kartu_inv_status,
        inv.barcode_barang,
        inv.barcode_barang_akhir,
        inv.barcode_ruangan,
        inv.barcode_ruangan_akhir,
        inv.keberadaan_barang_akhir,
        inv.keberadaan_barang_status,
        inv.kondisi_awal,
        inv.kondisi_akhir,
        inv.kondisi_status,
        inv.asal_usul_awal,
        inv.asal_usul_akhir,
        inv.asal_usul_status,
        inv.penggunaan_status,
        inv.penggunaan_awal,
        inv.penggunaan_pemda_status,
        inv.penggunaan_pemda_akhir,
        inv.penggunaan_pemda_nama_pemakai,
        inv.penggunaan_pemda_nama_pemakai_status,
        inv.penggunaan_pemda_nama_pemakai_akhir,
        inv.penggunaan_pemda_status_pemakai,
        inv.penggunaan_pemda_bast_pemakaian,
        inv.penggunaan_pempus_status,
        inv.penggunaan_pempus_yt,
        inv.penggunaan_pempus_y_nm,
        inv.penggunaan_pempus_y_doc,
        inv.penggunaan_pempus_t_nm,
        inv.penggunaan_pdl_status,
        inv.penggunaan_pdl_yt,
        inv.penggunaan_pdl_y_nm,
        inv.penggunaan_pdl_y_doc,
        inv.penggunaan_pdl_t_nm,
        inv.penggunaan_pl_status,
        inv.penggunaan_pl_yt,
        inv.penggunaan_pl_y_nm,
        inv.penggunaan_pl_y_doc,
        inv.penggunaan_pl_t_nm,
        inv.tercatat_ganda,
        inv.tercatat_ganda_nibar,
        inv.tercatat_ganda_no_register,
        inv.tercatat_ganda_kode_barang,
        inv.tercatat_ganda_nama_barang,
        inv.tercatat_ganda_spesifikasi_barang,
        inv.tercatat_ganda_luas,
        inv.tercatat_ganda_satuan,
        inv.tercatat_ganda_perolehan,
        inv.tercatat_ganda_tanggal_perolehan,
        inv.tercatat_ganda_kuasa_pengguna,
        inv.pemilik_id,
        inv.lainnya,
        inv.keterangan AS keterangan_inventaris,
        inv.file_nm AS file_inventaris,
        inv.petugas,
        inv.tahun,
        CASE WHEN inv.id IS NULL THEN 0 ELSE 1 END AS status_inventaris
      FROM 
        aset.penetapan AS p
      JOIN 
        public.departemen AS d ON d.id = p.departemen_id
      JOIN 
        aset.kategoris AS kat ON kat.id = p.kategori_id
      LEFT JOIN 
        aset.kib_inventaris AS inv ON inv.penetapan_id = p.id
        AND inv.kib_id = p.kib_id 
      WHERE
        p.id = ${id}
    `;

    return new Promise((resolve, reject) => {
      DB.query(query, (err, result) => {
        if (err) reject(err);
        resolve(result.rows[0]);
      });
    });
  },

  fetchGedungBangunanById: (id) => {
    let query = `
      SELECT 
        p.kib_id AS kib_id,
        p.id AS penetapan_id,
        p.departemen_id AS departemen_id,
        d.kode AS departemen_kd,
        d.nama AS departemen_nm,
        p.no_register,
        p.kategori_id,
        kat.kode AS kategori_kd,
        kat.nama AS kategori_nm,
        p.jumlah,
        p.satuan AS satuan_awal,
        p.cara_perolehan,
        TO_CHAR(p.tgl_perolehan, 'DD-MM-YYYY') AS tgl_perolehan_penetapan,
        p.th_beli,
        REPLACE(TO_CHAR(p.perolehan, 'FM999,999,999,999'), ',', '.') AS perolehan_formatted,
        p.c_lokasi,
        p.c_luas_bangunan,
        p.c_luas_lantai,
        p.c_bertingkat_tidak,
        p.c_beton_tidak,
        p.c_status_tanah,
        p.kondisi,
        p.asal_usul,
        p.a_penggunaan,
        p.long AS long_penetapan,
        p.lat AS lat_penetapan,
        p.keterangan AS keterangan_penetapan,
        p.file_nm AS file_penetapan,
        TO_CHAR(inv.tgl_inventaris, 'DD-MM-YYYY') AS tgl_inventaris_formatted,
        inv.no_register_awal,
        inv.no_register_akhir,
        inv.no_register_status,
        inv.kategori_id_awal,
        inv.kategori_id_akhir,
        inv.kategori_id_status,
        inv.nama_spesifikasi_awal,
        inv.nama_spesifikasi_akhir,
        inv.nama_spesifikasi_status,
        inv.jumlah_awal,  
        inv.satuan AS satuan_akhir,
        inv.cara_perolehan_awal,
        inv.cara_perolehan_akhir,
        inv.cara_perolehan_status,
        TO_CHAR(inv.tgl_perolehan, 'DD-MM-YYYY') AS tgl_perolehan_inventaris,
        inv.tahun_perolehan,
        REPLACE(TO_CHAR(inv.perolehan_awal, 'FM999,999,999,999'), ',', '.') AS perolehan_awal_formatted,
        REPLACE(TO_CHAR(inv.perolehan_akhir, 'FM999,999,999,999'), ',', '.') AS perolehan_akhir_formatted,
        inv.perolehan_status,
        inv.atribusi_biaya,
        inv.atribusi_status,
        inv.atribusi_nibar,
        inv.atribusi_kode_barang,
        inv.atribusi_kode_lokasi,
        inv.atribusi_no_register,
        inv.atribusi_nama_barang,
        inv.atribusi_spesifikasi_barang,
        inv.a_alamat_awal,
        inv.a_alamat_status,
        inv.alamat_kota,
        inv.alamat_kecamatan,
        inv.alamat_kelurahan,
        inv.alamat_jalan,
        inv.alamat_no,
        inv.alamat_rt,
        inv.alamat_rw,
        inv.alamat_kodepos,
        inv.c_luas_bangunan_awal,
        inv.c_luas_bangunan_akhir,
        inv.c_luas_bangunan_status,
        inv.c_satuan_bangunan,
        inv.c_bertingkat,
        inv.c_beton,  
        inv.c_luas_tanah_awal,
        inv.c_luas_tanah_akhir,
        inv.c_luas_tanah_status,
        inv.c_satuan_tanah,
        inv.c_status_tanah_awal,
        inv.keberadaan_barang_status,
        inv.kondisi_awal,
        inv.kondisi_akhir,
        inv.kondisi_status,
        inv.asal_usul_awal,
        inv.asal_usul_akhir,
        inv.asal_usul_status,
        inv.penggunaan_status,
        inv.penggunaan_awal,
        inv.penggunaan_pemda_status,
        inv.penggunaan_pemda_akhir,
        inv.penggunaan_pemda_nama_pemakai,
        inv.penggunaan_pemda_nama_pemakai_akhir,
        inv.penggunaan_pemda_nama_pemakai_status,
        inv.penggunaan_pemda_status_pemakai,
        inv.penggunaan_pemda_bast_pemakaian,
        inv.penggunaan_pemda_sip,
        inv.penggunaan_pemda_imb,
        inv.penggunaan_pempus_status,
        inv.penggunaan_pempus_yt,
        inv.penggunaan_pempus_y_nm,
        inv.penggunaan_pempus_y_doc,
        inv.penggunaan_pempus_t_nm,
        inv.penggunaan_pdl_status,
        inv.penggunaan_pdl_yt,
        inv.penggunaan_pdl_y_nm,
        inv.penggunaan_pdl_y_doc,
        inv.penggunaan_pdl_t_nm,
        inv.penggunaan_pl_status,
        inv.penggunaan_pl_yt,
        inv.penggunaan_pl_y_nm,
        inv.penggunaan_pl_y_doc,
        inv.penggunaan_pl_t_nm,
        inv.tercatat_ganda,
        inv.tercatat_ganda_nibar,
        inv.tercatat_ganda_no_register,
        inv.tercatat_ganda_kode_barang,
        inv.tercatat_ganda_nama_barang,
        inv.tercatat_ganda_spesifikasi_barang,
        inv.tercatat_ganda_luas,
        inv.tercatat_ganda_satuan,
        inv.tercatat_ganda_perolehan,
        inv.tercatat_ganda_tanggal_perolehan,
        inv.tercatat_ganda_kuasa_pengguna,
        inv.pemilik_id,
        inv.lat AS lat_inventaris,
        inv.long AS long_inventaris,
        inv.lainnya,
        inv.keterangan AS keterangan_inventaris,
        inv.file_nm AS file_invetaris,
        inv.petugas,
        inv.tahun,
        CASE WHEN inv.id IS NULL THEN 0 ELSE 1 END AS status_inventaris
      FROM 
        aset.penetapan AS p
      JOIN 
        public.departemen AS d ON d.id = p.departemen_id
      JOIN 
        aset.kategoris AS kat ON kat.id = p.kategori_id
      LEFT JOIN 
        aset.kib_inventaris AS inv ON inv.penetapan_id = p.id
        AND inv.kib_id = p.kib_id 
      WHERE
        p.id = ${id}
    `;

    return new Promise((resolve, reject) => {
      DB.query(query, (err, result) => {
        if (err) reject(err);
        resolve(result.rows[0]);
      });
    });
  },

  fetchJalanJaringanIrigasiById: (id) => {
    let query = `
      SELECT 
        p.kib_id AS kib_id,
        p.id AS penetapan_id,
        p.departemen_id AS departemen_id,
        d.kode AS departemen_kd,
        d.nama AS departemen_nm,
        kat.kode AS kategori_kd,
        kat.nama AS kategori_nm,
        p.no_register,
        p.kategori_id,
        p.jumlah,
        p.satuan AS satuan_awal,
        p.cara_perolehan,
        TO_CHAR(p.tgl_perolehan, 'DD-MM-YYYY') AS tgl_perolehan_penetapan,
        p.th_beli,
        REPLACE(TO_CHAR(p.perolehan, 'FM999,999,999,999'), ',', '.') AS perolehan_formatted,
        p.kondisi,
        p.asal_usul,
        p.a_penggunaan,
        p.d_konstruksi,
        p.d_panjang,
        p.d_lebar,
        p.d_luas,
        p.d_lokasi,
        p.d_status_tanah AS d_status_tanah_penetapan,
        p.lat AS lat_penetapan,
        p.long AS long_penetapan,
        p.keterangan AS keterangan_penetapan,
        p.file_nm AS file_penetapan,
        TO_CHAR(inv.tgl_inventaris, 'DD-MM-YYYY') AS tgl_inventaris_formatted,
        inv.no_register_awal,
        inv.no_register_akhir,
        inv.no_register_status,
        inv.kategori_id_awal,
        inv.kategori_id_akhir,
        inv.kategori_id_status,
        inv.nama_spesifikasi_awal,
        inv.nama_spesifikasi_akhir,
        inv.nama_spesifikasi_status,
        inv.jumlah_awal,
        inv.satuan AS satuan_akhir,
        inv.cara_perolehan_awal,
        inv.cara_perolehan_akhir,
        inv.cara_perolehan_status,
        TO_CHAR(inv.tgl_perolehan, 'DD-MM-YYYY') AS tgl_perolehan_inventaris,
        inv.tahun_perolehan,
        REPLACE(TO_CHAR(inv.perolehan_awal, 'FM999,999,999,999'), ',', '.') AS perolehan_awal_formatted,
        REPLACE(TO_CHAR(inv.perolehan_akhir, 'FM999,999,999,999'), ',', '.') AS perolehan_akhir_formatted,
        inv.perolehan_status,
        inv.atribusi_biaya,
        inv.atribusi_status,
        inv.atribusi_nibar,
        inv.atribusi_kode_barang,
        inv.atribusi_kode_lokasi,
        inv.atribusi_no_register,
        inv.atribusi_nama_barang,
        inv.atribusi_spesifikasi_barang,
        inv.a_alamat_awal,
        inv.a_alamat_akhir,
        inv.a_alamat_status,
        inv.alamat_kota,
        inv.alamat_kecamatan,
        inv.alamat_kelurahan,
        inv.alamat_jalan,
        inv.alamat_no,
        inv.alamat_rt,
        inv.alamat_rw,
        inv.alamat_kodepos,
        inv.keberadaan_barang_status,
        inv.kondisi_awal,
        inv.kondisi_akhir,
        inv.kondisi_status,
        inv.asal_usul_awal,
        inv.asal_usul_akhir,
        inv.asal_usul_status,
        inv.penggunaan_status,
        inv.penggunaan_awal,
        inv.penggunaan_pemda_status,
        inv.penggunaan_pemda_akhir,
        inv.penggunaan_pempus_status,
        inv.penggunaan_pempus_yt,
        inv.penggunaan_pempus_y_nm,
        inv.penggunaan_pempus_y_doc,
        inv.penggunaan_pempus_t_nm,
        inv.penggunaan_pdl_status,
        inv.penggunaan_pdl_yt,
        inv.penggunaan_pdl_y_nm,
        inv.penggunaan_pdl_y_doc,
        inv.penggunaan_pdl_t_nm,
        inv.penggunaan_pl_status,
        inv.penggunaan_pl_yt,
        inv.penggunaan_pl_y_nm,
        inv.penggunaan_pl_y_doc,
        inv.penggunaan_pl_t_nm,
        inv.d_lokasi_awal,
        inv.d_lokasi_akhir,
        inv.d_lokasi_status,
        inv.d_jenis_pengkerasan_jln_awal,
        inv.d_jenis_pengkerasan_jln_akhir,
        inv.d_jenis_pengkerasan_jln_status,
        inv.d_jenis_bahan_jembatan_awal,
        inv.d_jenis_bahan_jembatan_akhir,
        inv.d_jenis_bahan_jembatan_status,
        inv.d_nomor_ruas_jln_awal,
        inv.d_nomor_ruas_jln_akhir,
        inv.d_nomor_ruas_jln_status,
        inv.d_nomor_jaringan_irigasi_awal,
        inv.d_nomor_jaringan_irigasi_akhir,
        inv.d_nomor_jaringan_irigasi_status,
        inv.d_konstruksi_awal,
        inv.d_konstruksi_akhir,
        inv.d_konstruksi_status,
        inv.d_panjang_awal,
        inv.d_panjang_akhir,
        inv.d_panjang_status,
        inv.d_panjang_satuan,
        inv.d_lebar_awal,
        inv.d_lebar_akhir,
        inv.d_lebar_status,
        inv.d_lebar_satuan,
        inv.d_luas_awal,
        inv.d_luas_akhir,
        inv.d_luas_status,
        inv.d_luas_satuan,
        inv.d_luas_tanah,
        inv.d_status_tanah AS d_status_tanah_inventaris,
        inv.tercatat_ganda,
        inv.tercatat_ganda_nibar,
        inv.tercatat_ganda_no_register,
        inv.tercatat_ganda_kode_barang,
        inv.tercatat_ganda_nama_barang,
        inv.tercatat_ganda_spesifikasi_barang,
        inv.tercatat_ganda_luas,
        inv.tercatat_ganda_satuan,
        inv.tercatat_ganda_perolehan,
        inv.tercatat_ganda_tanggal_perolehan,
        inv.tercatat_ganda_kuasa_pengguna,
        inv.pemilik_id,
        inv.lat AS lat_inventaris,
        inv.long AS long_inventaris,
        inv.lainnya,
        inv.keterangan AS keterangan_inventaris,
        inv.file_nm AS file_inventaris,
        inv.petugas,
        inv.tahun,
        CASE WHEN inv.id IS NULL THEN 0 ELSE 1 END AS status_inventaris
      FROM 
        aset.penetapan AS p
      JOIN 
        public.departemen AS d ON d.id = p.departemen_id
      JOIN 
        aset.kategoris AS kat ON kat.id = p.kategori_id
      LEFT JOIN 
        aset.kib_inventaris AS inv ON inv.penetapan_id = p.id
        AND inv.kib_id = p.kib_id 
      WHERE
        p.id = ${id}
    `;

    return new Promise((resolve, reject) => {
      DB.query(query, (err, result) => {
        if (err) reject(err);
        resolve(result.rows[0]);
      });
    });
  },

  fetchAsetTetapLainnyaById: (id) => {
    let query = `
      SELECT 
        p.kib_id AS kib_id,
        p.id AS penetapan_id,
        p.departemen_id AS departemen_id,
        d.kode AS departemen_kd,
        d.nama AS departemen_nm,
        p.no_register,
        p.kategori_id,
        kat.kode AS kategori_kd,
        kat.nama AS kategori_nm,
        p.jumlah,
        p.satuan AS satuan_awal,
        p.cara_perolehan,
        TO_CHAR(p.tgl_perolehan, 'DD-MM-YYYY') AS tgl_perolehan_penetapan,
        p.th_beli,
        REPLACE(TO_CHAR(p.perolehan, 'FM999,999,999,999'),',','.') AS perolehan_formatted,
        p.e_spek,
        p.e_judul,
        p.e_jenis,
        p.e_bahan,
        p.e_pencipta,
        p.e_ukuran,
        p.kondisi,
        p.asal_usul,
        p.a_alamat,
        p.a_penggunaan,
        p.keterangan AS keterangan_penetapan,
        p.file_nm AS file_penetapan,
        TO_CHAR(inv.tgl_inventaris, 'DD-MM-YYYY') AS tgl_inventaris_formatted,
        inv.no_register_awal,
        inv.no_register_akhir,
        inv.no_register_status,
        inv.kategori_id_awal,
        inv.kategori_id_akhir,
        inv.kategori_id_status,
        inv.nama_spesifikasi_awal,
        inv.nama_spesifikasi_akhir,
        inv.nama_spesifikasi_status,
        inv.jumlah_awal,
        inv.satuan AS satuan_akhir,
        inv.cara_perolehan_awal,
        inv.cara_perolehan_akhir,
        inv.cara_perolehan_status,
        TO_CHAR(inv.tgl_perolehan, 'DD-MM-YYYY') AS tgl_perolehan_inventaris,
        inv.tahun_perolehan,
        REPLACE(TO_CHAR(inv.perolehan_awal, 'FM999,999,999,999'),',','.') AS perolehan_awal_formatted,
        REPLACE(TO_CHAR(inv.perolehan_akhir, 'FM999,999,999,999'),',','.') AS perolehan_akhir_formatted,
        inv.perolehan_status,
        inv.atribusi_biaya,
        inv.atribusi_status,
        inv.atribusi_nibar,
        inv.atribusi_kode_barang,
        inv.atribusi_kode_lokasi,
        inv.atribusi_no_register,
        inv.atribusi_nama_barang,
        inv.atribusi_spesifikasi_barang,
        inv.a_alamat_awal,
        inv.a_alamat_status,
        inv.alamat_kota,
        inv.alamat_kecamatan,
        inv.alamat_kelurahan,
        inv.alamat_jalan,
        inv.alamat_no,
        inv.alamat_rt,
        inv.alamat_rw,
        inv.alamat_kodepos,
        inv.e_spek_awal,
        inv.e_spek_akhir,
        inv.e_spek_status,
        inv.e_judul_awal,
        inv.e_judul_akhir,
        inv.e_judul_status,
        inv.e_jenis_awal,
        inv.e_jenis_akhir,
        inv.e_jenis_status,
        inv.e_bahan_awal,
        inv.e_bahan_akhir,
        inv.e_bahan_status,
        inv.e_pencipta_awal,
        inv.e_pencipta_akhir,
        inv.e_pencipta_status,
        inv.e_ukuran_awal,
        inv.e_ukuran_akhir,
        inv.e_ukuran_status,
        inv.keberadaan_barang_akhir,
        inv.keberadaan_barang_status,
        inv.kondisi_awal,
        inv.kondisi_akhir,
        inv.kondisi_status,
        inv.asal_usul_awal,
        inv.asal_usul_akhir,
        inv.asal_usul_status,
        inv.penggunaan_status,
        inv.penggunaan_awal,
        inv.penggunaan_pemda_status,
        inv.penggunaan_pemda_akhir,
        inv.penggunaan_pempus_status,
        inv.penggunaan_pempus_yt,
        inv.penggunaan_pempus_y_nm,
        inv.penggunaan_pempus_y_doc,
        inv.penggunaan_pempus_t_nm,
        inv.penggunaan_pdl_status,
        inv.penggunaan_pdl_yt,
        inv.penggunaan_pdl_y_nm,
        inv.penggunaan_pdl_y_doc,
        inv.penggunaan_pdl_t_nm,
        inv.penggunaan_pl_status,
        inv.penggunaan_pl_yt,
        inv.penggunaan_pl_y_nm,
        inv.penggunaan_pl_y_doc,
        inv.penggunaan_pl_t_nm,
        inv.tercatat_ganda,
        inv.tercatat_ganda_nibar,
        inv.tercatat_ganda_no_register,
        inv.tercatat_ganda_kode_barang,
        inv.tercatat_ganda_nama_barang,
        inv.tercatat_ganda_spesifikasi_barang,
        inv.tercatat_ganda_luas,
        inv.tercatat_ganda_satuan,
        inv.tercatat_ganda_perolehan,
        inv.tercatat_ganda_tanggal_perolehan,
        inv.tercatat_ganda_kuasa_pengguna,
        inv.pemilik_id,
        inv.lainnya,
        inv.keterangan AS keterangan_inventaris,
        inv.file_nm AS file_inventaris,
        inv.petugas,
        inv.tahun,
        CASE WHEN inv.id IS NULL THEN 0 ELSE 1 END AS status_inventaris
      FROM 
        aset.penetapan AS p
      JOIN 
        public.departemen AS d ON d.id = p.departemen_id
      JOIN 
        aset.kategoris AS kat ON kat.id = p.kategori_id
      LEFT JOIN 
        aset.kib_inventaris AS inv ON inv.penetapan_id = p.id
        AND inv.kib_id = p.kib_id 
      WHERE
        p.id = ${id}
    `;

    return new Promise((resolve, reject) => {
      DB.query(query, (err, result) => {
        if (err) reject(err);
        resolve(result.rows[0]);
      });
    });
  },

  // INVENTARIS BY DEPARTEMENT
  fetchTanahByDepartemen: (
    idDepartemen,
    perPage = 10,
    page = 1,
    tahun = 2023
  ) => {
    const offset = (page - 1) * perPage;

    let query = `
      SELECT
        p.id AS penetapan_id,
        p.kib_id,
        p.th_beli,
        TO_CHAR(p.tgl_perolehan, 'DD-MM-YYYY') AS tgl_perolehan_formatted,
        p.no_register,
        kat.id AS kategori_id,
        kat.kode AS kategori_kd,
        kat.nama AS kategori_nm,
        p.a_luas_m2,
        p.a_alamat,
        p.a_penggunaan,
        p.a_hak_tanah,
        TO_CHAR(p.a_sertifikat_tanggal, 'DD-MM-YYYY') AS a_sertifikat_tanggal_formatted,
        p.a_sertifikat_nomor,
        p.asal_usul,
        p.keterangan,
        'Rp.' || REPLACE(TO_CHAR(p.perolehan, 'FM999,999,999,999'), ',', '.') AS perolehan_formatted,
        p.kondisi,
        inv.id AS inventaris_id,
        inv.tahun AS inventaris_tahun,
        TO_CHAR(inv.tgl_inventaris, 'DD-MM-YYYY') AS tgl_inventaris_formatted,
        inv.keberadaan_barang_status,
        ROW_NUMBER() OVER (ORDER BY p.id) AS nomor,
        CASE WHEN inv.id IS NULL THEN 0 ELSE 1 END AS status_inventaris,
        CASE 
          WHEN inv.penggunaan_pemda_status = 1 THEN 'Pemerintah Daerah'
          WHEN inv.penggunaan_pempus_status = 1 THEN 'Pemerintah Pusat'
          WHEN inv.penggunaan_pdl_status = 1 THEN 'Pemerintah Daerah Lainnya'
          WHEN inv.penggunaan_pl_status = 1 THEN 'Pihak Lain'
          ELSE ''
        END AS penguasaan
      FROM 
        aset.penetapan AS p
      JOIN 
        public.departemen AS d ON d.id = p.departemen_id
      JOIN 
        aset.kategoris AS kat ON kat.id = p.kategori_id
      LEFT JOIN 
        aset.kib_inventaris AS inv ON inv.penetapan_id = p.id
        AND inv.kib_id = p.kib_id 
        AND inv.tahun = ${tahun}
      WHERE 
        p.thn_nilai = ${tahun}-1
        AND p.departemen_id = ${idDepartemen}
        AND p.kondisi IN ('B', 'KB')
        AND p.kib = 'A'
        AND p.status < 9
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

  fetchTanahByDepartemenNew: (
    idDepartemen,
    perPage = 10,
    page = 1,
    tahun = 2024
  ) => {
    const offset = (page - 1) * perPage;

    let query = `
    SELECT 
      p.id,
      p.id as penetapan_id,
      p.kib_id,
      p.kategori_id,
      p.no_register,
      p.tgl_perolehan,
      p.th_beli,
      p.a_luas_m2,
      p.a_alamat,
      p.a_penggunaan,
      p.a_hak_tanah,
      p.a_sertifikat_tanggal,
      p.a_sertifikat_nomor,
      p.harga,
      p.asal_usul,
      p.keterangan,
      p.kondisi,
      p.file_nm,
      k.kode AS kategori_kd,
      k.status,
      k.nama AS kategori_nm,
      d.id AS departement_id,
      d.kode AS departement_kd,
      d.nama AS departement_nm,
      inv.id AS inv_id,
      inv.tgl_inventaris,
      inv.keberadaan_barang_awal,
      inv.penggunaan_status,
      inv.kondisi_akhir,
      CASE WHEN inv.id IS NULL THEN 0 ELSE 1 END AS is_inventaris,
      CASE 
        WHEN inv.penggunaan_barang_pemda_status = 1 THEN 'Pemerintah Daerah'
        WHEN inv.penggunaan_barang_pempus_status = 1 THEN 'Pemerintah Pusat'
        WHEN inv.penggunaan_barang_pdl_status = 1 THEN 'Pemerintah Daerah Lainnya'
        WHEN inv.penggunaan_barang_pl_status = 1 THEN 'Pihak Lain'
        ELSE ''
      END AS penguasaan,
      CASE 
        WHEN inv.penggunaan_barang_pempus_y_doc IS NOT NULL THEN inv.penggunaan_barang_pempus_y_doc
        WHEN inv.penggunaan_barang_pdl_y_doc IS NOT NULL THEN inv.penggunaan_barang_pdl_y_doc
        WHEN inv.penggunaan_barang_pl_y_doc IS NOT NULL THEN inv.penggunaan_barang_pl_y_doc
        ELSE ''
      END AS doc,
      inv.status
    FROM
      aset.penetapan AS p
    JOIN 
      aset.kategoris AS k ON p.kategori_id = k.id
    JOIN
      departemen AS d ON p.departemen_id = d.id
    LEFT JOIN
      aset.inventaris_kib AS inv ON inv.penetapan_id = p.id
    WHERE 
      d.kode = '${idDepartemen}' AND p.thn_nilai = ${
      tahun - 1
    } AND k.kode LIKE '%1.3.1%'
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

  fetchPeralatanMesinByDepartemen: (
    idDepartemen,
    perPage = 10,
    page = 1,
    tahun = 2023
  ) => {
    const offset = (page - 1) * perPage;
    let query = `
      SELECT
        p.id AS penetapan_id,
        p.kib_id,
        p.th_beli,
        TO_CHAR(p.tgl_perolehan, 'DD-MM-YYYY') AS tgl_perolehan_formatted,
        p.no_register,
        kat.id AS kategori_id,
        kat.kode AS kategori_kd,
        kat.nama AS kategori_nm,
        p.b_cc,
        p.b_bahan,
        p.b_nomor_pabrik,
        p.b_nomor_rangka,
        p.b_nomor_mesin,
        p.b_nomor_polisi,
        p.b_nomor_bpkb,
        p.b_merk,
        p.b_type,
        p.asal_usul,
        p.keterangan,
        'Rp.' || REPLACE(TO_CHAR(p.perolehan, 'FM999,999,999,999'), ',', '.') AS perolehan_formatted,
        p.kondisi,
        inv.kondisi_akhir,
        inv.id AS inventaris_id,
        inv.tahun AS inventaris_tahun,
        TO_CHAR(inv.tgl_inventaris, 'DD-MM-YYYY') AS tgl_inventaris_formatted,
        inv.keberadaan_barang_status,
        ROW_NUMBER() OVER (ORDER BY p.id) AS nomor,
        CASE WHEN inv.id IS NULL THEN 0 ELSE 1 END AS status_inventaris,
        CASE 
          WHEN inv.penggunaan_pemda_status = 1 THEN 'Pemerintah Daerah'
          WHEN inv.penggunaan_pempus_status = 1 THEN 'Pemerintah Pusat'
          WHEN inv.penggunaan_pdl_status = 1 THEN 'Pemerintah Daerah Lainnya'
          WHEN inv.penggunaan_pl_status = 1 THEN 'Pihak Lain'
          ELSE ''
        END AS penguasaan
      FROM 
        aset.penetapan AS p
      JOIN 
        public.departemen AS d ON d.id = p.departemen_id
      JOIN 
        aset.kategoris AS kat ON kat.id = p.kategori_id
      LEFT JOIN 
        aset.kib_inventaris AS inv ON inv.penetapan_id = p.id
        AND inv.kib_id = p.kib_id 
        AND inv.tahun = ${tahun}
      WHERE 
        p.thn_nilai = ${tahun}-1
        AND p.departemen_id = ${idDepartemen}
        AND p.kondisi IN ('B', 'KB')
        AND p.kib = 'B'
        AND p.status < 9
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
      SELECT
        p.id AS penetapan_id,
        p.kib_id,
        p.th_beli,
        TO_CHAR(p.tgl_perolehan, 'DD-MM-YYYY') AS tgl_perolehan_formatted,
        p.no_register,
        kat.id AS kategori_id,
        kat.kode AS kategori_kd,
        kat.nama AS kategori_nm,
        p.c_bertingkat_tidak,
        p.c_beton_tidak,
        p.c_luas_lantai,
        p.c_lokasi,
        TO_CHAR(p.c_dokumen_tanggal, 'DD-MM-YYYY') AS c_dokumen_tanggal_formatted,
        p.c_dokumen_nomor,
        p.c_luas_bangunan,
        p.c_status_tanah,
        p.c_kode_tanah,
        p.asal_usul,
        p.keterangan,
        'Rp.' || REPLACE(TO_CHAR(p.perolehan, 'FM999,999,999,999'), ',', '.') AS perolehan_formatted,
        p.kondisi,
        inv.kondisi_akhir,
        inv.id AS inventaris_id,
        inv.tahun AS inventaris_tahun,
        TO_CHAR(inv.tgl_inventaris, 'DD-MM-YYYY') AS tgl_inventaris_formatted,
        inv.keberadaan_barang_status,
        ROW_NUMBER() OVER (ORDER BY p.id) AS nomor,
        CASE WHEN inv.id IS NULL THEN 0 ELSE 1 END AS status_inventaris,
        CASE 
          WHEN inv.penggunaan_pemda_status = 1 THEN 'Pemerintah Daerah'
          WHEN inv.penggunaan_pempus_status = 1 THEN 'Pemerintah Pusat'
          WHEN inv.penggunaan_pdl_status = 1 THEN 'Pemerintah Daerah Lainnya'
          WHEN inv.penggunaan_pl_status = 1 THEN 'Pihak Lain'
          ELSE ''
        END AS penguasaan
      FROM 
        aset.penetapan AS p
      JOIN 
        public.departemen AS d ON d.id = p.departemen_id
      JOIN 
        aset.kategoris AS kat ON kat.id = p.kategori_id
      LEFT JOIN 
        aset.kib_inventaris AS inv ON inv.penetapan_id = p.id
        AND inv.kib_id = p.kib_id 
        AND inv.tahun = ${tahun}
      WHERE 
        p.thn_nilai = ${tahun}-1
        AND p.departemen_id = ${idDepartemen}
        AND p.kondisi IN ('B', 'KB')
        AND p.kib = 'C'
        AND p.status < 9
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
      SELECT
        p.id AS penetapan_id,
        p.kib_id,
        p.th_beli,
        TO_CHAR(p.tgl_perolehan, 'DD-MM-YYYY') AS tgl_perolehan_formatted,
        p.no_register,
        kat.id AS kategori_id,
        kat.kode AS kategori_kd,
        kat.nama AS kategori_nm,
        p.d_konstruksi,
        p.d_panjang, 
        p.d_lebar,
        p.d_luas,
        p.d_lokasi,
        TO_CHAR(p.d_dokumen_tanggal, 'DD-MM-YYYY') AS d_dokumen_tanggal_formatted,
        p.d_dokumen_nomor,
        p.d_kode_tanah,
        p.asal_usul,
        p.keterangan,
        'Rp.' || REPLACE(TO_CHAR(p.perolehan, 'FM999,999,999,999'), ',', '.') AS perolehan_formatted,
        p.kondisi,
        inv.id AS inventaris_id,
        inv.tahun AS inventaris_tahun,
        TO_CHAR(inv.tgl_inventaris, 'DD-MM-YYYY') AS tgl_inventaris_formatted,
        inv.keberadaan_barang_status,
        ROW_NUMBER() OVER (ORDER BY p.id) AS nomor,
        CASE WHEN inv.id IS NULL THEN 0 ELSE 1 END AS status_inventaris,
        CASE 
          WHEN inv.penggunaan_pemda_status = 1 THEN 'Pemerintah Daerah'
          WHEN inv.penggunaan_pempus_status = 1 THEN 'Pemerintah Pusat'
          WHEN inv.penggunaan_pdl_status = 1 THEN 'Pemerintah Daerah Lainnya'
          WHEN inv.penggunaan_pl_status = 1 THEN 'Pihak Lain'
          ELSE ''
        END AS penguasaan
      FROM 
        aset.penetapan AS p
      JOIN 
        public.departemen AS d ON d.id = p.departemen_id
      JOIN 
        aset.kategoris AS kat ON kat.id = p.kategori_id
      LEFT JOIN 
        aset.kib_inventaris AS inv ON inv.penetapan_id = p.id
        AND inv.kib_id = p.kib_id 
        AND inv.tahun = ${tahun}
      WHERE 
        p.thn_nilai = ${tahun}-1
        AND p.departemen_id = ${idDepartemen}
        AND p.kondisi IN ('B', 'KB')
        AND p.kib = 'D'
        AND p.status < 9
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
      SELECT
        p.id AS penetapan_id,
        p.kib_id,
        p.th_beli,
        TO_CHAR(p.tgl_perolehan, 'DD-MM-YYYY') AS tgl_perolehan_formatted,
        p.no_register,
        kat.id AS kategori_id,
        kat.kode AS kategori_kd,
        kat.nama AS kategori_nm,
        p.e_judul,
        p.e_spek,
        p.e_asal,
        p.e_pencipta,
        p.e_jenis,
        p.e_ukuran,
        p.asal_usul,
        p.keterangan,
        'Rp.' || REPLACE(TO_CHAR(p.perolehan, 'FM999,999,999,999'), ',', '.') AS perolehan_formatted,
        p.kondisi,
        inv.id AS inventaris_id,
        inv.tahun AS inventaris_tahun,
        TO_CHAR(inv.tgl_inventaris, 'DD-MM-YYYY') AS tgl_inventaris_formatted,
        inv.keberadaan_barang_status,
        ROW_NUMBER() OVER (ORDER BY p.id) AS nomor,
        CASE WHEN inv.id IS NULL THEN 0 ELSE 1 END AS status_inventaris,
        CASE 
          WHEN inv.penggunaan_pemda_status = 1 THEN 'Pemerintah Daerah'
          WHEN inv.penggunaan_pempus_status = 1 THEN 'Pemerintah Pusat'
          WHEN inv.penggunaan_pdl_status = 1 THEN 'Pemerintah Daerah Lainnya'
          WHEN inv.penggunaan_pl_status = 1 THEN 'Pihak Lain'
          ELSE ''
        END AS penguasaan
      FROM 
        aset.penetapan AS p
      JOIN 
        public.departemen AS d ON d.id = p.departemen_id
      JOIN 
        aset.kategoris AS kat ON kat.id = p.kategori_id
      LEFT JOIN 
        aset.kib_inventaris AS inv ON inv.penetapan_id = p.id
        AND inv.kib_id = p.kib_id 
        AND inv.tahun = ${tahun}
      WHERE 
        p.thn_nilai = ${tahun}-1
        AND p.departemen_id = ${idDepartemen}
        AND p.kondisi IN ('B', 'KB')
        AND p.kib = 'E'
        AND p.status < 9
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

  // COUNT TOTAL PAGE
  countTotalPage: (kategori, idDepartemen, perPage = 10, tahun = 2023) => {
    let query = `
    SELECT 
      CEIL(COUNT(*)::float / ${perPage}) AS total_halaman
    FROM 
      aset.penetapan AS p
    JOIN 
      aset.kategoris AS k ON p.kategori_id = k.id
    JOIN
      departemen AS d ON p.departemen_id = d.id
    WHERE 
      d.kode = '${idDepartemen}' AND p.thn_nilai = ${
      tahun - 1
    } AND k.kode LIKE '%${kategori}%'
    `;
    return new Promise((resolve, reject) => {
      DB.query(query, (err, result) => {
        if (err) reject(err);
        resolve(result.rows[0].total_halaman);
      });
    });
  },
};

export default penetapanModel;
