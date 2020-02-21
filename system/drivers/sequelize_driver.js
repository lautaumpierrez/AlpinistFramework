import {Sequelize} from 'sequelize';

class Connection{
  static createConnection({DB_USER,DB_PASSWORD,DB_HOST,DB_PORT,DB_NAME,DB_DIALECT}){
    return new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
      host: DB_HOST,
      dialect: DB_DIALECT,
      logging: process.env.DB_LOGS !== 'true' ? false : true,
    });
  }
}
export default Connection;
