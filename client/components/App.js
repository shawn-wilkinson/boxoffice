/* eslint-disable */

import React from 'react';
import Creator from './Creator';
import Section from './Section';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.create = this.create.bind(this);
    this.state = { sections: [] };
    this.refresh = this.refresh.bind(this);
  }

  componentDidMount(){
    this.refresh();
  }

  refresh(){
    fetch('/sections')
    .then(r => r.json())
    .then(j => {
      this.setState({ sections: j.sections });
    });
  }

  create(e){
    const numSeats = this.refs.creator.refs.numSeats.value;
    const type = this.refs.creator.refs.type.value;
    const seatPrice = this.refs.creator.refs.seatPrice.value;
    const body = JSON.stringify({ numSeats, type, seatPrice });
    fetch('/sections', { method: 'post', body, headers: { 'Content-Type': 'application/json' } })
    .then(r => r.json())
    .then(() => this.refresh());
    e.preventDefault();
    this.refresh();
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-4">
            <h1>Box Office</h1>
            <h4>Ticketing Application</h4>
            <Creator ref='creator' create={this.create} />
          </div>
          <div className="col-md-8">
            {this.state.sections.map((s) => <Section key={s._id} section={s} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
