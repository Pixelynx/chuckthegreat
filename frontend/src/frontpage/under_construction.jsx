import React, { Component } from 'react';
import Player from '../player/player.jsx';

export const UnderConstruction = () => {
  return(
    <>
    <div className='container'>
      <h1 className='under_construction'>Under Contruction</h1>
      <p className='sites_to_follow'>Follow Me on All My Social Media</p>
      <div className='player_containter'></div>
      <div className='links'></div>
    </div>
    <Player />
    </>
  )
}
