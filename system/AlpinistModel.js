import {Model as Sq_Model, DataTypes} from 'sequelize';
import Connection from './db';

// it model is only to sequelize  
class Model extends Sq_Model{
  static connection = new Connection().connection;
}



export {Model, DataTypes};
