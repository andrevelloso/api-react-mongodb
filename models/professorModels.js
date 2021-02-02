import mongoose from 'mongoose';

// Criacao do modelo da colecao
const professorSchema = mongoose.Schema({
  name:{type:String, require:true},
  subject:{type:String, require:true},
  title:{type:String, require:true},
  age:{type:Number, require:true, min:0},
  lastModified:{type:Date, default:Date.now}
});

// Definindo o modelo da colecao - força palavra no singular - padrao é no plural

const professorModel = mongoose.model('professor', professorSchema, 'professor');

export { professorModel };