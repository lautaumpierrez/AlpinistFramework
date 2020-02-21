import Controller from '../../system/AlpinistController';
class UsersController extends Controller {
  constructor(){
    super();
    this.loadModel('UserModel'); // to import models use this function
    // loadModel can be used with <String> parameter or <Array> to import
    // many Models
    this.getUsers = this.getUsers.bind(this);
    this.createUser = this.createUser.bind(this);
  }
  getUsers(req,res){
    this.models.UserModel.findAll().then(users=>{
      res.json({
        users
      })
    });
  }
  createUser(req,res){
    let user = new this.models.UserModel({
      name: 'Lauti',
      surname: 'Umpierrez',
      email: 'lauta.guillermo@gmail.com',
      avatar: '1.png',
      password: '123456'
    });
    user.save();
    res.json({user});
  }
}
export default UsersController;
