import React from 'react';

class ResultsView extends React.Component {

  render() {
    return (
      <div className="results-view">
        <ul className="results-list-container">
          <li>
            <a href="#">
              <div className="results-logo">
                <i className="fa fa-bolt" aria-hidden="true" />
              </div>
              <div className="results-stats">
                <ul>
                  <li>
                    <i className="fa fa-money" aria-hidden="true" />
                    <span>Total Entered:</span>
                    <span>$300</span>
                  </li>
                  <li>
                    <i className="fa fa-credit-card" aria-hidden="true" />
                    <span>Total Out:</span>
                    <span>$500</span>
                  </li>
                  <li>
                    <i className="fa fa-credit-card-alt" aria-hidden="true" />
                    <span>Profit:</span>
                    <span>$200</span>
                  </li>
                </ul>
                <div className="results-location">
                  <i className="fa fa-map-marker" aria-hidden="true" />
                  <span>Las Vegas, NV</span>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="results-logo">
                <i className="fa fa-bolt" aria-hidden="true" />
              </div>
              <div className="results-stats">
                <ul>
                  <li>
                    <i className="fa fa-money" aria-hidden="true" />
                    <span>Total Entered:</span>
                    <span>$300</span>
                  </li>
                  <li>
                    <i className="fa fa-credit-card" aria-hidden="true" />
                    <span>Total Out:</span>
                    <span>$500</span>
                  </li>
                  <li>
                    <i className="fa fa-credit-card-alt" aria-hidden="true" />
                    <span>Profit:</span>
                    <span>$200</span>
                  </li>
                </ul>
                <div className="results-location">
                  <i className="fa fa-map-marker" aria-hidden="true" />
                  <span>Las Vegas, NV</span>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="results-logo">
                <i className="fa fa-bolt" aria-hidden="true" />
              </div>
              <div className="results-stats">
                <ul>
                  <li>
                    <i className="fa fa-money" aria-hidden="true" />
                    <span>Total Entered:</span>
                    <span>$300</span>
                  </li>
                  <li>
                    <i className="fa fa-credit-card" aria-hidden="true" />
                    <span>Total Out:</span>
                    <span>$500</span>
                  </li>
                  <li>
                    <i className="fa fa-credit-card-alt" aria-hidden="true" />
                    <span>Profit:</span>
                    <span>$200</span>
                  </li>
                </ul>
                <div className="results-location">
                  <i className="fa fa-map-marker" aria-hidden="true" />
                  <span>Las Vegas, NV</span>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    );
  }

}

export default ResultsView;