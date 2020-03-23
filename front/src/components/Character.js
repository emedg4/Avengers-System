import React from 'react';

function Character(data) {
  return <div>
      <ul>{data.name}</ul>
      <ul>{data.description}</ul>
      <ul><img src={data.imageURL} alt='NOT FOUND'></img></ul>
  </div>
}

export default Character;