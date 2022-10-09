const { Schema, model } = require("mongoose");

const TipoEquipoSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Nombere equipo es requerido']

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

module.exports = model('TipoEquipo', TipoEquipoSchema)