import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('node_postgres', 'postgres', 'root', {
  logging: false,
  host: 'localhost',
  dialect: 'postgres',
  port: 5432
});

export default sequelize;
