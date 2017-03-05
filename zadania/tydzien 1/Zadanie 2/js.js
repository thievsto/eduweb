
(function ($) {
 
 $(document).ready(function() {
    
  $('#check1').click(function() {    
  
    $("div.grid.grid-12").toggleClass("selection");
      console.log("klik1");
});
     
     $('#check2').click(function() {    
  
        
    $(".nav a[href^='http'").parent().toggleClass("selection");
      console.log("klik2");
});
     
 $('#check3').click(function() {    
  
    $("input:radio, input:checkbox").filter("[checked!=checked]").parent().toggleClass("selection");
      console.log("klik3");
});    
   
 $('#check4').click(function() {    
  
    $("div#text>p:empty:first").parent().toggleClass("selection");
      console.log("klik4");
});   
 $('#check5').click(function() {    
  
    $(".pagination-item:not(span)").parent().toggleClass("selection");
      console.log("klik5");
});  
     
     
});
})(jQuery);