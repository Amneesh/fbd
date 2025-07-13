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




// Function to truncate text
function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...'; // Truncate and add ellipsis
  }
  return text;
}


window.addEventListener('load', () => {
  const coinDiv = document.querySelector('.coin');
  const staticImg = coinDiv.querySelector('.coin-static');

  // Remove static image
  if (staticImg) staticImg.remove();

  // Create animated img
  const animatedImg = document.createElement('img');
  animatedImg.src = './resources/images/bhangra-logo.webp'; // animated/actual logo
  animatedImg.alt = 'fan bhangre de logo';
  animatedImg.width = 150;
  animatedImg.height = 150;
  animatedImg.classList.add('coin-animated');
  animatedImg.style.width = '150px';
  animatedImg.style.height = '150px';

  coinDiv.appendChild(animatedImg);

  // Add animation class to coin
  coinDiv.classList.add('animate');
});



window.addEventListener('load', () => {
  const images = [
    "./resources/videos/main-landing-1.webp",
    "./resources/videos/main-landing-2.webp",
    "./resources/videos/main-landing-3.webp"
  ];

  const container = document.getElementById("carouselContainer");

  images.forEach((src, index) => {
    const slideDiv = document.createElement("div");
    slideDiv.className = "auto-slide";
    if (index === 0) slideDiv.classList.add("active");

    const img = document.createElement("img");
    img.src = src;
    img.alt = `Team ${index + 1}`;

    slideDiv.appendChild(img);
    container.appendChild(slideDiv);
  });

  // Start carousel autoplay
  let autoIndex = 0;
  const slides = document.querySelectorAll(".auto-slide");

  function showAutoSlides() {
    slides.forEach(slide => slide.classList.remove("active"));
    autoIndex = (autoIndex + 1) % slides.length;
    slides[autoIndex].classList.add("active");
  }

  if (slides.length > 0) {
    setInterval(showAutoSlides, 5000);
  }
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





const serviceCards = document.querySelectorAll('.services-card-video');

serviceCards.forEach(card => {
  const servicesVideo = card.querySelector('video');
  const button = card.querySelector('.play-button');
  const overlay = card.querySelector('.video-overlay');

  // Remove autoplay so it starts paused
  servicesVideo.removeAttribute('autoplay');
  servicesVideo.pause();
  overlay.style.opacity = '1'; // Show overlay initially

  const pauseAllOtherVideos = () => {
    serviceCards.forEach(otherCard => {
      if (otherCard !== card) {
        const otherVideo = otherCard.querySelector('video');
        const otherButton = otherCard.querySelector('.play-button');
        const otherOverlay = otherCard.querySelector('.video-overlay');

        otherVideo.pause();
        otherButton.style.display = 'flex';
        otherOverlay.style.opacity = '1';
      }
    });
  };

  const playVideo = () => {
    pauseAllOtherVideos();
    servicesVideo.play();
    button.style.display = 'none';
    overlay.style.opacity = '0';
  };

  const pauseVideo = () => {
    servicesVideo.pause();
    button.style.display = 'flex';
    overlay.style.opacity = '1';
  };

  // Button click handler
  button.addEventListener('click', () => {
    if (servicesVideo.paused) {
      playVideo();
    } else {
      pauseVideo();
    }
  });

  // Video click handler
  servicesVideo.addEventListener('click', () => {
    if (servicesVideo.paused) {
      playVideo();
    } else {
      pauseVideo();
    }
  });

  // When video ends, show overlay and button again
  servicesVideo.addEventListener('ended', () => {
    button.style.display = 'flex';
    overlay.style.opacity = '1';
  });
});


async function fetchAndShowGallery() {
  try {
    // Step 1: Get media list
    const res = await fetch('https://aura-snap-backend.vercel.app/api/media');
    const files = await res.json();

    // Select gallery container
    const galleryGrid = document.querySelector('.gallery-grid');
    if (!galleryGrid) {
      console.error('No element with class "gallery-grid" found');
      return;
    }
    galleryGrid.innerHTML = ''; // Clear existing images

    // Step 2: For each file, fetch real signed URL
    const mediaWithUrls = await Promise.all(
      files.map(async (file) => {
        const signedRes = await fetch(`https://aura-snap-backend.vercel.app${file.signedUrl}`);
        const signedData = await signedRes.json();
        return {
          key: file.key,
          title: file.title,
          url: signedData.signedUrl,
        };
      })
    );

    // Append images to gallery-grid
    mediaWithUrls.forEach((item) => {
      const img = document.createElement('img');
      img.src = item.url;
      img.alt = item.title || 'Image';
      img.style.width = '100%';
      img.style.height = 'auto';
      img.style.objectFit = 'cover';
      galleryGrid.appendChild(img);
    });
  } catch (error) {
    console.error('Error fetching gallery:', error);
  }
}

// Call this function whenever you want to load images, e.g., after page load or button click
window.addEventListener('load', () => {
  fetchAndShowGallery();
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
document.querySelector("form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;
  const formSuccess = document.querySelector("#form-status-success");
  const formFail = document.querySelector("#form-status-fail");

  const form = document.querySelector("form");
  console.log(name , email , message)
  try {
    const res = await fetch("https://email-backend-live.vercel.app/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (!res.ok) throw new Error("Server error");
    const data = await res.json();
    form.style.display = "none";
    formSuccess.style.display ='flex';

  
  } catch (err) {
   
    formFail.style.display ='flex';
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById('toggleSocial');
  const socialPopup = document.getElementById('socialPopup');

  toggleBtn.addEventListener('click', () => {
    socialPopup.classList.toggle('hidden');
    toggleBtn.classList.toggle('active'); // <--- Add this line
  });
});


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