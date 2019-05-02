$(document).ready(function(){


$(document).keydown(function (e) {
    switch (e.which) {
        case 37: //left arrow key
            $(".zebra").finish().animate({
                left: "-=50"
            });
            break;
        case 38: //up arrow key
            $(".zebra").finish().animate({
                top: "-=50"
            });
            break;
        case 39: //right arrow key
            $(".zebra").finish().animate({
                left: "+=50"
            });
            break;
        case 40: //bottom arrow key
            $(".zebra").finish().animate({
                top: "+=50"
            });
            break;
    }
    var zebraLeft = $(".zebra").offset().left;
    if(zebraLeft >= 800){
        $(".zebraImg").attr("src","../gif/flying.gif" ).width = "400";
    }if(zebraLeft <= 809){
        $(".zebraImg").attr("src","../images/zebraa.png");
    }
    
    var zebraLeft = $(".zebra").offset().left;
    if(zebraLeft <= 250){
        $(".zebraImg").attr("src","../gif/flying.gif" ).width = "400";
    }
    
    
//    var zebraRight = $(".zebra").offset().right;
//    if(zebraRight <= 200){
//     $(".zebraImg").attr("src","../gif/flying.gif");
//    }
//    } else if(zebraRight >= 209){
//        $(".zebraImg").attr("src","../images/zebraa.png");
//    }

});
    
//    var zebraLeft = $(".zebra").offset().left;
//    var fruitleft = $(".fruit").offset().left;
//    if(zebraLeft == fruitleft){
//        $(".fruit").remove()
//    } 


    var caughtLetter = function(letter, idOfFruit){
        console.log("our letter", letter)
        
        
        // use the letter variable to get our specific letter and change it
        $("." + letter).css({"display" : "none"})
        
        // change status of fruit to hidden
        $("#" + idOfFruit).addClass("caught");
            
    }
    
    // get zebra position and fruit positions
    setInterval(function(){
        var zebraPosition = $(".zebra").offset();
        var zebraLeft = zebraPosition.left + ($(".zebra").width()/2);
        var zebraTop = zebraPosition.top;
        
        // get our fruit positions:
        $(".fruit").each(function(){
            var fruitPosition = $(this).offset();
            var fruitLeft = fruitPosition.left;
            var fruitTop = fruitPosition.top;
            var fruitWidth = $(this).width();
            var fruitHeight = $(this).height();
            
            
           
            if(zebraLeft >= fruitLeft && zebraLeft <= fruitLeft + fruitWidth){
            
                if(zebraTop >= fruitTop && zebraTop <= fruitTop + fruitHeight){
                
//                    console.log($(this).attr("data-letter"))   
                    // our fruit is caught! get rid of fruit: 
                    caughtLetter($(this).attr("data-letter"), $(this).attr("id"))
                    
//                     if($(this).hasClass("lion1")){
//                     console.log(".lion1")
//                    window.location.replace("../game/game_over/index.html")
//                         
                    if($(this).hasClass("cherylcornS")){
                     console.log(".cherylcornS")
                    window.location.replace("../game/reward/index.html")
                }
                    
           } 
                
                   
                }
                


            

            
        })        
         
    }, 50)
    
    
    
});

 // want to disable the game over function for that letter