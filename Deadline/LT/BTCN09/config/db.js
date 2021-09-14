const { Sequelize } = require('sequelize');
module.exports = new Sequelize(
  process.env.DATABASE_URL || 'postgres://postgres:@localhost:5432/btcn09',
  {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
      useUTC: false,
    },
    timezone: '+07:00',
  }
);
