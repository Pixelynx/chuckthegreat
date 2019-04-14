import React, { Component } from 'react';
import '../styles/navBar.css';

class Navigation extends Component {
  render() {
    return(
      <>
          <div className='nav_container'>
          <div className='menu_button'>
          </div>
            <div className='nav_bar'>
              <ul className='nav_bar_ul'>
                <li className='nav_link'>Home</li>
                <li className='nav_link'>About</li>
                <li className='nav_link'>Music</li>
                <li className='nav_link'>Gallery</li>
                <li className='nav_link'>Perform</li>
                <li className='nav_link'>Contact</li>
              </ul>
            </div>
          </div>
        </>
    )
  }
}

export default Navigation;
