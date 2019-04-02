import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TwitterLogo from './imgs/twitter_logo.png';

import './style.css';

export const UnderConstruction = () => {
  return(
    <>
    <div className='container'>
      <h1 className='under_construction'>Under Contruction</h1>
      <p className='sites_to_follow'>Follow Me on All My Social Media</p>
      <div className='player_containter'></div>
      <div className='links'>
        <a href='https://www.twitter.com'><img className='twitter_logo'></img></a>
        <a href='https://www.instagram.com'><img className='ig_logo'></img></a>
        <a href='https://www.apple.com'><img className='apple_logo'></img></a>
      </div>
    </div>
    </>
  )
}
