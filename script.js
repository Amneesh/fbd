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
  navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
          closeMenu();
      });
  });
  

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

