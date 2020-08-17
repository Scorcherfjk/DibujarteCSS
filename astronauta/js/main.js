function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const bg = document.querySelector('.bg');
var fragment = new DocumentFragment()

for (let i = 0; i < 1000; i++) {
  const top = getRandomInt(-5, 100);
  const left = getRandomInt(0, 100);
  const size = getRandomInt(1, 4);
  
  const star = document.createElement('div');
  star.className = 'star';
  star.style.top = top + '%';
  star.style.left = left + '%';
  star.style.height = size + 'px';
  star.style.width = size + 'px';

  fragment.appendChild(star);
}

bg.appendChild(fragment);

// ! Esto no funciona como esperaba jajaj
// const container = document.querySelector('.container'); 
// window.onmousemove = function (){
//   var x = window.event.clientX;
//   var y = window.event.clientY;
//   console.log(x, y)
//   container.style.position = 'relative';
//   container.style.top = y - 300 + 'px';
//   container.style.left = x - 300 + 'px';
// }


// ! funciona pero no es como en flutter
// const animate = document.querySelector('.animate');
// setInterval(() => {
//   const h = getRandomInt(0, 30);
//   const w = getRandomInt(0, 30);
//   const r = getRandomInt(0, 255);
//   const g = getRandomInt(0, 255);
//   const b = getRandomInt(0, 255);
//   const br = getRandomInt(0, 30)
//   animate.style.height = h + 'px';
//   animate.style.width = w + 'px';
//   animate.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
//   animate.style.borderRadius = br + 'px';
// }, 1000);

