window.addEventListener("load", function () {
  const aosScript = document.createElement("script");
  aosScript.src = "https://unpkg.com/aos@next/dist/aos.js";
  aosScript.defer = true;
  document.body.appendChild(aosScript);

  const aatScript = document.createElement("script");
  aatScript.src = "https://unpkg.com/aatjs@0.0.3/dist/aat.min.js";
  aatScript.defer = true;
  document.body.appendChild(aatScript);

  aosScript.onload = function () {
    AOS.init({ duration: 1000, once: true });
  };
});



var headerMenu = document.getElementById('header-menu-mobile');
// window.addEventListener('load', () => {
//   const banner = document.getElementById('banner-video-placeholder');

//   const video = document.createElement('video');
//   video.className = 'banner-video-run';
//   video.poster = './resources/videos/main-landing.webp';
//   video.muted = true;
//   video.loop = true;
//   video.autoplay = true;
//   video.playsInline = true;
//   video.style.width = '100%';
//   video.style.height = '100vh';
//   video.style.objectFit = 'cover';

//   const source = document.createElement('source');
//   source.src = './resources/videos/bhangra-video-main-landing-c.mp4';
//   source.type = 'video/mp4';

//   video.appendChild(source);
//   banner.innerHTML = '';
//   banner.appendChild(video);
// });



window.addEventListener("load", function () {
  const menuToggle = document.getElementById("menuToggle");
  const links = document.querySelectorAll(".header-link");

  links.forEach(link => {
    link.addEventListener("click", () => {
      menuToggle.checked = false; // Close menu
    });
  });
});

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
}


function navigateToPage(pageUrl) {
  window.location.href = pageUrl;
}






// Sample review data
const reviews = [
  {
    rating: 5,
  name: "Harpreet Saini",
    content: "Excellent experience with fanbhangrede . they did really gud we want learn choreography again from fanbhangrede . The choreography they taught that was awesome everyone praised .",
    time: "4 months ago",
    avatar: "./resources/images/bitmoji-fbd/fbd-bitmoji-1.webp",
    link: "https://g.co/kgs/h2gzBHi"
  },
  {
    rating: 5,
  name: 'gursewak singh',
    content: "Bhangra enjoyable classes and amazing we all had fun learning our beautiful routine thank you Bhupinder and team",
    time: "5 months ago",
    avatar: "./resources/images/bitmoji-fbd/fbd-bitmoji-2.webp",
    link: "https://g.co/kgs/x3xsiGx"
  },
  {
    rating: 5,
  name: 'Hitesh Arora',
    content: "Great place for Bhangra lovers. The instructor Bhupinder Singh is really energetic and skilled, making the dance steps easy to follow. The music is lively, creating a fantastic atmosphere. Great workout and cultural experience – highly recommend!",
    time: "11 month ago",
    avatar: "./resources/images/bitmoji-fbd/fbd-bitmoji-3.webp",
    link: "https://g.co/kgs/khh1qo2"
  },
  {
    rating: 5,
  name: 'Jaspreet Kaur',
    content: "These Bhangra classes for kids are a fantastic way to introduce young ones to the lively and colorful world of dance. The energy and enthusiasm in the classes make learning Bhangra a truly enjoyable experience for children, combining fun with cultural learning. I highly recommend these classes for any kids interested in exploring the vibrant art of Bhangra!",
    time: "11 month ago",
    avatar: "./resources/images/bitmoji-fbd/fbd-bitmoji-4.webp",
    link: "https://g.co/kgs/eoPY4ZB"
  },
  {
    rating: 5,
  name: 'HARVINDER SINGH',
    content: "Bhangra class has an amazing crowd and a well-trained instructor. It's always fun to learn under the supervision of a skilled teacher. Will highly recommend Instructor Mr. Bhupinder Singh.",
    time: "5 month ago",
    avatar: "./resources/images/bitmoji-fbd/fbd-bitmoji-5.webp",
    link: "https://g.co/kgs/pJsTp3a"
  },
  {
    rating: 5,
  name: 'Sony',
    content: "Enjoyable classes! You learn bhangra steps while having fun! The instructor Bhupinder explains the steps and corrects my errors in a nice calm manner. I would definitely recommend joining the Rpd Academy classes",
    time: "11 month ago",
    avatar: "./resources/images/bitmoji-fbd/fbd-bitmoji-6.webp",
    link: "https://g.co/kgs/n6Fcxik"
  },
  {
    rating: 5,
  name: 'Raman Brar',
    content: "Fan Bhangra de whole team is very awesome. Bhupinder was very generous and cooperative. Team did community event at our site within very short notice. Well performed. Thanks to the whole team for making our Vaisakhi event more enjoyable and memorable.",
    time: "8 month ago",
    avatar: "./resources/images/bitmoji-fbd/fbd-bitmoji-7.webp",
    link: "https://g.co/kgs/RYsw8uB"
  },
  {
    rating: 5,
  name: 'Manpreet Kaur',
    content: "Best place to learn Bhangra as well as gidha. The coaches are really talented and they provide you needed training accordingly. This place will not only boost your confidence in dancing but will also motivate you to learn new dance skills everyday.",
    time: "1 year ago",
    avatar: "./resources/images/bitmoji-fbd/fbd-bitmoji-8.webp",
    link: "https://g.co/kgs/ZPTMwwN"
  },
]

