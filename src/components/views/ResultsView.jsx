import React from 'react';
import * as d3 from 'd3';

class ResultsView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: null
    }
  }

  componentWillMount() {
    d3.json('static/sample_results.json',
      (err, data) => this.setState({ data }));
  }

  renderResultsList() {
    let data = this.state.data.map(d => (
      <li>
        <a href="#">
          <div className="results-logo">
            {/*<i className="fa fa-bolt" aria-hidden="true" />*/}
            <img src="static/images/ca-bicycle.jpg" width="100"/>
          </div>
          <div className="results-stats">
            <ul>
              <li>
                <i className="fa fa-money" aria-hidden="true" />
                <span>Total Entered:</span>
                <span>${d.buyin}</span>
              </li>
              <li>
                <i className="fa fa-credit-card" aria-hidden="true" />
                <span>Total Out:</span>
                <span>${d.cashout}</span>
              </li>
              <li>
                <i className="fa fa-credit-card-alt" aria-hidden="true" />
                <span>Profit:</span>
                <span>${d.cashout-d.buyin}</span>
              </li>
            </ul>
            <div className="results-location">
              <i className="fa fa-map-marker" aria-hidden="true" />
              <span>Las Vegas, NV</span>
            </div>
          </div>
        </a>
      </li>
    ));

    return (
      <ul className="results-list-container">
        {data}
      </ul>
    );
  }

  render() {
    return (
      <div className="results-view">
        {this.state.data && this.renderResultsList()}
      </div>
    );
  }

}

export default ResultsView;