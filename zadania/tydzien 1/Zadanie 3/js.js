
(function ($) {
 
 $(document).ready(function() {

     
$(".menu").hide();
$(".hamburger").click(function() {
$( ".menu" ).slideToggle( "slow", function() {
        });
});
 
 });    
    
})(jQuery);