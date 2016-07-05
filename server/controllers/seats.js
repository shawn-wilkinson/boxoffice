/* eslint-disable */

import express from 'express';
import Seat from '../models/seat';
const router = module.exports = express.Router();

router.get('/', (req, res) => {
  console.log('IN SEAT GET');

});

router.post('/:id', (req, res) => {
  console.log('IN SEAT POST');
  console.log(req.params.id)


});
