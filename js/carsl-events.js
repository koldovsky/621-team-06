(function() {
  
    const slides = [
          `<div class="container-photo-event special-events">
          <h3>For Your Special Events</h3><br>
          <p class="line"></p>
          <p>We have a great collection of exclusive reserve wines.</p>
          <a href="#learn_more" class="nav__link">Learn more <img src="img/right-arrow.svg" width="20" alt=""></a>
      </div>`,

      `<div class="container-photo-event special-events">
      <h3>For Your Not</h3><br>
      <p class="line"></p>
      <p>We have a great collection of exclusive reserve wines.</p>
      <a href="#learn_more" class="nav__link">Learn more <img src="img/right-arrow.svg" width="20" alt=""></a>
  </div>`,
  
  `<div class="container-photo-event special-events">
  <h3>For Your My Events</h3><br>
  <p class="line"></p>
  <p>We have a great collection of exclusive reserve wines.</p>
  <a href="#learn_more" class="nav__link">Learn more <img src="img/right-arrow.svg" width="20" alt=""></a>
  </div>`
    ];

    let currentSlideIdx = 0;

    function showCurrentSlide() {
        const slideContainer = document.querySelector('.carousel-products .slide');
        slideContainer.innerHTML = slides[currentSlideIdx];
    }

    function nextSlide() {
        currentSlideIdx++;
        if (currentSlideIdx >= slides.length) currentSlideIdx = 0;
        showCurrentSlide();
    }

    setInterval(nextSlide, 3000);
    showCurrentSlide();

    document.querySelector('.carousel-products .next-slide')
     .addEventListener('click', nextSlide);

})();