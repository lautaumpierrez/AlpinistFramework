import {Schema, model} from 'mongoose';

class UserClass{}

const userSchema = new Schema({
  name: String,
  surname: String,
  password: String,
  avatar: String,
  email:  String,
});
userSchema.loadClass(UserClass);
const UserModel = model('User',userSchema);



export default {id: 'UserModel', model: UserModel};
