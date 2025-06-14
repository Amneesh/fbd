AOS.init();

var headerMenu = document.getElementById('header-menu-mobile');

function openMenu() {
  headerMenu.setAttribute('class', 'bloom-mobile-header nav-visible');
}
function closeMenu() {
  headerMenu.removeAttribute('class', ' bloom-mobile-header nav-visible');
  headerMenu.setAttribute('class', ' bloom-mobile-header');
}
openNavButton.addEventListener("click", function (event) {
  openMenu();
})

closeNavButton.addEventListener("click", function (event) {
  closeMenu();
})

var navLinks = document.querySelectorAll('.nav .header-link, .nav a:not(.header-link)');
navLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    closeMenu();
  });
});


function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
}


function navigateToPage(pageUrl) {
  window.location.href = pageUrl;
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.scroll-review-container');

  // Define scroll speed and interval
  const scrollSpeed = 3; // Adjust scroll speed (higher value for faster scrolling)
  const scrollInterval = 30; // Adjust scroll interval in milliseconds
  let scrollDirection = 'right'; // Initial scroll direction

  // Function to scroll container automatically
  function autoScroll() {
    if (scrollDirection === 'right') {
      container.scrollLeft += scrollSpeed;
      // Check if reached end of scroll
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        scrollDirection = 'left';
      }
    } else if (scrollDirection === 'left') {
      container.scrollLeft -= scrollSpeed;
      // Check if scrolled back to start
      if (container.scrollLeft <= 0) {
        scrollDirection = 'right';
      }
    }
  }

  // Start auto-scrolling
  let scrollIntervalId = setInterval(autoScroll, scrollInterval);

  // Stop auto-scrolling when mouse enters container
  container.addEventListener('mouseenter', () => {
    clearInterval(scrollIntervalId);
  });

  // Resume auto-scrolling when mouse leaves container
  container.addEventListener('mouseleave', () => {
    scrollIntervalId = setInterval(autoScroll, scrollInterval);
  });

  // Optional: Stop auto-scrolling when clicking on a card
  const cards = document.querySelectorAll('.review-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      clearInterval(scrollIntervalId);
    });
  });
});



