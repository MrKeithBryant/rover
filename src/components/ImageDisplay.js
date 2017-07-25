import React, { Component } from 'react';

export default ({images}) =>
<ul>{images.map(
  (image, index) =>
  <li> <img src={image.img_src}/></li>)}
  </ul>
