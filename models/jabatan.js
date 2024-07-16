import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class jabatan extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
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
    kode: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    nama: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    jenis: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    nama_lain: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    nama_pendek: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    eselon_id: {
      type: DataTypes.SMALLINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'jabatan',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_jabatan",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
