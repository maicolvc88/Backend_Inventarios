const { Schema, model } = require("mongoose");

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre es requerido']

    },
    email: {
        type: String,
        required: [true, 'Email es requerido']

    },
    estado: {
        type: Boolean,
        default: true,
        required: true

    },
    fechaCreacion: {
        type: Date,
        default: new Date(),

    },
    fechaActualizacion: {
        type: Date,
        default: new Date(),

    }

})

module.exports = model('Usuario', UsuarioSchema)