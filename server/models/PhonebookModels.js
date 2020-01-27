// Using Node.js `require()`
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const phonebookSchema = new Schema({
    idUser: String,
    name: String,
    phone: String
  });

  module.exports = mongoose.model('Phonebook', phonebookSchema);