// Function to truncate text
function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...'; // Truncate and add ellipsis
  }
  return text;
}

window.addEventListener('load', () => {
  const reviewContainer = document.getElementById('reviewContainer');

  function generateReviewCards() {
    reviewContainer.innerHTML = ''; // Clear previous content if any

    reviews.forEach((review) => {
      const reviewCard = document.createElement('div');
      reviewCard.className = 'review-card';

      const limitedContent = truncateText(review.content, 150);

      const reviewCardHeader = document.createElement('div');
      reviewCardHeader.className = 'review-card-header';
      reviewCardHeader.innerHTML = `
        <div class="review-card-left-content-header">
          <div class="review-card-avatar">
            <img src="${review.avatar}" alt="User Avatar" loading="lazy">
          </div>
          <div class="review-card-name-time">
            <div class="review-card-name"><p>${review.name}</p></div>
            <div class="review-card-time"><p>${review.time}</p></div>
          </div>
        </div>
        <div class="review-card-right-content-header">
          <a href="${review.link}" target="_blank" rel="noopener noreferrer">
            <img src="./resources/images/google-icon-review.webp" alt="Google Review Icon" loading="lazy">
          </a>
        </div>`;

      const reviewCardBody = document.createElement('div');
      reviewCardBody.className = 'review-card-body';

      const limitedContentDiv = document.createElement('div');
      limitedContentDiv.className = 'review-card-content';
      limitedContentDiv.innerHTML = `
        <div class="review-card-rating-star">
          ${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}
        </div>
        <p>${limitedContent}</p>`;

      const fullContentDiv = document.createElement('div');
      fullContentDiv.className = 'full-content';
      fullContentDiv.style.display = 'none';
      fullContentDiv.innerHTML = `<p>${review.content}</p>`;

      const toggleButton = document.createElement('button');
      toggleButton.className = 'toggle-button';
      toggleButton.innerText = 'Show More';

      toggleButton.addEventListener('click', () => {
        const isExpanded = fullContentDiv.style.display === 'block';
        fullContentDiv.style.display = isExpanded ? 'none' : 'block';
        limitedContentDiv.style.display = isExpanded ? 'block' : 'none';
        toggleButton.innerText = isExpanded ? 'Show More' : 'Show Less';
      });

      reviewCardBody.appendChild(limitedContentDiv);
      reviewCardBody.appendChild(fullContentDiv);
      reviewCardBody.appendChild(toggleButton);

      reviewCard.appendChild(reviewCardHeader);
      reviewCard.appendChild(reviewCardBody);
      reviewContainer.appendChild(reviewCard);
    });
  }

  generateReviewCards();

  // === Auto-scroll logic ===
  let scrollDirection = 'right';
  const scrollSpeed = 5;
  const scrollInterval = 30;
  let scrollIntervalId;

  function autoScroll() {
    if (!reviewContainer) return;
    if (scrollDirection === 'right') {
      reviewContainer.scrollLeft += scrollSpeed;
      if (reviewContainer.scrollLeft >= reviewContainer.scrollWidth - reviewContainer.clientWidth) {
        scrollDirection = 'left';
      }
    } else {
      reviewContainer.scrollLeft -= scrollSpeed;
      if (reviewContainer.scrollLeft <= 0) {
        scrollDirection = 'right';
      }
    }
  }

  scrollIntervalId = setInterval(autoScroll, scrollInterval);

  // Stop auto-scroll on interaction
  reviewContainer.addEventListener('touchmove', () => clearInterval(scrollIntervalId));
  reviewContainer.addEventListener('click', () => clearInterval(scrollIntervalId));

  // Stop on individual card interaction too
  reviewContainer.querySelectorAll('.review-card').forEach((card) => {
    card.addEventListener('click', () => clearInterval(scrollIntervalId));
  });
});




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


