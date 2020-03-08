$(document).ready(function () {
    
   $('.navbar li').click(function (e) { 

       e.preventDefault();

       $('.navbar li').removeClass('active');

       $(this).addClass('active');
       
       $('body, html').animate({

        scrollTop: $($(this).data('scroll')).offset().top + 1

     }, 1000);

   });

   $(window).scroll(() => {
    
        $('.block').each( function () {

            if ($(window).scrollTop() > $(this).offset().top ) {

                var blocId = $(this).attr('id');

                $('.navbar li').removeClass('active');

                $('.navbar li[data-scroll="'+ '#' + blocId + '"]').addClass('active')
                
            
            }
            
        })

   })


   $('input').focus(function (e) { 
       e.preventDefault();

       
       
   });

   $('input').blur(function () { 
       

       if ($(this).val() == '') {
           
            console.log("empty");
            
           
        }

       
   });

   

   


});