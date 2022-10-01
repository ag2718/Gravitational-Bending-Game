let Mouse = {
    x: 0,
    y: 0
}

document.addEventListener("mousemove", function (event) {
    let canvas = document.getElementById("game_canvas");
    const rect = canvas.getBoundingClientRect()
    Mouse.x = event.clientX - rect.left
    Mouse.y = event.clientY - rect.top
})

document.addEventListener("keypress", function (event) {
    let canvas = document.getElementById("game_canvas");
    const rect = canvas.getBoundingClientRect()
    const x = Mouse.x - rect.left
    const y = Mouse.y - rect.top
    console.log("x: " + x + " y: " + y)
    myApp.addHole(x, y);
});