let count = document.querySelectorAll(".count")
let arr = Array.from(count)



arr.map(function (item) {
  let startnumber = 0

  function counterup() {
    startnumber++
    item.innerHTML = startnumber

    if (startnumber == item.dataset.number) {
      clearInterval(stop)
    }
  }

  let stop = setInterval(function () {
    counterup()
  }, 50)

})



const wrapper = document.querySelector('.horizontal-scroll-wrapper');
const cards = document.querySelectorAll('.services-card');

function setSpacerWidth() {
  const card = document.querySelector('.services-card');
  if (!card) return;

  const cardWidth = card.offsetWidth;
  const spacerSize = window.innerWidth /2 - cardWidth / 2;

  document.querySelectorAll('.spacer').forEach(spacer => {
    spacer.style.width = `${spacerSize}px`;
    spacer.style.flex = `0 0 ${spacerSize}px`;
  });
}

function getCardScrollAmount() {
  const card = document.querySelector('.services-card');
  const style = window.getComputedStyle(card);
  const margin = parseFloat(style.marginLeft) + parseFloat(style.marginRight);
  return card.offsetWidth + margin;
}

function getMaxScrollLeft() {
  return wrapper.scrollWidth - wrapper.clientWidth;
}

document.getElementById('scroll-left').addEventListener('click', () => {
  const scrollAmount = getCardScrollAmount();
  const newScroll = Math.max(0, wrapper.scrollLeft - scrollAmount);
  wrapper.scrollTo({ left: newScroll, behavior: 'smooth' });
});

document.getElementById('scroll-right').addEventListener('click', () => {
  const scrollAmount = getCardScrollAmount();
  const newScroll = Math.min(getMaxScrollLeft(), wrapper.scrollLeft + scrollAmount);
  wrapper.scrollTo({ left: newScroll, behavior: 'smooth' });
});

function updateActiveCard() {
  const centerX = window.innerWidth / 2;
  let closestCard = null;
  let minDistance = Infinity;

  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const cardCenter = rect.left + rect.width / 2;
    const distance = Math.abs(centerX - cardCenter);

    if (distance < minDistance) {
      minDistance = distance;
      closestCard = card;
    }
  });

  cards.forEach(card => {
    card.classList.remove('active');
  });

  if (closestCard) {
    closestCard.classList.add('active');
  }
}


// Initialize on load and resize
window.addEventListener('load', () => {
  setSpacerWidth();
  wrapper.scrollTo({ left: 0, behavior: 'smooth' });
  updateActiveCard();
});
window.addEventListener('resize', () => {
  setSpacerWidth();
  updateActiveCard();
});
wrapper.addEventListener('scroll', () => {
  requestAnimationFrame(updateActiveCard);
});

const scrollLeftBtn = document.getElementById('scroll-left');
const scrollRightBtn = document.getElementById('scroll-right');

function updateButtonsVisibility() {
  const maxScrollLeft = getMaxScrollLeft();
  const scrollLeft = wrapper.scrollLeft;

  // Hide left button if at start
  scrollLeftBtn.style.display = scrollLeft <= 0 ? 'none' : 'block';

  // Hide right button if at end (using a small buffer to handle rounding)
  scrollRightBtn.style.display = scrollLeft >= maxScrollLeft - 1 ? 'none' : 'block';
}

