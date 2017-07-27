import _ from 'lodash';
import './style.scss';
import gif from './giphy.gif';

function component() {
  var element = document.createElement('div');

  //  Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  //add image to existing div
  // var myGif = new Image();
  // myGif.src = gif;
  //
  // element.appendChild(myGif);

  return element;
}

document.body.appendChild(component());
