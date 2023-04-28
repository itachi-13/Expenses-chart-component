window.addEventListener('touchmove', function(e) {
    const touchX = e.touches[0].pageX;
    const body = document.querySelector('body');
    
    if (touchX > 0) {
      body.style.backgroundColor = 'blue'; // Change the background color to red
    } else {
      body.style.backgroundColor = ''; // Revert to the default background color
    }
  });
  