import React from 'react';
import { BrowserRouter, Match, Miss, Link } from 'react-router';

// Import view components
import {
  ChartView,
  HomeView,
  NotFoundView
} from './components/views/index.js';

export default class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <nav className="main-nav">
            <ul>
              <li>PokerApp</li>
            </ul>
          </nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/chart">Chart</Link></li>
          </ul>

          <hr/>

          <Match exactly pattern="/" component={HomeView} />
          <Match pattern="/chart" component={ChartView} />

          {/* If none of those match, then a sibling `Miss` will render. */}
          <Miss component={NotFoundView} />
          <footer>
            <ul>
              <li>
                <a href="#">
                  <i className="fa fa-home" aria-hidden="true" />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-area-chart" aria-hidden="true" />
                  <span>Results</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-bar-chart" aria-hidden="true" />
                  <span>Charts</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-bars" aria-hidden="true" />
                  <span>More</span>
                </a>
              </li>
            </ul>
          </footer>
        </div>
      </BrowserRouter>
    );
  }

}
