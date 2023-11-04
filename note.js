const data = {
  uraian: bodyRequest.uraian || penetapan.uraian,
  tahun: bodyRequest.tahun || penetapan.tahun,
  no_register: bodyRequest.no_register || penetapan.no_register,
  tgl_perolehan: bodyRequest.tgl_perolehan || penetapan.tgl_perolehan,
  cara_perolehan: bodyRequest.cara_perolehan || penetapan.cara_perolehan,
  th_beli: bodyRequest.th_beli || penetapan.th_beli,
  asal_usul: bodyRequest.asal_usul || penetapan.asal_usul,
  harga: bodyRequest.harga || penetapan.harga,
  jumlah: bodyRequest.jumlah || penetapan.jumlah,
  satuan: bodyRequest.satuan || penetapan.satuan,
  kondisi: bodyRequest.kondisi || penetapan.kondisi,
  masa_manfaat: bodyRequest.masa_manfaat || penetapan.masa_manfaat,
  nilai_sisa: bodyRequest.nilai_sisa || penetapan.nilai_sisa,
  masa_sisa: bodyRequest.masa_sisa || penetapan.tahun,
  penyusutan: bodyRequest.penyusutan || penetapan.penyusutan,
  akumulasi: bodyRequest.akumulasi || penetapan.akumulasi,
  thn_nilai: bodyRequest.thn_nilai || penetapan.thn_nilai,
  no_sp2d: bodyRequest.no_sp2d || penetapan.tahun,
  no_id: bodyRequest.no_id || penetapan.no_id,
  kib: bodyRequest.kib || penetapan.kib,
  keterangan: bodyRequest.keterangan || penetapan.keterangan,
  lat: bodyRequest.lat || penetapan.lat,
  long: bodyRequest.long || penetapan.long,
  a_rtrw: bodyRequest.a_rtrw || penetapan.a_rtrw,
  a_nop: bodyRequest.a_nop || penetapan.a_nop,
  a_luas_m2: bodyRequest.a_luas_m2 || penetapan.a_luas_m2,
  a_alamat: bodyRequest.a_alamat || penetapan.a_alamat,
  a_hak_tanah: bodyRequest.a_hak_tanah || penetapan.a_hak_tanah,
  a_sertifikat_tanggal:
    bodyRequest.a_sertifikat_tanggal || penetapan.a_sertifikat_tanggal,
  a_sertifikat_nomor:
    bodyRequest.a_sertifikat_nomor || penetapan.a_sertifikat_nomor,
  a_penggunaan: bodyRequest.a_penggunaan || penetapan.a_penggunaan,
  a_kelurahan_id: bodyRequest.a_kelurahan_id || penetapan.a_kelurahan_id,
  a_kecamatan_id: bodyRequest.a_kecamatan_id || penetapan.a_kecamatan_id,
  a_batas_utara: bodyRequest.a_batas_utara || penetapan.a_batas_utara,
  a_batas_selatan: bodyRequest.a_batas_selatan || penetapan.a_batas_selatan,
  a_batas_barat: bodyRequest.a_batas_barat || penetapan.a_batas_barat,
  a_batas_timur: bodyRequest.a_batas_timur || penetapan.a_batas_timur,
  a_ukur_tgl: bodyRequest.a_ukur_tgl || penetapan.a_ukur_tgl,
  a_ukur_ba: bodyRequest.a_ukur_ba || penetapan.a_ukur_ba,
  a_ukur_hasil: bodyRequest.a_ukur_hasil || penetapan.a_ukur_hasil,
  a_ukur_notes: bodyRequest.a_ukur_notes || penetapan.a_ukur_notes,
  a_fisik_jenis: bodyRequest.a_fisik_jenis || penetapan.a_fisik_jenis,
  a_fisik_tgl: bodyRequest.a_fisik_tgl || penetapan.a_fisik_tgl,
  a_dok_jenis: bodyRequest.a_dok_jenis || penetapan.a_dok_jenis,
  a_dok_no: bodyRequest.a_dok_no || penetapan.a_dok_no,
  a_dok_tgl: bodyRequest.a_dok_tgl || penetapan.a_dok_tgl,
  a_dok_notes: bodyRequest.a_dok_notes || penetapan.a_dok_notes,
  a_dok_simpan: bodyRequest.a_dok_simpan || penetapan.a_dok_simpan,
  a_tata_ruang: bodyRequest.a_tata_ruang || penetapan.a_tata_ruang,
  a_manfaat: bodyRequest.a_manfaat || penetapan.a_manfaat,
  a_manfaat_alamat: bodyRequest.a_manfaat_alamat || penetapan.a_manfaat_alamat,
  a_manfaat_sk_no: bodyRequest.a_manfaat_sk_no || penetapan.a_manfaat_sk_no,
  a_manfaat_sk_tgl: bodyRequest.a_manfaat_sk_tgl || penetapan.a_manfaat_sk_tgl,
  a_manfaat_mulai: bodyRequest.a_manfaat_mulai || penetapan.a_manfaat_mulai,
  a_manfaat_selesai:
    bodyRequest.a_manfaat_selesai || penetapan.a_manfaat_selesai,
  b_merk: bodyRequest.b_merk || penetapan.b_merk,
  b_type: bodyRequest.b_type || penetapan.b_type,
  b_cc: bodyRequest.b_cc || penetapan.b_cc,
  b_bahan: bodyRequest.b_bahan || penetapan.b_bahan,
};

console.log(data);
