import React from 'react';
import * as d3 from 'd3';

class Chart extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    window.addEventListener("resize", () => this.drawChart(this.props.data));
  }

  componentDidMount() {
    this.drawChart(this.props.data);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", () => this.drawChart(this.props.data));
  }

  drawChart(data) {

    const svgEl = document.getElementById("svg");
    svgEl.innerHTML = '';
    const svgWidth = svgEl.clientWidth;

    const svg = d3.select("svg"),
      margin = {top: 20, right: 20, bottom: 110, left: 40},
      margin2 = {top: 430, right: 20, bottom: 30, left: 40},
      width = +svgWidth - margin.left - margin.right,
      height = +svg.attr("height") - margin.top - margin.bottom,
      height2 = +svg.attr("height") - margin2.top - margin2.bottom;


    const brushed = () => {
      // ignore brush-by-zoom
      if (d3.event.sourceEvent && d3.event.sourceEvent.type === "zoom") return;
      const s = d3.event.selection || x2.range();
      x.domain(s.map(x2.invert, x2));
      focus.select(".area").attr("d", area);
      focus.select(".axis--x").call(xAxis);
      svg.select(".zoom").call(zoom.transform, d3.zoomIdentity
        .scale(width / (s[1] - s[0]))
        .translate(-s[0], 0));
    };

    const zoomed = () => {
      // ignore zoom-by-brush
      if (d3.event.sourceEvent && d3.event.sourceEvent.type === "brush") return;
      const t = d3.event.transform;
      x.domain(t.rescaleX(x2).domain());
      focus.select(".area").attr("d", area);
      focus.select(".axis--x").call(xAxis);
      context.select(".brush").call(brush.move, x.range().map(t.invertX, t));
    };

    const x = d3.scaleTime().range([0, width]),
      x2 = d3.scaleTime().range([0, width]),
      y = d3.scaleLinear().range([height, 0]),
      y2 = d3.scaleLinear().range([height2, 0]);

    const xAxis = d3.axisBottom(x),
      xAxis2 = d3.axisBottom(x2),
      yAxis = d3.axisLeft(y);

    const brush = d3.brushX()
      .extent([[0, 0], [width, height2]])
      .on("brush end", brushed);

    const zoom = d3.zoom()
      .scaleExtent([1, Infinity])
      .translateExtent([[0, 0], [width, height]])
      .extent([[0, 0], [width, height]])
      .on("zoom", zoomed);

    const area = d3.area()
      .curve(d3.curveMonotoneX)
      .x(d => x(d.date))
      .y0(height)
      .y1(d => y(d.profit));

    const area2 = d3.area()
      .curve(d3.curveMonotoneX)
      .x(d => x2(d.date))
      .y0(height2)
      .y1(d => y2(d.profit));

    svg.append("defs").append("clipPath")
      .attr("id", "clip")
      .append("rect")
      .attr("width", width)
      .attr("height", height);

    const focus = svg.append("g")
      .attr("class", "focus")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    const context = svg.append("g")
      .attr("class", "context")
      .attr("transform", "translate(" + margin2.left + "," + margin2.top + ")");

    x.domain(d3.extent(data, d => d.date ));
    y.domain([0, d3.max(data, d => d.profit )]);
    x2.domain(x.domain());
    y2.domain(y.domain());

    focus.append("path")
      .datum(data)
      .attr("class", "area")
      .attr("d", area);

    focus.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

    focus.append("g")
      .attr("class", "axis axis--y")
      .call(yAxis);

    context.append("path")
      .datum(data)
      .attr("class", "area")
      .attr("d", area2);

    context.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height2 + ")")
      .call(xAxis2);

    context.append("g")
      .attr("class", "brush")
      .call(brush)
      .call(brush.move, x.range());

    svg.append("rect")
      .attr("class", "zoom")
      .attr("width", width)
      .attr("height", height)
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
      .call(zoom);

  }

  render() {
    return (
      <div className="chart">
        <svg id="svg" height="500"></svg>
      </div>
    )
  }

}

export default Chart;
