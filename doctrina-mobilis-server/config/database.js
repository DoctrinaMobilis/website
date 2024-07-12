const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('doctrina-mobilis_db', 'db_admin_doctrina', 'Frauke_1007', {
  host: '127.0.0.1',
  dialect: 'mysql',
  port: 3306,
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
