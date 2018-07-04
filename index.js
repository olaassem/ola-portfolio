//Change nav background color on scroll
let offset = $('main').offset().top;
let navbar = $('.navigation-container');
let navlinks = $('.nav-links, .navigation-container a');

$(document).scroll(function() {
    position = $(this).scrollTop();
    if (position < offset){
        navbar.css({'background-color':'#0032D3','color':'white' });
        navlinks.css('color','white');
    }else{
        navbar.css({'background-color':'#E6EEFF', 'color':'#0032D3' });
        navlinks.css('color','#0032D3');
    }
});
