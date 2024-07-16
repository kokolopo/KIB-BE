import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class kib_inventaris extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    kode: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    created: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    create_uid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    update_uid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nama: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    kib_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kategori_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    departemen_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tgl_inventaris: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    no_register_awal: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    no_register_akhir: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    no_register_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kategori_id_awal: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kategori_id_akhir: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kategori_id_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    keberadaan_fisik: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    a_alamat_awal: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    a_alamat_akhir: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    a_alamat_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    b_merk_awal: {
      type: DataTypes.STRING(4225),
      allowNull: true
    },
    b_merk_akhir: {
      type: DataTypes.STRING(4225),
      allowNull: true
    },
    b_merk_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    b_nomor_polisi_awal: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    b_nomor_polisi_akhir: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    b_nomor_polisi_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    b_nomor_rangka_awal: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    b_nomor_rangka_akhir: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    b_nomor_rangka_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    b_nomor_bpkb_awal: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    b_nomor_bpkb_akhir: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    b_nomor_bpkb_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    c_status_tanah_awal: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    c_status_tanah_akhir: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    c_status_tanah_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    c_lokasi_awal: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    c_lokasi_akhir: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    c_lokasi_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    d_status_tanah_awal: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    d_status_tanah_akhir: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    d_status_tanah_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    d_konstruksi_awal: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    d_konstruksi_akhir: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    d_konstruksi_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    d_lokasi_awal: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    d_lokasi_akhir: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    d_lokasi_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    e_judul_awal: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    e_judul_akhir: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    e_judul_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    e_spek_awal: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    e_spek_akhir: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    e_spek_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kondisi_awal: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    kondisi_akhir: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    kondisi_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pemilik_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tercatat_ganda: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lat: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    long: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    lainnya: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    keterangan: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    file_nm: {
      type: DataTypes.JSON,
      allowNull: true
    },
    perolehan_awal: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    perolehan_akhir: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    perolehan_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    penggunaan_awal: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    penggunaan_akhir: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    penggunaan_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    petugas_1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    petugas_2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    petugas: {
      type: DataTypes.JSON,
      allowNull: true
    },
    penetapan_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nama_spesifikasi_awal: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    nama_spesifikasi_akhir: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    nama_spesifikasi_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pemilik_nama: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pemilik_pemda: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pemilik_pl: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    keberadaan_barang_awal: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    keberadaan_barang_akhir: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cara_perolehan: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tgl_perolehan: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tahun_perolehan: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kartu_inv_awal: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    kartu_inv_akhir: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    kartu_inv_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    barcode_barang: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    barcode_ruangan: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    asal_usul_awal: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    asal_usul_akhir: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    asal_usul_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    jumlah: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    a_hak_tanah_awal: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    a_hak_tanah_akhir: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    a_hak_tanah_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    a_sertifikat_tanggal_awal: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    a_sertifikat_tanggal_akhir: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    a_sertifikat_tanggal_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    a_sertifikat_nomor_awal: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    a_sertifikat_nomor_akhir: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    a_sertifikat_nomor_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    b_cc_awal: {
      type: DataTypes.STRING(4225),
      allowNull: true
    },
    b_cc_akhir: {
      type: DataTypes.STRING(4225),
      allowNull: true
    },
    b_cc_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    b_nomor_mesin_awal: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    b_nomor_mesin_akhir: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    b_nomor_mesin_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    c_luas_bangunan: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    c_satuan_bangunan: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    c_bertingkat: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    c_beton: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    c_luas_tanah: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    d_jenis_pengkerasan_jln_awal: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    d_jenis_pengkerasan_jln_akhir: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    d_jenis_pengkerasan_jln_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    d_jenis_bahan_jembatan_awal: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    d_jenis_bahan_jembatan_akhir: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    d_jenis_bahan_jembatan_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    d_nomor_ruas_jln_awal: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    d_nomor_ruas_jln_akhir: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    d_nomor_ruas_jln_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    d_nomor_jaringan_irigasi_awal: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    d_nomor_jaringan_irigasi_akhir: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    d_nomor_jaringan_irigasi_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    d_panjang_awal: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    d_panjang_akhir: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    d_panjang_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    d_panjang_satuan: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    d_lebar_awal: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    d_lebar_akhir: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    d_lebar_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    d_lebar_satuan: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    d_luas_awal: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    d_luas_akhir: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    d_luas_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    d_luas_satuan: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    d_luas_tanah: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    d_status_tanah: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    e_jenis_awal: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    e_jenis_akhir: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    e_jenis_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    e_bahan_awal: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    e_bahan_akhir: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    e_bahan_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    e_pencipta_awal: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    e_pencipta_akhir: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    e_pencipta_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    e_ukuran_awal: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    e_ukuran_akhir: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    e_ukuran_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tercatat_ganda_nibar: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tercatat_ganda_no_register: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tercatat_ganda_kode_barang: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tercatat_ganda_nama_barang: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tercatat_ganda_spesifikasi_barang: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    tercatat_ganda_luas: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tercatat_ganda_satuan: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tercatat_ganda_perolehan: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tercatat_ganda_tanggal_perolehan: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tercatat_ganda_kuasa_pengguna: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    belum_tercatat_kuasa_pengguna_barang: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    belum_tercatat_pengguna_barang: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    belum_tercatat_pengelola_barang: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    belum_tercatat_tanggal_inventarisasi: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    belum_tercatat_kode_barang: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    belum_tercatat_nama_barang: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    belum_tercatat_spesifikasi_barang: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    belum_tercatat_no_register: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    belum_tercatat_tanggal_perolehan: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    belum_tercatat_tahun_perolehan: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    belum_tercatat_cara_perolehan: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    belum_tercatat_merek_tipe: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    belum_tercatat_nomor_polisi: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    belum_tercatat_nomor_rangka: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    belum_tercatat_nomor_mesin: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    belum_tercatat_nomor_bpkb: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    belum_tercatat_nomor_stnk: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    belum_tercatat_bahan: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    belum_tercatat_warna: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    belum_tercatat_ukuran_cc: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    belum_tercatat_ruang: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    belum_tercatat_jumlah: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    belum_tercatat_satuan: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    belum_tercatat_harga_satuan: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    belum_tercatat_nilai_perolehan: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    belum_tercatat_alamat: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    belum_tercatat_dasar_pencatatan: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    belum_tercatat_kondisi_barang: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    belum_tercatat_lainnya: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    penggunaan_pemda_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    penggunaan_pemda_akhir: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    penggunaan_pemda_nama_pemakai: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    penggunaan_pemda_nama_pemakai_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    penggunaan_pemda_status_pemakai: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    penggunaan_pemda_bast_pemakaian: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    penggunaan_pemda_sip: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    penggunaan_pempus_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    penggunaan_pempus_yt: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    penggunaan_pempus_y_nm: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    penggunaan_pempus_y_doc: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    penggunaan_pempus_t_nm: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    penggunaan_pdl_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    penggunaan_pdl_yt: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    penggunaan_pdl_y_nm: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    penggunaan_pdl_y_doc: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    penggunaan_pdl_t_nm: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    penggunaan_pl_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    penggunaan_pl_yt: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    penggunaan_pl_y_nm: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    penggunaan_pl_y_doc: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    penggunaan_pl_t_nm: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    atribusi_biaya: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    atribusi_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    atribusi_nibar: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    atribusi_kode_barang: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    atribusi_kode_lokasi: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    atribusi_no_register: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    atribusi_nama_barang: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    atribusi_spesifikasi_barang: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    atribusi_nibar_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    atribusi_kode_barang_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    atribusi_kode_lokasi_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    atribusi_no_register_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    atribusi_nama_barang_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    atribusi_spesifikasi_barang_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    keberadaan_barang_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    barcode_barang_akhir: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    barcode_ruangan_akhir: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    alamat_kota: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    alamat_kecamatan: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    alamat_kelurahan: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    alamat_jalan: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    alamat_no: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    alamat_rt: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    alamat_rw: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    alamat_kodepos: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    cara_perolehan_awal: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cara_perolehan_akhir: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cara_perolehan_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    jumlah_awal: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    jumlah_akhir: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    jumlah_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    a_luas_m2_awal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    a_luas_m2_akhir: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    a_luas_m2_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    c_luas_tanah_awal: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    c_luas_tanah_akhir: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    c_luas_tanah_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    c_satuan_tanah: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    c_luas_bangunan_awal: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    c_luas_bangunan_akhir: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    c_luas_bangunan_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    penggunaan_pemda_nama_pemakai_akhir: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    satuan: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    b_bahan_awal: {
      type: DataTypes.STRING(4225),
      allowNull: true
    },
    b_bahan_akhir: {
      type: DataTypes.STRING(4225),
      allowNull: true
    },
    b_bahan_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    b_nomor_pabrik_awal: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    b_nomor_pabrik_akhir: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    b_nomor_pabrik_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    penggunaan_pemda_imb: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tahun: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'kib_inventaris',
    schema: 'aset',
    timestamps: false,
    indexes: [
      {
        name: "idx_departemen_penetapan_kibs_tahun",
        fields: [
          { name: "departemen_id" },
          { name: "penetapan_id" },
          { name: "kib_id" },
          { name: "tahun" },
        ]
      },
      {
        name: "idx_departemen_penetapan_kibs_tgl_inventaris",
        fields: [
          { name: "departemen_id" },
          { name: "penetapan_id" },
          { name: "kib_id" },
          { name: "tgl_inventaris" },
        ]
      },
      {
        name: "kib_inventaris_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "kib_inventaris_tahun_penetapan_id_kib_id_key",
        unique: true,
        fields: [
          { name: "tahun" },
          { name: "departemen_id" },
          { name: "penetapan_id" },
          { name: "kib_id" },
        ]
      },
    ]
  });
  }
}
