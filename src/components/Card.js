//Remember that you can only return one thing: one <div> must wrap everything (and that must be wrapped by ()!)

//Ok so here we're also going to DESTRUCTURE the props. They will be inside curly braces, so you'll never see the word "props" !

import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img src={`https://robohash.org/${id}?200x200`} alt='robot'/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
    )
}

export default Card;
