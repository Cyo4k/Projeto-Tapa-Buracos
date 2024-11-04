const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
  autor: { type: String, required: true },
  endereco: { type: String, required: true },
  imagem: { type: String },
  descricao: { type: String, required: true },
  status: { type: String, default: 'pendente' },
});

module.exports = mongoose.model('Report', ReportSchema);
