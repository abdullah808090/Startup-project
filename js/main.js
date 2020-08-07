$(document).ready(function(){
    
    //STICKY MANU
    
    $(".js-services").waypoint(function(direction){
        if(direction == "down"){
            $("nav").addClass("sticky");
           }  else{
            $("nav").removeClass("sticky"); 
           }
    });
    
    //active
    
    $('.active-btn').scrollWatchMapTo('nav ul li');
    
    
});
//MOBILE MANU

function openNav(){
    document.getElementById("myNav").style.width="100%";
}
function closeNav(){
    document.getElementById("myNav").style.width="0%";
}