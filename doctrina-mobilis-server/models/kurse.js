const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Kurs = sequelize.define('Kurs', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  kursname: {
    type: DataTypes.STRING(255),
    allowNull: false
  }
}, {
  tableName: 'kurse',
  timestamps: false
});

module.exports = Kurs;
