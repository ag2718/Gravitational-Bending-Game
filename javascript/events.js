document.addEventListener("click", function (event) {
    let canvas = document.getElementById("game_canvas");
    const rect = canvas.getBoundingClientRect()
    x = event.clientX - rect.left
    y = event.clientY - rect.top
    myApp.addHole(x, y);
})