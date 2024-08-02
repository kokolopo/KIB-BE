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
        inv.atribusi_kode_lokasi,
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
        inv.tercatat_ganda_jumlah,
        inv.tercatat_ganda_satuan,
        inv.tercatat_ganda_perolehan,
        inv.tercatat_ganda_tgl_perolehan,
        inv.tercatat_ganda_kuasa_pengguna,
        inv.diatas_tanah_milik,
        inv.diatas_tanah_milik_pemda,	
        inv.diatas_tanah_milik_pempus,
        inv.diatas_tanah_milik_pdl,
        inv.diatas_tanah_milik_pl,	
        inv.long,	
        inv.lat,	
        inv.lainnya,	
        inv.keterangan,
        inv.petugas,
        inv.file_nm,
        
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
        p.id as penetapan_id,
        p.kib_id as penetapan_kib_id,
        p.kategori_id as penetapan_kategori_id,
        p.thn_nilai as penetapan_thn_nilai,
        p.no_register as penetapan_no_register, -- done
        p.cara_perolehan as perolehan, -- done
        p.tgl_perolehan as penetapan_tgl_perolehan, -- done
        p.th_beli as penetapan_th_beli, -- done
        p.perolehan as nilai_perolehan, -- done
        p.b_merk, -- done,ok
        p.b_type, -- done,ok
        p.b_cc, -- done,ok
        p.b_nomor_polisi, -- done,ok
        p.b_nomor_rangka, -- done,ok
        p.b_nomor_pabrik, -- done,
        p.b_nomor_mesin, -- done,ok
        p.b_nomor_bpkb, -- done,ok
        p.b_bahan, -- done,ok
        p.harga as penetapan_harga, -- done
        p.asal_usul as penetapan_asal_usul, -- done
        p.keterangan AS penetapan_keterangan,
        p.kondisi as penetapan_kondisi, -- done
        p.jumlah as penetapan_jumlah, -- done
        p.departemen_id as penetapan_departemen_id, -- done
        p.b_kd_ruang as id_ruang,
        r.nama as ruang,

        k.kode AS kategori_kd,
        k.nama AS kategori_nm, -- done

        d.kode AS departemen_kd, -- done
        d.nama AS departemen_nm, -- done

        inv.id AS inv_id,
        inv.tgl_inventaris, -- done
        inv.no_register_status, -- done
        inv.no_register_awal, -- done
        inv.no_register_akhir, -- done
        inv.kategori_status, -- done
        inv.kategori_id_awal, -- done
        inv.kategori_id_akhir, -- done
        inv.nama_spesifikasi_status, -- done
        inv.nama_spesifikasi_awal, -- done
        inv.nama_spesifikasi_akhir, -- done
        inv.jumlah_status, -- done
        inv.jumlah_awal, -- done
        inv.jumlah_akhir, -- done
        inv.satuan, -- done
        inv.cara_perolehan_status, -- done
        inv.cara_perolehan_awal, -- done
        inv.cara_perolehan_akhir, -- done
        inv.perolehan_status, -- done
        inv.perolehan_awal, -- done
        inv.perolehan_akhir, -- done
        
        inv.b_merk_status, -- done
        inv.b_merk_awal, -- done
        inv.b_merk_akhir, -- done
        inv.b_type_status, -- done
        inv.b_type_awal, -- done
        inv.b_type_akhir, -- done
        inv.b_cc_status, -- done
        inv.b_cc_awal, -- done
        inv.b_cc_akhir, -- done
        inv.b_bahan_status,-- done
        inv.b_bahan_awal,-- done
        inv.b_bahan_akhir,-- done
        inv.b_nomor_rangka_status,-- done
        inv.b_nomor_rangka_awal,-- done
        inv.b_nomor_rangka_akhir,-- done
        inv.b_nomor_mesin_status,-- done
        inv.b_nomor_mesin_awal,-- done
        inv.b_nomor_mesin_akhir,-- done
        inv.b_nomor_polisi_status,-- done
        inv.b_nomor_polisi_awal,-- done
        inv.b_nomor_polisi_akhir,-- done
        inv.b_nomor_bpkb_status,-- done
        inv.b_nomor_bpkb_awal,-- done
        inv.b_nomor_bpkb_akhir, -- done
        
        inv.file_nm, -- done
        inv.petugas, -- done
        
        inv.atribusi_biaya, -- done
        inv.atribusi_status, -- done
        inv.atribusi_kib_id, -- done
        inv.atribusi_nibar, -- done
        inv.atribusi_kode_lokasi, -- done
        inv.atribusi_kategori_id, -- done
        inv.atribusi_kategori_kd, -- done
        inv.atribusi_kategori_nm, -- done
        inv.atribusi_no_register, -- done
        inv.atribusi_nama, -- done
        
        inv.alamat_status, -- done
        inv.alamat_awal, -- done
        inv.alamat_akhir, -- done
        inv.alamat_kota, -- done
        inv.alamat_kecamatan, -- done
        inv.alamat_kelurahan,	-- done
        inv.alamat_jalan, -- done
        inv.alamat_no, -- done
        inv.alamat_rt, -- done
        inv.alamat_rw, -- done
        inv.alamat_kode_pos, -- done
        
        inv.kartu_inventaris_ruangan_status, -- done
        inv.kartu_inventaris_ruangan_awal, -- done
        inv.kartu_inventaris_ruangan_akhir, -- done
        inv.barcode_barang_status, -- done
        inv.barcode_ruangan_status, -- done
        inv.keberadaan_barang_status, -- done
        inv.keberadaan_barang_awal, -- done
        inv.keberadaan_barang_akhir, -- done
        inv.kondisi_status, -- done
        inv.kondisi_awal, -- done
        inv.kondisi_akhir, -- done
        inv.asal_usul_status, -- done
        inv.asal_usul_awal, -- done
        inv.asal_usul_akhir, -- done
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
        inv.tercatat_ganda_jumlah,
        inv.tercatat_ganda_satuan,
        inv.tercatat_ganda_perolehan,
        inv.tercatat_ganda_tgl_perolehan,
        inv.tercatat_ganda_kuasa_pengguna,
        inv.diatas_tanah_milik,
        inv.diatas_tanah_milik_pemda,	
        inv.diatas_tanah_milik_pempus,
        inv.diatas_tanah_milik_pdl,
        inv.diatas_tanah_milik_pl,	
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
      JOIN 
        aset.ruangs AS r ON p.b_kd_ruang = r.id
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

  fetchGedungBangunanById: (id) => {
    let query = `
      SELECT
        p.id as penetapan_id,
        p.kib_id as penetapan_kib_id,
        p.kategori_id as penetapan_kategori_id,
        p.thn_nilai as penetapan_thn_nilai, --done
        p.no_register as penetapan_no_register, --done
        p.cara_perolehan as perolehan, --done
        p.tgl_perolehan as penetapan_tgl_perolehan, --done
        p.th_beli as penetapan_th_beli, --done
        p.perolehan as nilai_perolehan, --done
        
        p.c_bertingkat_tidak, --done
        p.c_beton_tidak, --done
        p.c_luas_lantai, --done
        p.c_lokasi,
        p.c_dokumen_tanggal,
        p.c_dokumen_nomor,
        p.c_luas_bangunan, --done
        p.c_status_tanah, --done
        p.c_kode_tanah,
        
        p.harga as penetapan_harga, 
        p.asal_usul as penetapan_asal_usul, 
        p.keterangan AS penetapan_keterangan,
        p.kondisi as penetapan_kondisi, 
        p.jumlah as penetapan_jumlah, --done
        p.departemen_id as penetapan_departemen_id, 
        p.b_kd_ruang as id_ruang,

        k.kode AS kategori_kd, --done
        k.nama AS kategori_nm, --done

        d.kode AS departemen_kd, --done
        d.nama AS departemen_nm, --done

        inv.id AS inv_id,
        inv.tgl_inventaris, --done
        inv.no_register_status, --done
        inv.no_register_awal, --done
        inv.no_register_akhir, --done
        inv.kategori_status, --done
        inv.kategori_id_awal, --done
        inv.kategori_id_akhir, --done
        inv.nama_spesifikasi_status, --done
        inv.nama_spesifikasi_awal, --done
        inv.nama_spesifikasi_akhir, --done
        inv.jumlah_status, --done
        inv.jumlah_awal, --done
        inv.jumlah_akhir, --done
        inv.satuan, --done
        inv.cara_perolehan_status, --done
        inv.cara_perolehan_awal, --done
        inv.cara_perolehan_akhir, --done
        inv.perolehan_status, --done
        inv.perolehan_awal, --done
        inv.perolehan_akhir, --done
        
        inv.c_satuan_bangunan, --done
        inv.c_beton_tidak_status, --done
        inv.c_beton_tidak_awal, --done
        inv.c_beton_tidak_akhir, --done
        inv.c_bertingkat_tidak_status, --done
        inv.c_bertingkat_tidak_awal, --done
        inv.c_bertingkat_tidak_akhir, --done
        
        inv.file_nm, --done
        inv.petugas, --done
        
        inv.atribusi_biaya, --done
        inv.atribusi_status, --done
        inv.atribusi_kib_id, --done
        inv.atribusi_nibar, --done
        inv.atribusi_kode_lokasi, --done
        inv.atribusi_kategori_id, --done
        inv.atribusi_kategori_kd, --done
        inv.atribusi_kategori_nm, --done
        inv.atribusi_no_register, --done
        inv.atribusi_nama, --done
        
        inv.alamat_status, --done
        inv.alamat_awal, --done
        inv.alamat_akhir, --done
        inv.alamat_kota, --done
        inv.alamat_kecamatan, --done
        inv.alamat_kelurahan,	--done
        inv.alamat_jalan, --done
        inv.alamat_no, --done
        inv.alamat_rt, --done
        inv.alamat_rw, --done
        inv.alamat_kode_pos, --done
        
        inv.kartu_inventaris_ruangan_status, --done
        inv.kartu_inventaris_ruangan_awal, --done
        inv.kartu_inventaris_ruangan_akhir, --done
        inv.barcode_barang_status, --done
        inv.barcode_ruangan_status, --done
        inv.keberadaan_barang_status, --done
        inv.keberadaan_barang_awal, --done
        inv.keberadaan_barang_akhir, --done
        inv.kondisi_status, --done
        inv.kondisi_awal, --done
        inv.kondisi_akhir, --done
        inv.asal_usul_status, --done
        inv.asal_usul_awal, --done
        inv.asal_usul_akhir, --done
        inv.penggunaan_status, --done
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
        inv.tercatat_ganda_jumlah,
        inv.tercatat_ganda_satuan,
        inv.tercatat_ganda_perolehan,
        inv.tercatat_ganda_tgl_perolehan,
        inv.tercatat_ganda_kuasa_pengguna,
        inv.diatas_tanah_milik,
        inv.diatas_tanah_milik_pemda,	
        inv.diatas_tanah_milik_pempus,
        inv.diatas_tanah_milik_pdl,
        inv.diatas_tanah_milik_pl,	
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

  fetchJalanJaringanIrigasiById: (id) => {
    let query = `
      SELECT
        p.id as penetapan_id,
        p.kib_id as penetapan_kib_id,
        p.kategori_id as penetapan_kategori_id,
        p.thn_nilai as penetapan_thn_nilai, --done
        p.no_register as penetapan_no_register, --done
        p.cara_perolehan as perolehan, --done
        p.tgl_perolehan as penetapan_tgl_perolehan, --done
        p.th_beli as penetapan_th_beli, --done
        p.perolehan as nilai_perolehan, --done
        
        p.d_konstruksi,
        p.d_panjang,
        p.d_lebar,
        p.d_luas,
        p.d_lokasi,
        p.d_dokumen_tanggal,
        p.d_dokumen_nomor,
        p.d_kode_tanah,

        p.harga as penetapan_harga, 
        p.asal_usul as penetapan_asal_usul, 
        p.keterangan AS penetapan_keterangan,
        p.kondisi as penetapan_kondisi, 
        p.jumlah as penetapan_jumlah, --done
        p.departemen_id as penetapan_departemen_id, 
        p.b_kd_ruang as id_ruang,

        k.kode AS kategori_kd, --done
        k.nama AS kategori_nm, --done

        d.kode AS departemen_kd, --done
        d.nama AS departemen_nm, --done

        inv.id AS inv_id,
        inv.tgl_inventaris, --done
        inv.no_register_status, --done
        inv.no_register_awal, --done
        inv.no_register_akhir, --done
        inv.kategori_status, --done
        inv.kategori_id_awal, --done
        inv.kategori_id_akhir, --done
        inv.nama_spesifikasi_status, --done
        inv.nama_spesifikasi_awal, --done
        inv.nama_spesifikasi_akhir, --done
        inv.jumlah_status, --done
        inv.jumlah_awal, --done
        inv.jumlah_akhir, --done
        inv.satuan, --done
        inv.cara_perolehan_status, --done
        inv.cara_perolehan_awal, --done
        inv.cara_perolehan_akhir, --done
        inv.perolehan_status, --done
        inv.perolehan_awal, --done
        inv.perolehan_akhir, --done
        
        inv.d_jenis_perkerasan_jalan_status, --done
        inv.d_jenis_perkerasan_jalan_awal, --done
        inv.d_jenis_perkerasan_jalan_akhir, --done
        inv.d_jenis_bahan_struktur_jembatan_status, --done
        inv.d_jenis_bahan_struktur_jembatan_awal, --done
        inv.d_jenis_bahan_struktur_jembatan_akhir, --done
        inv.d_nomor_ruas_jalan_status, --done
        inv.d_nomor_ruas_jalan_awal, --done
        inv.d_nomor_ruas_jalan_akhir, --done
        inv.d_nomor_jaringan_irigasi_status, --done
        inv.d_nomor_jaringan_irigasi_awal, --done
        inv.d_nomor_jaringan_irigasi_akhir, --done
        inv.d_konstruksi_status, --done
        inv.d_konstruksi_awal, --done
        inv.d_konstruksi_akhir, --done
        inv.d_panjang_satuan, --done
        inv.d_lebar_satuan, --done
        inv.d_luas_satuan, --done
        inv.d_status_tanah, --done
        
        inv.file_nm, 
        inv.petugas, 
        
        inv.atribusi_biaya, 
        inv.atribusi_status, 
        inv.atribusi_kib_id, 
        inv.atribusi_nibar, 
        inv.atribusi_kode_lokasi, 
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
        inv.tercatat_ganda_jumlah,
        inv.tercatat_ganda_satuan,
        inv.tercatat_ganda_perolehan,
        inv.tercatat_ganda_tgl_perolehan,
        inv.tercatat_ganda_kuasa_pengguna,
        inv.diatas_tanah_milik,
        inv.diatas_tanah_milik_pemda,	
        inv.diatas_tanah_milik_pempus,
        inv.diatas_tanah_milik_pdl,
        inv.diatas_tanah_milik_pl,	
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

  fetchAsetTetapLainnyaById: (id) => {
    let query = `
      SELECT
        p.id as penetapan_id,
        p.kib_id as penetapan_kib_id,
        p.kategori_id as penetapan_kategori_id,
        p.thn_nilai as penetapan_thn_nilai, --done
        p.no_register as penetapan_no_register, --done
        p.cara_perolehan as perolehan, --done
        p.tgl_perolehan as penetapan_tgl_perolehan, --done
        p.th_beli as penetapan_th_beli, --done
        p.perolehan as nilai_perolehan, --done
        
        p.e_judul as judul_barang, --done
        p.e_spek as merk_tipe_spek, --done
        p.e_pencipta as pencipta_barang, --done
        p.e_jenis as jenis_barang, --done
        p.e_bahan as bahan_barang, --done
        p.e_ukuran as ukuran_barang, --done

        p.harga as penetapan_harga, 
        p.asal_usul as penetapan_asal_usul, 
        p.keterangan AS penetapan_keterangan,
        p.kondisi as penetapan_kondisi, 
        p.jumlah as penetapan_jumlah, --done
        p.departemen_id as penetapan_departemen_id, 
        p.b_kd_ruang as id_ruang,

        k.kode AS kategori_kd, --done
        k.nama AS kategori_nm, --done

        d.kode AS departemen_kd, --done
        d.nama AS departemen_nm, --done

        inv.id AS inv_id,
        inv.tgl_inventaris, --done
        inv.no_register_status, --done
        inv.no_register_awal, --done
        inv.no_register_akhir, --done
        inv.kategori_status, --done
        inv.kategori_id_awal, --done
        inv.kategori_id_akhir, --done
        inv.nama_spesifikasi_status, --done
        inv.nama_spesifikasi_awal, --done
        inv.nama_spesifikasi_akhir, --done
        inv.jumlah_status, --done
        inv.jumlah_awal, --done
        inv.jumlah_akhir, --done
        inv.satuan, --done
        inv.cara_perolehan_status, --done
        inv.cara_perolehan_awal, --done
        inv.cara_perolehan_akhir, --done
        inv.perolehan_status, --done
        inv.perolehan_awal, --done
        inv.perolehan_akhir, --done
        
        inv.b_merk_status, --done
        inv.b_merk_awal, --done
        inv.b_merk_akhir, --done
        inv.b_type_status, --done
        inv.b_type_awal, --done
        inv.b_type_akhir, --done
        
        inv.file_nm, 
        inv.petugas, 
        
        inv.atribusi_biaya, 
        inv.atribusi_status, 
        inv.atribusi_kib_id, 
        inv.atribusi_nibar, 
        inv.atribusi_kode_lokasi, 
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
        inv.tercatat_ganda_jumlah,
        inv.tercatat_ganda_satuan,
        inv.tercatat_ganda_perolehan,
        inv.tercatat_ganda_tgl_perolehan,
        inv.tercatat_ganda_kuasa_pengguna,
        inv.diatas_tanah_milik,
        inv.diatas_tanah_milik_pemda,	
        inv.diatas_tanah_milik_pempus,
        inv.diatas_tanah_milik_pdl,
        inv.diatas_tanah_milik_pl,	
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

  fetchAsetLainLainById: (id) => {
    let query = `
      SELECT
        p.id as penetapan_id,
        p.kib_id as penetapan_kib_id,
        p.kategori_id as penetapan_kategori_id,
        p.thn_nilai as penetapan_thn_nilai, --done
        p.no_register as penetapan_no_register, --done
        p.cara_perolehan as perolehan, --done
        p.tgl_perolehan as penetapan_tgl_perolehan, --done
        p.th_beli as penetapan_th_beli, --done
        p.perolehan as nilai_perolehan, --done
        
        p.b_merk,
        p.b_type,

        p.harga as penetapan_harga, 
        p.asal_usul as penetapan_asal_usul, 
        p.keterangan AS penetapan_keterangan,
        p.kondisi as penetapan_kondisi, 
        p.jumlah as penetapan_jumlah, --done
        p.departemen_id as penetapan_departemen_id, 
        p.b_kd_ruang as id_ruang,

        k.kode AS kategori_kd, --done
        k.nama AS kategori_nm, --done

        d.kode AS departemen_kd, --done
        d.nama AS departemen_nm, --done

        inv.id AS inv_id,
        inv.tgl_inventaris, --done
        inv.no_register_status, --done
        inv.no_register_awal, --done
        inv.no_register_akhir, --done
        inv.kategori_status, --done
        inv.kategori_id_awal, --done
        inv.kategori_id_akhir, --done
        inv.nama_spesifikasi_status, --done
        inv.nama_spesifikasi_awal, --done
        inv.nama_spesifikasi_akhir, --done
        inv.jumlah_status, --done
        inv.jumlah_awal, --done
        inv.jumlah_akhir, --done
        inv.satuan, --done
        inv.cara_perolehan_status, --done
        inv.cara_perolehan_awal, --done
        inv.cara_perolehan_akhir, --done
        inv.perolehan_status, --done
        inv.perolehan_awal, --done
        inv.perolehan_akhir, --done
        
        inv.b_merk_status, --done
        inv.b_merk_awal, --done
        inv.b_merk_akhir, --done
        inv.b_type_status, --done
        inv.b_type_awal, --done
        inv.b_type_akhir, --done
        
        inv.file_nm, 
        inv.petugas, 
        
        inv.atribusi_biaya, 
        inv.atribusi_status, 
        inv.atribusi_kib_id, 
        inv.atribusi_nibar, 
        inv.atribusi_kode_lokasi, 
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
        inv.tercatat_ganda_jumlah,
        inv.tercatat_ganda_satuan,
        inv.tercatat_ganda_perolehan,
        inv.tercatat_ganda_tgl_perolehan,
        inv.tercatat_ganda_kuasa_pengguna,
        inv.diatas_tanah_milik,
        inv.diatas_tanah_milik_pemda,	
        inv.diatas_tanah_milik_pempus,
        inv.diatas_tanah_milik_pdl,
        inv.diatas_tanah_milik_pl,	
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
      inv.id AS id_inv,
      d.kode AS departement_kd,
      d.nama AS departement_nm,
      k.kode AS kategori_kd,
      p.no_register,
      k.nama AS kategori_nm,
      p.tgl_perolehan,
      p.th_beli,
      p.a_luas_m2,
      p.a_alamat,
      p.a_penggunaan,
      p.a_hak_tanah,
      p.a_sertifikat_tanggal,
      p.a_sertifikat_nomor,
      p.asal_usul,
      p.keterangan,
      p.harga,
      p.kondisi,
      inv.tgl_inventaris,
      inv.keberadaan_barang_awal as keberadaan_fisik,
      inv.penggunaan_status,
      inv.kondisi_akhir,
      p.file_nm,
      inv.file_nm as inv_file_nm,
      CASE WHEN inv.id IS NULL THEN 0 ELSE 1 END AS is_inventaris,

      p.kategori_id,
      k.status,
      d.id AS departement_id,
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
    } AND k.kode LIKE '%1.3.1%' AND p.kondisi = 'B'
    ORDER BY p.id ASC
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
    tahun = 2024
  ) => {
    const offset = (page - 1) * perPage;
    let query = `
      SELECT 
        p.id,
        p.id as penetapan_id,
        p.kib_id,

        inv.id AS id_inv,
        d.kode AS departement_kd,
        d.nama AS departement_nm,
        k.kode AS kategori_kd,
        p.no_register,
        k.nama AS kategori_nm,
        p.tgl_perolehan,
        p.th_beli,
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
        p.harga,
        p.kondisi,
        r.nama as ruang,
        inv.tgl_inventaris,
        inv.keberadaan_barang_awal as keberadaan_fisik,
        inv.penggunaan_status,
        inv.kondisi_akhir,
        p.file_nm,
        inv.file_nm as inv_file_nm,
        CASE WHEN inv.id IS NULL THEN 0 ELSE 1 END AS is_inventaris,


        k.status,
        p.kategori_id,
        inv.no_register_akhir,
        p.b_kd_ruang as ruangan_id,
        
        d.id AS departement_id,
        
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
        aset.ruangs AS r ON p.b_kd_ruang = r.id
      JOIN
        departemen AS d ON p.departemen_id = d.id
      LEFT JOIN
        aset.inventaris_kib AS inv ON inv.penetapan_id = p.id
      WHERE 
        d.kode = '${idDepartemen}' AND p.thn_nilai = ${
      tahun - 1
    } AND k.kode LIKE '%1.3.2%' AND p.kondisi = 'B' 
    ORDER BY p.id ASC
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
    tahun = 2024
  ) => {
    const offset = (page - 1) * perPage;

    let query = `
      SELECT 
        p.id,
        p.id as penetapan_id,
        p.kib_id,
        inv.id AS id_inv,
        d.kode AS departement_kd,
        d.nama AS departement_nm,
        k.kode AS kategori_kd,
        p.no_register,
        p.kategori_id,
        k.nama AS kategori_nm,
        p.tgl_perolehan,
        p.th_beli,
        p.c_bertingkat_tidak,
        p.c_beton_tidak,
        p.c_luas_lantai,
        p.c_lokasi,
        p.c_dokumen_tanggal,
        p.c_dokumen_nomor,
        p.c_luas_bangunan,
        p.c_status_tanah,
        p.c_kode_tanah,
        p.asal_usul,
        p.keterangan, 
        p.harga,
        p.kondisi,
        inv.tgl_inventaris,
        inv.keberadaan_barang_awal as keberadaan_fisik,
        inv.penggunaan_status,
        inv.kondisi_akhir,
        p.file_nm,
        inv.file_nm as inv_file_nm,
        CASE WHEN inv.id IS NULL THEN 0 ELSE 1 END AS is_inventaris,
        inv.no_register_akhir,
        k.status,
        d.id AS departement_id,
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
    } AND k.kode LIKE '%1.3.3%' AND p.kondisi = 'B' 
    ORDER BY p.id ASC
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
    tahun = 2024
  ) => {
    const offset = (page - 1) * perPage;

    let query = `
      SELECT 
        p.id,
        p.id as penetapan_id,
        p.kib_id,
        inv.id as id_inv,
        d.kode AS departement_kd,
        d.nama AS departement_nm,
        p.kategori_id,
        k.kode AS kategori_kd,
        p.no_register,
        k.nama AS kategori_nm,
        p.tgl_perolehan,
        p.th_beli,
        
        p.d_konstruksi,
        p.d_panjang,
        p.d_lebar,
        p.d_luas,
        p.d_lokasi,
        p.d_dokumen_tanggal,
        p.d_dokumen_nomor,
        p.d_kode_tanah,
        
        p.asal_usul,
        p.keterangan,
        p.harga,
        p.kondisi,
        inv.tgl_inventaris,
        inv.keberadaan_barang_awal as keberadaan_fisik,
        inv.penggunaan_status,
        inv.kondisi_akhir,
        p.file_nm,
        inv.file_nm as inv_file_nm,
        CASE WHEN inv.id IS NULL THEN 0 ELSE 1 END AS is_inventaris,
        
        inv.no_register_akhir,
        k.status,
        d.id AS departement_id,
        p.b_kd_ruang as ruangan_id,
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
    } AND k.kode LIKE '%1.3.4%' AND p.kondisi = 'B' 
    ORDER BY p.id ASC
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
    tahun = 2024
  ) => {
    const offset = (page - 1) * perPage;

    let query = `
      SELECT 
        p.id,
        p.id as penetapan_id,
        p.kib_id,
        inv.id as id_inv,
        d.kode AS departement_kd,
        d.nama AS departement_nm,
        p.kategori_id,
        k.kode AS kategori_kd,
        p.no_register,
        k.nama AS kategori_nm,
        p.tgl_perolehan,
        p.th_beli,
        p.e_judul,
        p.e_spek,
        p.e_asal,
        p.e_pencipta,
        p.e_jenis,
        p.e_ukuran,
        p.asal_usul,
        p.keterangan,
        p.harga,
        p.kondisi,
        inv.tgl_inventaris,
        inv.keberadaan_barang_awal as keberadaan_fisik,
        inv.penggunaan_status,
        inv.kondisi_akhir,
        p.file_nm,
        inv.file_nm as inv_file_nm,
        CASE WHEN inv.id IS NULL THEN 0 ELSE 1 END AS is_inventaris,
        
        inv.no_register_akhir,
        k.status,
        d.id AS departement_id,
        p.b_kd_ruang as ruangan_id,
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
    } AND k.kode LIKE '%1.3.5%' AND p.kondisi = 'B' 
    ORDER BY p.id ASC
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

  fetchAsetLainLainByDepartemen: (
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
        inv.id as id_inv,
        d.kode AS departement_kd,
        d.nama AS departement_nm,
        p.kategori_id,
        k.kode AS kategori_kd,
        p.no_register,
        k.nama AS kategori_nm,
        p.tgl_perolehan,
        p.th_beli,
        
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
        p.harga,
        p.kondisi,
        inv.tgl_inventaris,
        inv.keberadaan_barang_awal as keberadaan_fisik,
        inv.penggunaan_status,
        inv.kondisi_akhir,
        p.file_nm,
        inv.file_nm as inv_file_nm,
        CASE WHEN inv.id IS NULL THEN 0 ELSE 1 END AS is_inventaris,
        
        inv.no_register_akhir,
        k.status,
        d.id AS departement_id,
        p.b_kd_ruang as ruangan_id,
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
    } AND k.kode LIKE '%1.5.3%' AND p.kondisi = 'B' 
      ORDER BY p.id ASC
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
  countTotalPage: (kategori, idDepartemen, perPage = 10, tahun = 2024) => {
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
    } AND k.kode LIKE '%${kategori}%' AND p.kondisi = 'B'
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
