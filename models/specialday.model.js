const mongoose = require('mongoose');

const specialDaySchema = new mongoose.Schema({
  couple: {
    bride: {
      name: { type: String, trim: true, required: true },
      firstName: { type: String, trim: true, required: true },
      lastName: { type: String, trim: true, required: true },
      email: { type: String, trim: true, required: true },
    },
    groom: {
      name: { type: String, trim: true, required: true },
      firstName: { type: String, trim: true, required: true },
      lastName: { type: String, trim: true, required: true },
      email: { type: String, trim: true, required: true },
    },
  },
  services: [
    {
      type: { type: String, trim: true, default: '' },
      price: { type: Number, min: 0, default: 0 },
      image: { type: String, trim: true, default: '' },
      status: { type: Boolean, default: true },
    },
  ],
  guests: [
    {
      name: { type: String, trim: true, default: '' },
      companion: { type: String, trim: true, default: '' },
      gift: { type: Number},
      table: { type: Number },
    }
  ],
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
}, { timestamps: true });

const SpecialDay = mongoose.model('SpecialDay', specialDaySchema);

module.exports = SpecialDay;
