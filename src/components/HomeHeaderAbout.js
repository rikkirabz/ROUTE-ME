import React, { Component }       from 'react';
import utils                      from '../utils/helper.js'
import NavBar                     from './NavBar.js';
import Footer                     from './Footer.js';
import { Link }                   from 'react-router';
import { Glyphicon }          from 'react-bootstrap';

import '../css/header.css';

class HomeHeaderAbout extends Component {

  render() {
    return (
      <div className="outer-div">
        <div className="home-header-outer">

          <div className="about-message-austin">
            <div className="welcome-title-about">
              <div className="name-austin">Austin <br/>Hudson</div>
              <div className="img-austin"></div>
            </div>
            <p className="welcome-p">
              B.S. in Computer Science<br/> Stony Brook University SUNY

              </p>
              <div className="outer-start">
                <div className="glyp-button">
                  <a target="_blank" href="https://www.linkedin.com/in/austin-hudson">Austin's LinkedIn</a>
                  <a className="links" target="_blank" href="https://github.com/austin-hudson">Austin's GitHub</a>
                </div>
              </div>
            </div>

          <div className="about-message-rikki">
              <div className="welcome-title-about">
                <div className="name">Rikki <br/> Rifka <br/> Rabinowitz</div>
                <div className="img-rikki"></div>
              </div>
              <p className="welcome-p">
              B.S. in Computer Science<br/> Brooklyn College CUNY
              </p>
              <div className="outer-start">
                <div className="glyp-button">
<a target="_blank" href="https://www.linkedin.com/in/rifkarabinowitz">Rikki's LinkedIn</a>
  <a className="links" target="_blank" href="https://github.com/rikkirabz">Rikki's GitHub</a>
</div>
              </div>
            </div>
        </div>

        <div className="outer-TSP">
          <div className="about-traveling-salesman">
            <div className="welcome-title-TSP">
              <div className="name">Traveling Salesman Problem <br/>The Nearest Neighbor Approach</div>
            </div>
            <p className="welcome-p">
              Optimize your multiple stop route by
              using the Traveling Saleman Algorithm!
              <div className="img-tsp"></div>
              </p>
              <div className="outer-start">
              </div>
          </div>
        </div>
      </div>
    );
  }

}

export default HomeHeaderAbout;

// <div className="button"><Link to="/search">Get Started!</Link></div>
