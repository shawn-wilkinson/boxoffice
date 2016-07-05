import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const seatSchema = new Schema({
  number: { type: String, required: true },
  isSold: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Seat', seatSchema);
