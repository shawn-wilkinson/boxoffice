/* eslint-disable  */
import React from 'react';

class Creator extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="creator">
        <form>
          <label>Type:</label>
          <input className='form-control' type='text' ref='type' />
          <label>Seat Price</label>
          <input className='form-control' type='text' ref='seatPrice' />
          <label>Seat Qty</label>
          <input className='form-control' type='text' ref='numSeats' />
          <button className='btn btn-primary' onClick={this.props.create}>Create</button>
        </form>
      </div>
    );
  }
}

export default Creator;
