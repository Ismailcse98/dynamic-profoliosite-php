// navbar section start
let menu = document.querySelector('#menu-btn'); 
let navbar = document.querySelector('.header .navbar');
menu.onclick=()=>{
	menu.classList.toggle('fa-times');
	navbar.classList.toggle('active');
}
// navbar section end

// progressBars section start
const skillSection = document.getElementById('section-position');
const progressBars = document.querySelectorAll('.skill-progress-bar');

function showProgress(){
    progressBars.forEach(progressBar=>{
        const value = progressBar.dataset.progress;
        progressBar.style.width = `${value}%`;
    });
}
function hideProgress(){
    progressBars.forEach(progressBar=>{
        const value = progressBar.dataset.progress;
        progressBar.style.width = 0;
    });
}

window.addEventListener('scroll',()=>{
    const sectionPos = skillSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;

    if(sectionPos<screenPos){
        showProgress()
    }else{
        hideProgress()
    }
});
// progressBars section end

// Plugin Custom code 
$(document).ready(function(){
    //===================================
    // jquery.animatedheadline code
    $('.animated').animatedHeadline({
        animationType: 'clip'
    });

    // init Isotope
    var $grid = $('.portfolio-items').isotope({
      // options
    });
    // filter items on button click
    $('.portfolio-menu').on( 'click', 'li', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });
    $('.portfolio-menu').on( 'click', 'li', function() {
        $(this).addClass('active').siblings().removeClass('active');
    });
    // Isotope code end
    // Scroll to top
    $('.totop').tottTop({
        scrollTop:0
    });

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:3,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:1500,
        autoplayHoverPause:false,
        responsive:{
        0:{
            items:1
        },
        700:{
            items:2
        },
        1000:{
            items:3
        }
    }
    });
})