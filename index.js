//Change nav background color on scroll
let offset = $('#white').offset().top;
let green = $('#green').offset().top;
let yellow = $('#yellow').offset().top;
let red = $('#red').offset().top;
let navbar = $('.navigation-container');
let navlinks = $('.nav-links, .navigation-container a');

$(document).scroll(function() {
  position = $(this).scrollTop();
  if (position < offset) {
    navbar.css({
      'background-color': '#0032D3',
      'color': 'white',
      'transition-property': 'background-color',
      'transition-duration': '0.4s',
      'transition-timing-function': 'linear'
    });
    navlinks.css('color', 'white');
  }
  if (position > green && position < yellow) {
    navbar.css({
      'background-color': '#3FEFE6',
      'color': '#282C34',
      'transition-property': 'background-color',
      'transition-duration': '0.4s',
      'transition-timing-function': 'linear'
    });
    navlinks.css('color', '#282C34');
  }
  if (position > yellow && position < red) {
    navbar.css({
      'background-color': '#D2F97A',
      'color': '#282C34',
      'transition-property': 'background-color',
      'transition-duration': '0.4s',
      'transition-timing-function': 'linear'
    });
    navlinks.css('color', '#282C34');
  }
  if (position > offset && position < green) {
    navbar.css({
      'background-color': '#E6EEFF',
      'color': '#0032D3',
      'transition-property': 'background-color',
      'transition-duration': '0.4s',
      'transition-timing-function': 'linear'
    });
    navlinks.css('color', '#0032D3');
  }
  if (position > red) {
    navbar.css({
      'background-color': '#ff7fb6',
      'color': '#282C34',
      'transition-property': 'background-color',
      'transition-duration': '0.4s',
      'transition-timing-function': 'linear'
    });
    navlinks.css('color', '#282C34');
  }
});


//scrolling on link click functionality
$('.name').click( (e) => {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: 0
    }, 2000);
    return false;
});

$( ".workIcon" ).click((e) => {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $("#projects-section").offset().top
  }, 2000);
});

$( ".contactIcon" ).click((e) => {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $("#box2").offset().top
  }, 2000);
});
