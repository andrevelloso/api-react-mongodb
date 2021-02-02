import express from 'express';
import mongoose from 'mongoose';
import {studentRouter} from './routes/studentRouter.js';
import {professorRouter} from './routes/professorRouter.js';

// API de CRUD - Persistencia no MongoDB 
// Ferramenta online para testar API em  https://app.boomerangapi.com/

// Conectando ao DB igti na Cloud do Atlas
(async () => {
  try {
    await mongoose.connect('mongodb+srv://admin:XCsL3xruyw7H7H1e@cluster0.ltypa.mongodb.net/igti?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    });
  } catch (error) {console.log("Erro ao conectar ao MongoDB Atlas "+error);}
})();

// Alteracao para testar o git

const app = express();

app.use(express.json());
app.use(studentRouter);
app.use(professorRouter);

app.listen(3001, ()=> console.log('API Iniciada na porta 3001'));