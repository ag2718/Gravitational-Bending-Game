class App {
    constructor(canvasID) {
        this.canvas = document.getElementById(canvasID);
        this.ctx = this.canvas.getContext('2d');
        this.light = new Light(0, 0, 50);
    
       this.masses = [new Mass("black_hole", 500, 500)];

        this.width = this.canvas.width;
        this.height = this.canvas.height;

        this.requestAnimationFrame = (function(w) {
            return  w.requestAnimationFrame ||
                w.webkitRequestAnimationFrame ||
                w.mozRequestAnimationFrame ||
                w.oRequestAnimationFrame ||
                w.msRequestAnimationFrame ||
                function(callback) {
                    w.setTimeout(callback, 1000 / 60);
                };
            })(window);
    }
}



App.prototype.draw = function () {
    // this.ctx.fillStyle = "#FFC0CB";
    // this.ctx.fillStyle = "#000000";
    this.ctx.fillStyle = "#8163BD";
    //this.ctx.clearRect(0, 0, this.width, this.height);
    //this.ctx.fillRect(0, 0, this.width, this.height);

    for (var i = 0; i < this.masses.length; i++) {
        m = this.masses[i];
        this.ctx.beginPath();
        this.ctx.fillStyle = m.color;
        this.ctx.arc(m.x, m.y, m.radius, 0, 2 * Math.PI);
        this.ctx.fill();
    }
    
    this.ctx.beginPath();
    this.ctx.fillStyle = this.light.color;
    this.ctx.arc(this.light.x, this.light.y, 1, 0, 2 * Math.PI);
    this.ctx.fill();
}

App.prototype.main = function () {
    // this.draw();
    this.ctx.fillStyle = "#8163BD";
    this.ctx.fillRect(0, 0, this.width, this.height);
    // this.ctx.fillStyle = "#000000";
    this.requestAnimationFrame.call(window, this.loop.bind(this));
}

App.prototype.update_light = function(){
    dphi = this.light.dphi(this.masses)

    this.light.angle = this.light.angle + dphi
    this.light.angle = this.light.angle % (Math.PI * 2)
    this.light.x = this.light.x + Math.cos(this.light.angle)
    this.light.y = this.light.y + Math.sin(this.light.angle)
}

App.prototype.loop = function () {
    this.update_light();
    
    this.draw();
    this.requestAnimationFrame.call(window, this.loop.bind(this));
}

App.prototype.addHole = function(x, y) {
    this.masses.push(new Mass("black_hole", x, y));
}