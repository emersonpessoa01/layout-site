$(function(){ /*"menu-btn" é o seletor ou classe */
   $(".menu-btn").click(function(){
       $(".navbar .menu").toggleClass("active");
       $(".menu-btn i").toggleClass("active");
   }) 
})