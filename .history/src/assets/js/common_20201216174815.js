import FastClick from './fastclick';

window.addEventListener('load', function () {
  FastClick.attach(document.body); // 初始化
}, false);

document.documentElement.addEventListener('touchmove', function (e) {
  if (e.touches.length > 1) { // 多指触摸
    e.preventDefault();
  }
}, false);

document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + 'px';