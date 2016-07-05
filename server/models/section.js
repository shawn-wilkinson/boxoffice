import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const sectionSchema = new Schema({
  type: { type: String, required: true },
  seatPrice: { type: Number, default: 0 },
  revenue: { type: Number, default: 0 },
  seats: [{ type: mongoose.Schema.ObjectId, ref: 'Seat' }],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Section', sectionSchema);
