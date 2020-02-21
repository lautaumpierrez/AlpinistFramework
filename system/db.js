class Database {
  connection = undefined;
  constructor(){
    let dialect = process.env.DB_DIALECT;
    if(dialect == 'mongodb'){
        const mongodb = require('./drivers/mongo_driver').default;
        this.connection = mongodb.createConnection(process.env);
    }else{
      const sequelize_driver = require('./drivers/sequelize_driver').default;
      this.connection = sequelize_driver.createConnection(process.env);
    }
  }
}

export default Database;
