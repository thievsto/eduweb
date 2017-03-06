(function ($) {
  $(document).ready(function() {
     
     
     var button = $("#button");
     var url = 'https://jsonplaceholder.typicode.com/users';
 
      
     button.on("click", function(){
         
                
    $.getJSON(url).then(function(data){
              
   // var items = [];
     $.each( data, function( key, val ) {
     
         var id = val.id
         var name = val.name
         var username = val.username
         var email = val.email
         var phone = val.phone
         
    
 $(".ul").append("<li>"+ "<span class='s1'>"+name +"</span> "+ "<span class='s2'> "+username+"</span><span class='s3'>"+email +"</span> <span class='s4'> "+ phone+"</span></li>");
         
         
console.log(id + name);
   //items.push( val.id, val.name, val.phone);
  
     })
        })
            
                  
   
    
    });
  });

   
    
})(jQuery);