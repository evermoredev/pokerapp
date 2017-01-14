import React from 'react';

class HomeView extends React.Component {

  render() {
    return (
      <div className="home-view">
        <ul className="home-list-container">
          <li>A Poker Event Near You</li>
          <li>Poker Tournaments</li>
          <li>Poker Podcasts</li>
          <li>Learn Poker now!</li>
          <li>Hand Percentages</li>
        </ul>
      </div>
    );
  }

}

export default HomeView;