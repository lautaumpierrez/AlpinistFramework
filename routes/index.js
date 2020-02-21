import jwt from 'express-jwt';



function initialize(app){
  // Here we create the routers with namespace or path /pines, /users, etc
  app.use('/users', require('./Users').default);
}

export default initialize;
