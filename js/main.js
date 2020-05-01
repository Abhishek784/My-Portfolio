$(document).ready(function(){

    let $btns=$('.programming-area .button-group button');

    $btns.click(function(e){

        $('.programming-area .button-group button').removeClass('active');
        e.target.classList.add("active");

        let selector=$(e.target).attr('data-filter');
        $('.programming-area .grid').isotope({
            filter:selector
        });
        return false;
    })

    $('.programming-area .button-group #btn1').trigger('click');

    $('.programming-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery:{enabled:true}
      });


      //owl -carausel
      $('.site-main .about-area .owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            544:{
                items:2
            }
        }

      });



});