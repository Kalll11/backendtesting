const mongoose = require('mongoose');

const KritikSchema = new mongoose.Schema({
  nama: String,
  pesan: String,
  tanggal: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Kritik', KritikSchema);
