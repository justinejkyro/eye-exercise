// const balls = document.getElementsByClassName('ball');
// console.log(balls);
// console.log(balls.length);


let secondEye = document.createElement('div');
secondEye.setAttribute('class', 'eye');
document.getElementsByClassName('eyes')[0].appendChild(secondEye);
// console.log(secondEye);
let secondBall = document.createElement('div');
secondBall.setAttribute('class', 'ball');
document.getElementsByClassName('eye')[1].appendChild(secondBall);

const balls = document.getElementsByClassName('ball');
console.log(balls);
console.log(balls.length);


document.onmousemove = (event) => {
  // console.log(event);
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';
  for (i = 0; i < balls.length; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].transform = 'translate(-' + x + ',-' + y + ')';
  }
};