// Sample review data
const reviews = [
  {
    rating: 5,
  name: "Harpreet Saini",
    content: "Excellent experience with fanbhangrede . they did really gud we want learn choreography again from fanbhangrede . The choreography they taught that was awesome everyone praised .",
    time: "4 months ago",
    avatar: "./resources/images/bitmoji-fbd/fbd-bitmoji-1.png",
    link: "https://g.co/kgs/h2gzBHi"
  },
  {
    rating: 5,
  name: 'gursewak singh',
    content: "Bhangra enjoyable classes and amazing we all had fun learning our beautiful routine thank you Bhupinder and team",
    time: "5 months ago",
    avatar: "./resources/images/bitmoji-fbd/fbd-bitmoji-2.png",
    link: "https://g.co/kgs/x3xsiGx"
  },
  {
    rating: 5,
  name: 'Hitesh Arora',
    content: "Great place for Bhangra lovers. The instructor Bhupinder Singh is really energetic and skilled, making the dance steps easy to follow. The music is lively, creating a fantastic atmosphere. Great workout and cultural experience – highly recommend!",
    time: "11 month ago",
    avatar: "./resources/images/bitmoji-fbd/fbd-bitmoji-3.png",
    link: "https://g.co/kgs/khh1qo2"
  },
  {
    rating: 5,
  name: 'Jaspreet Kaur',
    content: "These Bhangra classes for kids are a fantastic way to introduce young ones to the lively and colorful world of dance. The energy and enthusiasm in the classes make learning Bhangra a truly enjoyable experience for children, combining fun with cultural learning. I highly recommend these classes for any kids interested in exploring the vibrant art of Bhangra!",
    time: "11 month ago",
    avatar: "./resources/images/bitmoji-fbd/fbd-bitmoji-4.png",
    link: "https://g.co/kgs/eoPY4ZB"
  },
  {
    rating: 5,
  name: 'HARVINDER SINGH',
    content: "Bhangra class has an amazing crowd and a well-trained instructor. It's always fun to learn under the supervision of a skilled teacher. Will highly recommend Instructor Mr. Bhupinder Singh.",
    time: "5 month ago",
    avatar: "./resources/images/bitmoji-fbd/fbd-bitmoji-5.png",
    link: "https://g.co/kgs/pJsTp3a"
  },
  {
    rating: 5,
  name: 'Sony',
    content: "Enjoyable classes! You learn bhangra steps while having fun! The instructor Bhupinder explains the steps and corrects my errors in a nice calm manner. I would definitely recommend joining the Rpd Academy classes",
    time: "11 month ago",
    avatar: "./resources/images/bitmoji-fbd/fbd-bitmoji-6.png",
    link: "https://g.co/kgs/n6Fcxik"
  },
  {
    rating: 5,
  name: 'Raman Brar',
    content: "Fan Bhangra de whole team is very awesome. Bhupinder was very generous and cooperative. Team did community event at our site within very short notice. Well performed. Thanks to the whole team for making our Vaisakhi event more enjoyable and memorable.",
    time: "8 month ago",
    avatar: "./resources/images/bitmoji-fbd/fbd-bitmoji-7.png",
    link: "https://g.co/kgs/RYsw8uB"
  },
  {
    rating: 5,
  name: 'Manpreet Kaur',
    content: "Best place to learn Bhangra as well as gidha. The coaches are really talented and they provide you needed training accordingly. This place will not only boost your confidence in dancing but will also motivate you to learn new dance skills everyday.",
    time: "1 year ago",
    avatar: "./resources/images/bitmoji-fbd/fbd-bitmoji-8.png",
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

function generateReviewCards() {
  const reviewContainer = document.getElementById('reviewContainer');
  reviewContainer.innerHTML = ''; // Clear existing content

  reviews.forEach(review => {
    const reviewCard = document.createElement('div');
    reviewCard.className = 'review-card';

    // Limit the review content to 100 characters
    const limitedContent = truncateText(review.content, 150);

    // Create elements for review card
    const reviewCardHeader = document.createElement('div');
    reviewCardHeader.className = 'review-card-header';
    reviewCardHeader.innerHTML = `

                                <div class="review-card-left-content-header">
                                    <div class="review-card-avatar">
                                    
 <img src="${review.avatar}" alt="User Avatar">
                                      </div>
                                     <div class="review-card-name-time">
                                       <div class="review-card-name">  <p>${review.name}</p></div>
                                       <div class="review-card-time"><p>${review.time}</p></div>
                                     </div>
                                </div>
                                <div class="review-card-right-content-header">
                                    <a href="${review.link}" target= "_blank">
                                              <img src="./resources/images/google-icon-review.png" alt="">
    
                                    </a>
                                </div>

                               
                               

    
          
         
      `;

    const reviewCardBody = document.createElement('div');
    reviewCardBody.className = 'review-card-body';

    const limitedContentDiv = document.createElement('div');
    limitedContentDiv.className = 'review-card-content';
    limitedContentDiv.innerHTML = `
     <div class="review-card-rating-star">
              ${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)} <!-- Display stars -->
          </div>
    <p>${limitedContent}</p>
    `;

    const fullContentDiv = document.createElement('div');
    fullContentDiv.className = 'full-content';
    fullContentDiv.style.display = 'none'; // Initially hidden
    fullContentDiv.innerHTML = `<p>${review.content}</p>`;

    const toggleButton = document.createElement('button');
    toggleButton.className = 'toggle-button';
    toggleButton.innerText = 'Show More';

    // Add toggle functionality
    toggleButton.addEventListener('click', () => {
      if (fullContentDiv.style.display === 'none') {
        fullContentDiv.style.display = 'block';
        toggleButton.innerText = 'Show Less';
        limitedContentDiv.style.display = 'none'; // Hide the truncated content
      } else {
        fullContentDiv.style.display = 'none';
        toggleButton.innerText = 'Show More';
        limitedContentDiv.style.display = 'block'; // Show the truncated content
      }
    });

    // Append elements to the review card body
    reviewCardBody.appendChild(limitedContentDiv);
    reviewCardBody.appendChild(fullContentDiv);
    reviewCardBody.appendChild(toggleButton);

    const reviewCardFooter = document.createElement('div');
    

    // Append all parts to the review card
    reviewCard.appendChild(reviewCardHeader);
    reviewCard.appendChild(reviewCardBody);

    // Append the review card to the container
    reviewContainer.appendChild(reviewCard);
  });
}


// Call the function to generate review cards
generateReviewCards();





let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

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
// setInterval(() => {
//   plusSlides(1);
// }, 5000);


// counter

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

// counter


// const { ScrollObserver, valueAtPercentage } = aat

// const cardsContainer = document.querySelector('.cards')
// const cards = document.querySelectorAll('.card')
// cardsContainer.style.setProperty('--cards-count', cards.length)
// cardsContainer.style.setProperty(
//   '--card-height',
//   `${cards[0].clientHeight}px`
// )
// Array.from(cards).forEach((card, index) => {
//   const offsetTop = 20 + index * 20
//   card.style.paddingTop = `${offsetTop}px`
//   if (index === cards.length - 1) {
//     return
//   }
//   const toScale = 1 - (cards.length - 1 - index) * 0.1
//   const nextCard = cards[index + 1]
//   const cardInner = card.querySelector('.card__inner')
//   ScrollObserver.Element(nextCard, {
//     offsetTop,
//     offsetBottom: window.innerHeight - card.clientHeight
//   }).onScroll(({ percentageY }) => {
//     cardInner.style.scale = valueAtPercentage({
//       from: 1,
//       to: toScale,
//       percentage: percentageY
//     })
//     cardInner.style.filter = `brightness(${valueAtPercentage({
//       from: 1,
//       to: 0.6,
//       percentage: percentageY
//     })})`
//   })
// })

const wrapper = document.querySelector('.horizontal-scroll-wrapper');
const cards = document.querySelectorAll('.services-card');

function setSpacerWidth() {
  const card = document.querySelector('.services-card');
  if (!card) return;

  const cardWidth = card.offsetWidth;
  const spacerSize = window.innerWidth / 2 - cardWidth / 1;

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

  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const cardCenter = rect.left + rect.width / 2;
    const distance = Math.abs(centerX - cardCenter);
    if (distance < card.offsetWidth / 2) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  });
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