// Initiate the wowjs
new WOW().init();

AOS.init({
  duration: 1000
});


document.querySelectorAll('.dropdown-parent > a').forEach(link => {
  link.addEventListener('click', (e) => {
    const dropdown = link.nextElementSibling;
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    } else {
      dropdown.style.display = "block";
    }
  });
});

// footer read more

$('.moreless-button').click(function () {
  $('.moretext').slideToggle();
  if ($('.moreless-button').text() == "Read more") {
    $(this).text("Read less")
  } else {
    $(this).text("Read more")
  }
});

$(function () {
  // Owl Carousel
  var owl = $(".testmonial_slider");
  owl.owlCarousel({
    items: 3,
    margin: 10,
    loop: true,
    dots: true,
    mouseDrag: true,
    nav: false,
    navText: [
      '<i class="fa-solid fa-arrow-left-long"></i>',
      '<i class="fa-solid fa-arrow-right-long"></i>'
    ],
    responsive: {
      0: {
        items: 1
      }
    }
  });
});


// counter start
function animateCounter(element, target) {
  let count = 0;
  const screenSize = window.innerWidth;
  const speed = screenSize < 768 ? 100 : 200;
  const increment = target / speed;

  const updateCounter = () => {
    count += increment;
    if (count >= target) {
      element.textContent = target;
    } else {
      element.textContent = Math.ceil(count);
      requestAnimationFrame(updateCounter);
    }
  };

  updateCounter();
}

// Trigger counter on page load or when in view
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".number");

  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute("data-target"));
    animateCounter(counter, target);
  });
});

$(document).ready(function () {
  $('.accordion-button').on('click', function () {
    $('.accordion-item').removeClass('active');
    if (!$(this).hasClass('collapsed')) {
      $(this).closest('.accordion-item').addClass('active');
    }
  });
});

function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');

    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    event.target.classList.add('active');
}
$(document).ready(function(){
  $(".blog-mainbanner").owlCarousel({
    items: 1,
    loop: true,
    margin: 20,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    navText: [
      '<i class="fa-solid fa-arrow-left-long"></i>',
      '<i class="fa-solid fa-arrow-right-long"></i>'
    ],
    responsive: {
      0: { items: 1 },
      768: { items: 1 },
      1024: { items: 1 }
    }
  });
});
