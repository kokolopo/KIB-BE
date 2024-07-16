import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _departemen from  "./departemen.js";
import _inventaris_kib from  "./inventaris_kib.js";
import _jabatan from  "./jabatan.js";
import _kategoris from  "./kategoris.js";
import _kecamatan from  "./kecamatan.js";
import _kelurahan from  "./kelurahan.js";
import _kib_inventaris from  "./kib_inventaris.js";
import _partner from  "./partner.js";
import _partner_departemen from  "./partner_departemen.js";
import _penetapan from  "./penetapan.js";
import _ruangs from  "./ruangs.js";
import _satuan from  "./satuan.js";

export default function initModels(sequelize) {
  const departemen = _departemen.init(sequelize, DataTypes);
  const inventaris_kib = _inventaris_kib.init(sequelize, DataTypes);
  const jabatan = _jabatan.init(sequelize, DataTypes);
  const kategoris = _kategoris.init(sequelize, DataTypes);
  const kecamatan = _kecamatan.init(sequelize, DataTypes);
  const kelurahan = _kelurahan.init(sequelize, DataTypes);
  const kib_inventaris = _kib_inventaris.init(sequelize, DataTypes);
  const partner = _partner.init(sequelize, DataTypes);
  const partner_departemen = _partner_departemen.init(sequelize, DataTypes);
  const penetapan = _penetapan.init(sequelize, DataTypes);
  const ruangs = _ruangs.init(sequelize, DataTypes);
  const satuan = _satuan.init(sequelize, DataTypes);


  return {
    departemen,
    inventaris_kib,
    jabatan,
    kategoris,
    kecamatan,
    kelurahan,
    kib_inventaris,
    partner,
    partner_departemen,
    penetapan,
    ruangs,
    satuan,
  };
}