// Run once on load and resize
window.addEventListener('load', updateButtonsVisibility);
window.addEventListener('resize', updateButtonsVisibility);

// Update on scroll
wrapper.addEventListener('scroll', () => {
  requestAnimationFrame(() => {
    updateActiveCard();
    updateButtonsVisibility();
  });
});

// Also update after button clicks, allowing smooth scroll animation to finish
scrollLeftBtn.addEventListener('click', () => {
  setTimeout(updateButtonsVisibility, 350);
});

scrollRightBtn.addEventListener('click', () => {
  setTimeout(updateButtonsVisibility, 350);
});





document.querySelectorAll('.services-card-video').forEach(card => {
  const servicesVideo = card.querySelector('video');
  const button = card.querySelector('.play-button');
  const overlay = card.querySelector('.video-overlay');

  // Remove autoplay so it starts paused
  servicesVideo.removeAttribute('autoplay');
  servicesVideo.pause();
  overlay.style.opacity = '1'; // Start with overlay visible

  // Play/pause when clicking the play button
  button.addEventListener('click', () => {
    if (servicesVideo.paused) {
      servicesVideo.play();
      button.style.display = 'none'; // Hide button when playing
      overlay.style.opacity = '0'; // ✅ Hide overlay

    } else {
      servicesVideo.pause();
      button.style.display = 'flex';
      overlay.style.opacity = '1'; // ✅ Show overlay

    }
  });

  // 🔁 Play/pause when clicking the video itself
  servicesVideo.addEventListener('click', () => {
    if (servicesVideo.paused) {
      servicesVideo.play();
      button.style.display = 'none';
      overlay.style.opacity = '0';

    } else {
      servicesVideo.pause();
      button.style.display = 'flex';
      overlay.style.opacity = '1';

    }
  });

  // Show play button again when video ends
  servicesVideo.addEventListener('ended', () => {
    button.style.display = 'flex';
    overlay.style.opacity = '1';

  });
});



const openGalleryBtn = document.querySelectorAll('.open-gallery');
const closeGalleryBtn = document.getElementById('close-gallery');
const galleryOverlay = document.getElementById('gallery-overlay');

openGalleryBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    galleryOverlay.classList.remove('hidden');
    galleryOverlay.classList.add('active');
  });
});

// Close popup
closeGalleryBtn.addEventListener('click', () => {
  galleryOverlay.classList.remove('active');
  setTimeout(() => {
    galleryOverlay.classList.add('hidden');
  }, 500); // match transition duration
});


window.addEventListener('load', function () {
  if (window.location.hash) {
    history.replaceState(null, '', window.location.pathname);
  }
});

// Always scroll to top on refresh
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};


// const video = document.getElementById('bhangraVideo');
// const playButton = document.getElementById('playButtonBhangra');
// const overlay = document.getElementById('videoOverlayBhangra');

// playButton.addEventListener('click', () => {
//   video.play();
//   playButton.style.display = 'none';
//   overlay.style.opacity = '0';
// });

// video.addEventListener('click', () => {
//   if (!video.paused) {
//     video.pause();
//     playButton.style.display = 'block';
//     overlay.style.opacity = '0.3';
//   } else {
//     video.play();
//     playButton.style.display = 'none';
//     overlay.style.opacity = '0';
//   }
// });

// // Optional: Hide controls and prevent autoplay on load
// video.removeAttribute('autoplay');

// function setTextAnimation(delay, duration, strokeWidth, timingFunction, strokeColor,repeat) {
//   let paths = document.querySelectorAll("path");
//   let mode=repeat?'infinite':'forwards'
//   for (let i = 0; i < paths.length; i++) {
//       const path = paths[i];
//       const length = path.getTotalLength();
//       path.style["stroke-dashoffset"] = `${length}px`;
//       path.style["stroke-dasharray"] = `${length}px`;
//       path.style["stroke-width"] = `${strokeWidth}px`;
//       path.style["stroke"] = `${strokeColor}`;
//       path.style["animation"] = `${duration}s svg-text-anim ${mode} ${timingFunction}`;
//       path.style["animation-delay"] = `${i * delay}s`;
//   }
// }
// setTextAnimation(0.2,5.6,1,'ease-in-out','#f8db9c',false);