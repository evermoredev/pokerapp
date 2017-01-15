import React from 'react';
import * as d3 from 'd3';

import Chart from './Chart';

class ChartView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: null
    }
  }

  getData() {
    const parseDate = d3.timeParse("%b %Y");

    const type = (d) => {
      d.date = parseDate(d.date);
      d.profit = +d.profit;
      return d;
    };

    d3.csv("static/data.csv", type, (err, data) => {
      this.setState({ data });
    });
  }

  componentWillMount() {
    this.getData();
  }

  render() {
    return (
      <div className="chart-view content">
        {this.state.data &&
          <Chart data={this.state.data} />}
      </div>
    );
  }

}

export default ChartView;
