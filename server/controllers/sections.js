/* eslint-disable  */

import express from 'express';
import Section from '../models/section';
import Seat from '../models/seat';
const router = module.exports = express.Router();

router.get('/', (req, res) => {
  console.log('IN SECTIONS GET');
  Section.find({}).populate('seats').exec((err, sections) => {
    res.send({ sections });
  });
});

router.post('/', (req, res) => {
  console.log('IN SECTION CONTROLLER!!!');
  const section = new Section(req.body);
  const seats = Array(req.body.numSeats * 1).fill(0).map((_, i) => new Seat({ number: `S${i}` }));
  Seat.insertMany(seats, (err, docs) => {
    section.seats = docs.map(d => d._id);
    section.save(() => {
      console.log("SEATS:", seats);
      console.log("SECTION:", section);
      res.send({ section, seats });
    });
  });
});
