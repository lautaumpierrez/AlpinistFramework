import {DataTypes, Model} from '../system/AlpinistModel';
class UserModel extends Model{}

UserModel.init({
  name: DataTypes.STRING,
  surname: DataTypes.STRING,
  avatar: DataTypes.TEXT,
  email: DataTypes.STRING,
}, {sequelize: Model.connection,  modelName: 'users'});

export default {id: 'UserModel', model: UserModel};
