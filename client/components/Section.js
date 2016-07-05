/* eslint-disable */

import React from 'react';
import Seat from './Seat';

class Section extends React.Component {

  constructor(props) {
    super(props);
    this.state = { seats: this.props.section.seats, revenue: this.props.section.revenue };
    this.purchase = this.purchase.bind(this);
  }

  purchase(event){
    const sectionId = this.props.section._id;
    const seatId = event.currentTarget.getAttribute('data-id');
    const body = JSON.stringify({ sectionId})
    fetch(`/seats/${seatId}`, { method: 'post', body, headers: { 'Content-Type': 'application/json' } })
    .then(r => r.json())
    .then(() => this.refresh());
  }

  render() {
    return (
      <div className="sectionBox">
        <h5>{this.props.section.type}</h5>
        <p>Price: ${this.props.section.seatPrice}</p>
          {this.state.seats.map((s) => <Seat purchase={this.purchase} key={s._id} seat={s} />)}
      </div>
    );
  }
}

export default Section;
