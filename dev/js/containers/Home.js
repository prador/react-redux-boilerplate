import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom'
import * as Actions from '../redux/actions/Actions';

const mapStateToProps = state => {
    return {
    }
}
class Home extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <div className="home">
        <header className="page-header">
          <div className="container">
            <Link to="/">Suramprady</Link>
            {/* <img src="./../images/sign.png"/> */}
          </div>
        </header>
        <section className="hero-section">
          <div className="container">
            <div className="hero-bg"></div>
            <div className="hero-overlay"></div>
            <div className="hero-content">
              <div className="hero-header">
                <p>Hey there! I am <span>Pradyumna Surampudi</span></p>
                <p>I am a UI/UX Designer from Bangalore</p>
              </div>
              <div className="btn-grp">
                <a className="cta-btn" target="_blank" href="https://drive.google.com/open?id=0B36AyzF1uCWYSEJ5UFBFdXpHbFU"> Resume</a>
                <a className="cta-btn" target="_blank" href="https://drive.google.com/open?id=1eMhTRrZbkvkMOX33e93kxOFl3cmBgVXK"> Portfolio</a>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="section-two">
          <div className="container">
            <div className="section-two-content">
              hi
            </div>
          </div>
        </section> */}
        {/* <nav role="navigation" id="navigation">
          <div className="nav-container">
            <div className="nav-link"> Home</div>
            <div className="nav-link"> About</div>
            <div className="nav-link"> Work</div>
            <div className="nav-link"> Contact</div>
          </div>
        </nav> */}
      </div>
    )
  }
}
export default connect(mapStateToProps)(Home);