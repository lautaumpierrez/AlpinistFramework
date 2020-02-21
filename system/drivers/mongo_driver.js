import mongoose from 'mongoose';

class Connection {
  static createConnection({DB_USER,DB_PASSWORD,DB_HOST,DB_PORT,DB_NAME}){
    mongoose.connect(`mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    return mongoose.connection;
  }
}
export default Connection;
