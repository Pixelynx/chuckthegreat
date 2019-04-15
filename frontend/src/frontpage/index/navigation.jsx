import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import LandingPage from '../landing/landingPage.jsx';
import '../styles/navBar.css';

class Navigation extends Component {
  state = {
    visibility: false
  }

  handleMenuVisibility = (e) => {
    const currentState = this.state.visibility;
    this.setState({ visibility: !currentState })
  }


  render() {
    console.log(this.state)
    const { visibility } = this.state;


    return(
      <>
          <div id='nav_container' onClick={this.handleMenuVisibility} className={visibility}>
          <div className='menu_button' onClick={this.handleMenuVisibility}>click</div>
            <div id='nav_bar' className={visibility ? 'show' : 'hide'}>
              <ul className='nav_bar_ul'>
                <li className='nav_link'><Link exact path to='/home'>Home</Link></li>
                <li className='nav_link'><Link path to='/about'>About</Link></li>
                <li className='nav_link'><Link path to='/music'>Music</Link></li>
                <li className='nav_link'><Link path to='/gallery'>Gallery</Link></li>
                <li className='nav_link'><Link path to='/perform'>Perform</Link></li>
                <li className='nav_link'><Link path to='/contact'>Contact</Link></li>
              </ul>
            </div>

          </div>
          <Route exact path='/home' component={ LandingPage } />


        </>
    )
  }
}

export default Navigation;
