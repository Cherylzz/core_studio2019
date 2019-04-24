//var theThing = document.querySelector(".zebra");
//var container = document.querySelector("body");
//
//console.log(container)
//
//container.addEventListener("click", function(event) {
//	var xPosition = event.clientX - container.getBoundingClientRect().left - (theThing.clientWidth / 2);
//	var yPosition = event.clientY - container.getBoundingClientRect().top - (theThing.clientHeight / 2);
//	// in case of a wide border, the boarder-width needs to be considered in the formula above
//    
//    xPosition = 100*(event.clientX/window.innerWidth)
//    
//    yPosition = 100*(event.clientY/window.innerHeight)
//    
//    console.log(xPosition, yPosition)
//    
//	theThing.style.left = xPosition + "%";
//	theThing.style.top = yPosition + "%";
//	}
//);


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
});
