class Controller{
  models = {};
  loadModel(modelPath){
    if(Array.isArray(modelPath) && modelPath.length > 0){
      modelPath.forEach((modelI, index)=>{
        let modelData = require(`../models/${modelI}`).default;
        this.addModel(modelData);
      });
    }else if(typeof modelPath == 'string'){
      let modelData = require(`../models/${modelPath}`).default;
      this.addModel(modelData);
    }else{
      throw new Error('The only allowed data types of param are <Array> or <String>');
    }
  }

  addModel({id, model}){
    this.models = {
      ...this.models,
      [id]: model
    }
  }

  //

}
export default Controller;
