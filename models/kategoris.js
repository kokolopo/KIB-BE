import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class kategoris extends Model {
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
    status: {
      type: DataTypes.SMALLINT,
      allowNull: false
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
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    child_count: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    susut_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    susut_kd: {
      type: DataTypes.STRING(32),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'kategoris',
    schema: 'aset',
    timestamps: false,
    indexes: [
      {
        name: "idx_kode",
        fields: [
          { name: "id" },
          { name: "kode" },
        ]
      },
      {
        name: "kategori_kode_idx",
        fields: [
          { name: "kode" },
        ]
      },
      {
        name: "kategoris_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "trgm_kat_kode_idx",
        fields: [
          { name: "kode" },
        ]
      },
    ]
  });
  }
}
