// Initialize Configuration
import dotenv from 'dotenv';
dotenv.config();
import initializeRoutes from  './routes/';
import express from  'express';
const app = express();

initializeRoutes(app); // Initialize Routes
const PORT = process.env.PORT || 4000;
//Middlewares
app.use(express.json());
app.use(require(`./middlewares/cors`).default);
//Starting the server
app.listen(PORT, ()=>{

  console.log(process.env.DB_HOST);
  console.log(`server listening at http://localhost:${PORT}`);
})
