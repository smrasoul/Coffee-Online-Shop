document.addEventListener('DOMContentLoaded', function () {
    const counter = document.querySelector('.counter-cart');
    const value = document.querySelector('.value-cart');
    const increaseBtn = document.querySelector('.increase');
    const decreaseBtn = document.querySelector('.decrease');
  
    let count = 0;
  
    increaseBtn.addEventListener('click', function () {
      count++;
      updateCounter();
    });
  
    decreaseBtn.addEventListener('click', function () {
      if (count > 0) {
        count--;
        updateCounter();
      }
    });
  
    function updateCounter() {
      value.textContent = count;
    }
  });