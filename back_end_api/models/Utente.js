const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UtenteSchema = new Schema({
    nome: {type: String, required: true},
    cognome: {type: String, required: true},
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    status: {type: Boolean, default: true}
})

const Utente = mongoose.model('Utente', UtenteSchema);
module.exports = Utente;