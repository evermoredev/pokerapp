import React from 'react';
import { BrowserRouter, Match, Miss, Link } from 'react-router';

// Import view components
import {
  ChartView,
  HomeView,
  NotFoundView,
  ResultsView
} from './components/views/index.js';

export default class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <nav className="main-nav">
            <ul>
              <li>PokerApp</li>
            </ul>
          </nav>

          <Match exactly pattern="/" component={HomeView} />
          <Match pattern="/chart" component={ChartView} />
          <Match pattern="/results" component={ResultsView} />

          {/* If none of those match, then a sibling `Miss` will render. */}
          <Miss component={NotFoundView} />
          <footer>
            <ul>
              <li>
                <Link to="/">
                  <i className="fa fa-home" aria-hidden="true" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/results">
                  <i className="fa fa-area-chart" aria-hidden="true" />
                  <span>Results</span>
                </Link>
              </li>
              <li>
                <Link to="/chart">
                  <i className="fa fa-bar-chart" aria-hidden="true" />
                  <span>Charts</span>
                </Link>
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
