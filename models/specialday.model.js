const mongoose = require('mongoose');

const specialDaySchema = new mongoose.Schema({
  couple: {
    bride: {
      id: mongoose.Schema.Types.ObjectId,
      name: { type: String, trim: true },
      firstName: { type: String, trim: true },
      lastName: { type: String, trim: true },
      email: { type: String, trim: true },
    },
    groom: {
      id: mongoose.Schema.Types.ObjectId,
      name: { type: String, trim: true },
      firstName: { type: String, trim: true },
      lastName: { type: String, trim: true },
      email: { type: String, trim: true },
    },
  },
  services: [
    {
      type: { type: String, trim: true },
      price: { type: Number, min: 0 },
      image: { type: String, trim: true },
      status: { type: Boolean, default: true },
    },
  ],
  guests: [
    {
      id: mongoose.Schema.Types.ObjectId,
      name: { type: String, trim: true },
      companion: { type: String, trim: true },
      gift: { type: Number, min: 1 },
      table: { type: Number, min: 1 },
    }
  ],
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
}, { timestamps: true });

specialDaySchema.index({ location: "2dsphere" });

const SpecialDay = mongoose.model('SpecialDay', specialDaySchema);

module.exports = SpecialDay;
