import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class kecamatan extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
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
    kode: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    nama: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'kecamatan',
    schema: 'aset_manfaat',
    timestamps: false,
    indexes: [
      {
        name: "kecamatan_kode_uq",
        unique: true,
        fields: [
          { name: "kode" },
        ]
      },
      {
        name: "pk_kecamatan",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
