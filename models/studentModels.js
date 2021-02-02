import mongoose from 'mongoose';

// Criacao do modelo da colecao
const studentSchema = mongoose.Schema({
  name:{type:String, require:true},
  subject:{type:String, require:true},
  type:{type:String, require:true},
  value:{type:Number, require:true, min:0},
  lastModified:{type:Date, default:Date.now}
});

// Definindo o modelo da colecao - força palavra no singular - padrao é no plural

const studentModel = mongoose.model('student', studentSchema, 'student');

export { studentModel };