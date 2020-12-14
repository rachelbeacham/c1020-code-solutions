import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

const images = [
  {
    id: 1,
    url: '../dist/images/Ruby.jpeg'
  },
  {
    id: 2,
    url: '../dist/images/jak.jpeg'
  },
  {
    id: 3,
    url: '../dist/images/Louis.jpeg'
  },
  {
    id: 4,
    url: '../dist/images/kygo.png'
  },
  {
    id: 5,
    url: '../dist/images/Patti.jpeg'
  }
];

ReactDOM.render(
  <Carousel images={images}/>,
  document.querySelector('#root')
);
