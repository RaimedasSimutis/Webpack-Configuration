import './assets/style.scss'



import Icon from './assets/images/image.jpg'

const img = new Image()
img.src = Icon;

let body = document.querySelector('body');
let div = document.createElement("div"); 
div.appendChild(img);
body.appendChild(div);


