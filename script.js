// let isScrollingHorizontally = false;
// let startTouchX = 0;

// window.addEventListener('touchstart', function(e) {
//   startTouchX = e.touches[0].pageX;
// });

// window.addEventListener('touchmove', function(e) {
//   const touchX = e.touches[0].pageX;
//   const body = document.querySelector('body');

//   if (touchX > startTouchX) {
//     isScrollingHorizontally = true;
//     body.style.backgroundColor = 'blue';
//   } else {
//     isScrollingHorizontally = false;
//     body.style.backgroundColor = '';
//   }
// });

// window.addEventListener('touchend', function() {
//   if (!isScrollingHorizontally) {
//     const body = document.querySelector('body');
//     body.style.backgroundColor = '';
//   }
// });




window.addEventListener('touchmove', function() {
  const body = document.querySelector('body');

    body.style.backgroundColor = 'blue';
  
});

