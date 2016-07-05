/* eslint-disable */

import React from 'react';
import Seat from './Seat';

class Section extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let seatClass = 'seat';
    if(this.props.isSold){
      seatClass = "soldSeat";
    };
    return (
      <div data-id={this.props.seat._id} className={seatClass} onClick={this.props.purchase}>
        <p>{this.props.seat.number}</p>
      </div>
    );
  }
}

export default Section;
