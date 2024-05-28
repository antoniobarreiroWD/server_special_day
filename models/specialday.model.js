const mongoose = require('mongoose');

const specialDaySchema = new mongoose.Schema({
    noviaInfo: {
        noviaId: mongoose.Schema.Types.ObjectId,
        name: String,
        firstName: String,
        lastName: String,
        email: String,
    },
    novioInfo: {
        novioId: mongoose.Schema.Types.ObjectId,
        name: String,
        firstName: String,
        lastName: String,
        email: String,
    },
    banquete: {
        type: String,
        price: Number,
        Image: String,
        required: false,
        default: '',
        trim: true
    },
    ceremonia: {
        type: String,
        price: Number,
        Image: String,
        required: false,
        default: '',
        trim: true
    },
    fotografo: {
        type: String,
        price: Number,
        Image: String,
        required: false,
        default: '',
        trim: true
    },
    musica: {
        type: String,
        price: Number,
        Image: String,
        required: false,
        default: '',
        trim: true
    },
    coche: {
        type: String,
        price: Number,
        Image: String,
        required: false,
        default: '',
        trim: true
    },
    invitados: {
        type: String,
        ragalo: Number,
        required: false,
        default: '',
        trim: true
    },
    fecha: {
        type: Date,
        required: true,
        default: Date.now
    },
    hora: {
        type: String,
        required: true,
        default: '',
        trim: true
    }

}, { timestamps: true });

specialDaySchema.index({ 'location': '2dsphere' });

const SpecialDay = mongoose.model('SpecialDay', specialDaySchema);

module.exports = { SpecialDay, specialDaySchema };