
window.onload = function () {
  // 1. Inject videos dynamically
  document.querySelectorAll('.card-int').forEach(card => {
    const poster = card.getAttribute('data-poster');
    const src = card.getAttribute('data-src');

    const video = document.createElement('video');
    video.setAttribute('poster', poster);
    video.setAttribute('controls', '');
    video.setAttribute('playsinline', '');

    const source = document.createElement('source');
    source.setAttribute('src', src);
    source.setAttribute('type', 'video/mp4');

    video.appendChild(source);
    card.appendChild(video);
  });

  // 2. Pause videos when they leave the viewport
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        const video = entry.target.querySelector('video');
        if (video && !entry.isIntersecting && !video.paused) {
          video.pause();
        }
      });
    },
    {
      threshold: 0.25, // Trigger when at least 25% of the element is visible
    }
  );

  // 3. Observe each card that contains a video
  document.querySelectorAll('.card-int').forEach(card => {
    observer.observe(card);
  });
};

window.addEventListener('load', () => {
  let slideIndex = 1;
  showSlides(slideIndex);

  // Expose these functions to global scope if you call them from HTML buttons
  window.plusSlides = function(n) {
    showSlides(slideIndex += n);
  };

  window.currentSlide = function(n) {
    showSlides(slideIndex = n);
  };

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let slidesContent = document.getElementsByClassName("mySlideContent");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      slidesContent[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "flex";
    slidesContent[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
  }
});