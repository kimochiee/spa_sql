module.exports = (sequelize, DataTypes) => {
  const Score = sequelize.define('Score', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    maMonHoc: {
      type: DataTypes.STRING,
      allowNull: false
    },
    maSinhVien: {
      type: DataTypes.STRING,
      allowNull: false
    },
    diem: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  })

  return Score
}
