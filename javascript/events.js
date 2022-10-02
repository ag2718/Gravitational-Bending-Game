document.addEventListener("click", function (event) {
    let canvas = document.getElementById("game_canvas");
    const rect = canvas.getBoundingClientRect();
    x = event.clientX - rect.left;
    y = event.clientY - rect.top;

    if (state != 1){
        if (x > 0 &&  x < 1000 && y > 0 && y < 500){
            myApp.addObject(x, y, state);    
        }
    }

    
    myApp.draw();
})

cursor = function(i) {
    state = i
}

movetoindex =function(){
    location.href='index.html';


}

playy= function(){
    myApp.requestAnimationFrame.call(window, myApp.loop.bind(myApp));


}

