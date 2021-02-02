import express from 'express';
import { professorModel } from '../models/professorModels.js';

const app = express();


// create or insert
app.post('/professor', async (req, res) => {
  try { 
    const professor = new professorModel(req.body);
    await professor.save();
    res.send(professor);
  } catch (error) {
    res.status(500).send(error);
  }
});


// Retrieve or Query
app.get('/professor', async (req, res) => {
  try {
    const professor = await professorModel.find({});
    res.send(professor);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update
app.patch('/professor/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const professor = await professorModel.findByIdAndUpdate({ _id: id }, req.body, {new: true});
    if (!professor) {res.status(404).send('Documento não encontrado na colecao');} else {res.status(200).send(professor);}
  } catch (error) {
    res.status(500).send(error);
  }
});

// Delete
app.delete('/professor/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const professor = await professorModel.findByIdAndDelete({ _id: id });
    if (!professor) {res.status(404).send('Documento não encontrado na colecao');} else {res.status(200).send('Documento Deletado');}
  } catch (error) {
    res.status(500).send(error);
  }
});

export {app as professorRouter};