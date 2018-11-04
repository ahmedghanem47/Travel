$('.tour').click(function(){
    $('html,body').animate({
      scrollTop: $('#tour').offset().top
    },2000);
  });
  $('.about').click(function(){
    $('html,body').animate({
      scrollTop: $('#about').offset().top
    },2000);
  });
  $('.pages').click(function(){
    $('html,body').animate({
      scrollTop: $('#pages').offset().top
    },2000);
  });
  $('.blog').click(function(){
    $('html,body').animate({
      scrollTop: $('#blog').offset().top
    },2000);
  });
  $('.contact').click(function(){
    $('html,body').animate({
      scrollTop: $('#contact').offset().top
    },2000);
  });
  $(document).scroll(function(){
 
    $('#element-to-animate').waypoint(function() {
        $('#element-to-animate').addClass('animated fadeInDown');
    },{ offset: '100%' });
   
  });
  $(document).scroll(function(){
 
    $('#element-to-animate').waypoint(function() {
        $('#card').addClass('animated fadeInRight');
    },{ offset: '80%' });
   
  });
  $(document).scroll(function(){
 
    $('#card').waypoint(function() {
        $('#cards').addClass('animated zoomInUp');
    },{ offset: '50%' });
   
  });
  $(document).scroll(function(){
    $('#cards').waypoint(function() {
        $('#cards-link').addClass('animated flip');
    },{offset:'30%'});
   
  });
  $(document).scroll(function(){
    $('#cards-link').waypoint(function() {
        $('#why-us').addClass('animated bounceInLeft');
    },{offset:'60%'});
   
  });
  $(document).scroll(function(){
    $('#cards-link').waypoint(function() {
        $('#why-us-card').addClass('animated bounceInRight');
    },{offset:'50%'});
   
  });
  $(document).scroll(function(){
    $('#why-us-card').waypoint(function() {
        $('#our-clients').addClass('animated fadeInLeft');
    },{offset:'10%'});
   
  });
  $(document).scroll(function(){
    $('#our-clients').waypoint(function() {
        $('#our-clients-box1').addClass('animated rotateInDownLeft');
    },{offset:'80%'});
   
  });
  $(document).scroll(function(){
    $('#our-clients').waypoint(function() {
        $('#our-clients-box2').addClass('animated rotateIn');
    },{offset:'80%'});
  });
  $(document).scroll(function(){
    $('#our-clients').waypoint(function() {
        $('#our-clients-box3').addClass('animated rotateInDownRight');
    },{offset:'80%'});
  });
  $(document).scroll(function(){
    $('#our-clients-box1').waypoint(function() {
        $('#our-clients-link').addClass('animated flip');
    },{offset:'30%'});
  });
  $(document).scroll(function(){
    $('#our-clients-link').waypoint(function() {
        $('#trip').addClass('animated bounceInRight');
    },{offset:'50%'});
  });
  $(document).scroll(function(){
    $('#trip').waypoint(function() {
        $('#contact-us-box1').addClass('animated rotateInDownLeft');
    });
  });
  $(document).scroll(function(){
    $('#trip').waypoint(function() {
        $('#contact-us-box2').addClass('animated rotateIn');
    });
  });
  $(document).scroll(function(){
    $('#trip').waypoint(function() {
        $('#contact-us-box3').addClass('animated rotateInDownRight');
    });
  });
  $(document).scroll(function(){
    $('#trip').waypoint(function() {
        $('#contact-us-link').addClass('animated flip');
    },{offset:'50%'});
  });
  $(document).scroll(function(){
    $('#trip').waypoint(function() {
        $('#footer').addClass('animated flip');
    });
  });