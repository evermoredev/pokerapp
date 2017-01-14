import React from 'react';
import { BrowserRouter, Match, Miss, Link } from 'react-router';

// Import view components
import {
  AboutView,
  HomeView,
  NotFoundView
} from './components/views/index.js';

export default class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>

          <hr/>

          <Match exactly pattern="/" component={HomeView} />
          <Match pattern="/about" component={AboutView} />

          {/* If none of those match, then a sibling `Miss` will render. */}
          <Miss component={NotFoundView}/>
        </div>
      </BrowserRouter>
    );
  }

}
