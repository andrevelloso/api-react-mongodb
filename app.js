/* 
API de CRUD - Persistencia no MongoDB 
Poderá utilizar esta ferramenta online para testar API em  https://app.boomerangapi.com/
by André Velloso  
*/

import express from 'express';
import mongoose from 'mongoose';
import {studentRouter} from './routes/studentRouter.js';
import {professorRouter} from './routes/professorRouter.js';
import pkg from 'dotenv';
const {dotenv} = pkg;

// Conectando ao DB igti na Cloud do Atlas
(async () => {
  try {
    await mongoose.connect('mongodb+srv://'+process.env.DB_USER+':'+process.env.DB_PASS+'@cluster0.ltypa.mongodb.net/igti?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    });
  } catch (error) {console.log("Erro ao conectar ao MongoDB Atlas "+error);}
})();

const app = express();

app.use(express.json());
app.use(studentRouter);
app.use(professorRouter);
app.listen(process.env.PORT, ()=> console.log('API Iniciada na porta '+process.env.PORT));