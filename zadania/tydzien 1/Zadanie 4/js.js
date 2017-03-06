
(function ($) {
 
 $(document).ready(function() {

   
     $('#add').click(function(e) {    
          
var tekst = $.trim($("#form").val());
console.log(tekst);
         
var wrzutka = ("<li>"+ tekst +"</li>")
if (tekst === ""){
    e.preventDefault();
      } else {
          
        $("ul.ul").append(wrzutka)
$("#form").val("");  
      }




       }
     
     
     
     
)});    
    
})(jQuery);