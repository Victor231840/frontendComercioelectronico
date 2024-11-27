const mongoose = require('mongoose')
const categoria = require('./categoria')

const ProductoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    precio: { type: Number, required: true },
    stock: { type: Number, default: 0 },
    descripcion: { type: String, required: true },
    imagenUrl: { type: String, required: true },
    categoria: { type: mongoose.Schema.Types.ObjectId, ref: 'Categoria', required: true },
})

module.exports = mongoose.model('Producto', ProductoSchema)