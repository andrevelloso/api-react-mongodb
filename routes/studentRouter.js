import express from 'express';
import { studentModel } from '../models/studentModels.js';

const app = express();


// create or insert
app.post('/student', async (req, res) => {
  try { 
    const student = new studentModel(req.body);
    await student.save();
    res.send(student);
  } catch (error) {
    res.status(500).send(error);
  }
});


// Retrieve or Query
app.get('/student', async (req, res) => {
  try {
    const student = await studentModel.find({});
    res.send(student);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update
app.patch('/student/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const student = await studentModel.findByIdAndUpdate({ _id: id }, req.body, {new: true});
    if (!student) {res.status(404).send('Documento não encontrado na colecao');} else {res.status(200).send(student);}
  } catch (error) {
    res.status(500).send(error);
  }
});

// Delete
app.delete('/student/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const student = await studentModel.findByIdAndDelete({ _id: id });
    if (!student) {res.status(404).send('Documento não encontrado na colecao');} else {res.status(200).send('Documento Deletado');}
  } catch (error) {
    res.status(500).send(error);
  }
});

export {app as studentRouter};