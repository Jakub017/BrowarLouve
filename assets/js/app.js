// Change menu's color
const navbar = document.querySelector("nav");
const logo = document.querySelector(".logo");


window.addEventListener("scroll", function () {
  navbar.classList.toggle("sticky", window.scrollY > 0);
  logo.src = "../img/logo_czarne.png";
})




//Slider
$("#autoWidth").lightSlider({
  onSliderLoad: function (el) {
    let maxHeight = 0,
      container = $(el),
      children = container.children();
    children.each(function () {
      let childHeight = $(this).height();
      if (childHeight > maxHeight) {
        maxHeight = childHeight + 16;
      }
    });
    container.height(maxHeight);
  },
  autoWidth: true,
  loop: true,
  slideMove: 1,
  auto: true,
  pauseOnHover: true,
  easing: "cubic-bezier(0.25, 0, 0.25, 1)",
  speed: 600,
});

// Menu mobile 
const hamburger = document.querySelector('.hamburger-container');
const close = document.querySelector('.fa-times');
const menu = document.querySelector('.mobile');
const optionsMobile = document.querySelectorAll('.mobile a');

function toggleMenu() {
  menu.classList.toggle('active');
}

hamburger.addEventListener('click', function () {
  toggleMenu();
})

optionsMobile.forEach((option) => {
  option.addEventListener('click', function () {
    toggleMenu();
  })
})

close.addEventListener('click', function () {
  toggleMenu();
})



//Stats counting
// const counters = document.querySelectorAll(".stat-value");
// const speed = 100;

// function counting() {
//   counters.forEach(counter => {
//     const updateCount = () => {
//       const target = +counter.getAttribute("data-target");
//       const count = +counter.innerText;

//       const inc = target / speed;

//       if (count < target) {
//         counter.innerText = Math.ceil(count + inc);
//         setTimeout(updateCount, 250);
//       } else {
//         count.innerText = target;
//       }
//     }
//     updateCount();
//   });
// }


//Visible elements
const $windowHeight = $(window).height();
const $aboutItem1 = $('.about-item:nth-child(1)');
const $aboutItem1FromTop = $aboutItem1.offset().top;
const $aboutItem1Height = $aboutItem1.outerHeight();
const $aboutItem2 = $('.about-item:nth-child(2)');
const $aboutItem2FromTop = $aboutItem2.offset().top;
const $aboutItem2Height = $aboutItem2.outerHeight();
const $aboutItem3 = $('.about-item:nth-child(3)');
const $aboutItem3FromTop = $aboutItem3.offset().top;
const $aboutItem3Height = $aboutItem3.outerHeight();
const $aboutItem4 = $('.about-item:nth-child(4)');
const $aboutItem4FromTop = $aboutItem4.offset().top;
const $aboutItem4Height = $aboutItem4.outerHeight();
const $beer = $('.beer');
const $beerFromTop = $beer.offset().top;
const $beerHeight = $beer.outerHeight();

const $stat = $('.stat-icon.first');
const $statFromTop = $stat.offset().top;
const $statHeight = $stat.outerHeight();

$(document).on('scroll', function () {
  let $scrollValue = $(this).scrollTop();
  console.log($scrollValue);
  if ($scrollValue > $aboutItem1Height + $aboutItem1FromTop - $windowHeight) {
    $aboutItem1.addClass('active');
  }
  if ($scrollValue > $aboutItem2Height + $aboutItem2FromTop - $windowHeight) {
    $aboutItem2.addClass('active');
  }
  if ($scrollValue > $aboutItem3Height + $aboutItem3FromTop - $windowHeight) {
    $aboutItem3.addClass('active');
  }
  if ($scrollValue > $aboutItem4Height + $aboutItem4FromTop - $windowHeight) {
    $aboutItem4.addClass('active');
  }
  if ($scrollValue > $beerHeight + $beerFromTop - $windowHeight) {
    $beer.addClass('active');
  }
})


const navHeight = 100;
const aboutBrewery = document.querySelector('#about');
const tutorial = document.querySelector('section#tutorial');
const brews = document.querySelector("#brews");
const aboutMe = document.querySelector('#about-me');
const footer = document.querySelector('footer');
const start = document.querySelector('header');

const aboutBreweryButtons = [...document.querySelectorAll('.about-brewery-button')];
const brewsButtons = [...document.querySelectorAll('.brews-button')];
const aboutMeButtons = [...document.querySelectorAll('.about-me-button')];
const tutorialButton = document.querySelector('.welcome button a');
const footerButtons = [...document.querySelectorAll('.footer-button')];
const startButtons = [...document.querySelectorAll('.start-button')];



function scrollToAboutBrewery() {
  let aboutBreweryPosition = aboutBrewery.getBoundingClientRect().top;
  let aboutBreweryOffsetPosition = aboutBreweryPosition + window.pageYOffset - navHeight;

  window.scrollTo({
    top: aboutBreweryOffsetPosition,
    behavior: "smooth"
  });
}

function scrollToTutorial() {
  let tutorialPosition = tutorial.getBoundingClientRect().top;
  let tutorialOffsetPosition = tutorialPosition + window.pageYOffset - navHeight;

  window.scrollTo({
    top: tutorialOffsetPosition,
    behavior: "smooth"
  });
}

function scrollToBrews() {
  let brewsPosition = brews.getBoundingClientRect().top;
  let brewsOffsetPosition = brewsPosition + window.pageYOffset - navHeight;

  window.scrollTo({
    top: brewsOffsetPosition,
    behavior: "smooth"
  });
}

function scrollToAboutMe() {
  let aboutMePosition = aboutMe.getBoundingClientRect().top;
  let aboutMeOffsetPosition = aboutMePosition + window.pageYOffset - navHeight;

  window.scrollTo({
    top: aboutMeOffsetPosition,
    behavior: "smooth"
  });
}

function scrollToFooter() {
  let footerPosition = footer.getBoundingClientRect().top;
  let footerOffsetPosition = footerPosition + window.pageYOffset - navHeight;

  window.scrollTo({
    top: footerOffsetPosition,
    behavior: "smooth"
  });
}

function scrollToStart() {
  let startPosition = start.getBoundingClientRect().top;
  let startOffsetPosition = startPosition + window.pageYOffset - navHeight;

  window.scrollTo({
    top: startOffsetPosition,
    behavior: "smooth"
  });
}

aboutBreweryButtons.forEach(button => {
  button.addEventListener('click', scrollToAboutBrewery);
})

brewsButtons.forEach(button => {
  button.addEventListener('click', scrollToBrews);
})

aboutMeButtons.forEach(button => {
  button.addEventListener('click', scrollToAboutMe);
})

footerButtons.forEach(button => {
  button.addEventListener('click', scrollToFooter);
})

startButtons.forEach(button => {
  button.addEventListener('click', scrollToStart);
})

tutorialButton.addEventListener('click', scrollToTutorial);