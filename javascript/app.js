class App {
    constructor(canvasID) {
        this.canvas = document.getElementById(canvasID);
        this.ctx = this.canvas.getContext('2d');


        // this.masses = [
        //     new Mass("black_hole", 10, 30),
        //     new Mass("blue_giant", 50, 40),
        //     new Mass("white_dwarf", 20, 90),
        // ];
        this.masses = []


        this.width = this.canvas.width;
        this.height = this.canvas.height;
    }
}

App.prototype.main = function () {
    this.draw();
    i = 0
    function loop() {
        console.log("Yo wassup!");
        console.log(i);
        new_black_hole = new Mass("black_hole", i, 90);
        i = i + 1;
        this.masses += [new_black_h]
        this.draw();
        window.requestAnimationFrame(loop);
    }
    window.requestAnimationFrame(loop);
}

App.prototype.draw = function () {
    // this.ctx.fillStyle = "#FFC0CB";
    // this.ctx.fillStyle = "#000000";
    this.ctx.fillStyle = "#8163BD";
    this.ctx.fillRect(0, 0, this.width, this.height);

    this.masses.forEach(mass => {
        this.ctx.beginPath();
        this.ctx.fillStyle = mass.color;
        this.ctx.arc(mass.x, mass.y, mass.radius, 0, 2 * Math.PI);
        this.ctx.fill();
    })
}

