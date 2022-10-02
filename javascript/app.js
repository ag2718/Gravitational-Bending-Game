class App {
    constructor(canvasID) {
        this.canvas = document.getElementById(canvasID);
        this.ctx = this.canvas.getContext('2d');
        this.light = new Light(0, 10, 50);
    
        this.masses = [];

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
        
        this.endGoal = {
            type: 0,
            pos: 300
        }
        this.hit_width = 30;
    }
}

App.prototype.draw = function () {
    for (var i = 0; i < this.masses.length; i++) {
        m = this.masses[i];

        // fill draw each object
        this.ctx.beginPath();
        this.ctx.fillStyle = m.color;
        this.ctx.arc(m.x, m.y, m.radius_visible, 0, 2 * Math.PI);
        this.ctx.fill();

        // draw borders of objects
        this.ctx.beginPath();
        this.ctx.fillStyle = m.border_color;
        this.ctx.arc(m.x, m.y, m.radius_visible, 0, 2 * Math.PI);
        this.ctx.stroke();
    }
    
    this.ctx.beginPath();
    this.ctx.fillStyle = this.light.color;
    this.ctx.arc(this.light.x, this.light.y, 1, 0, 2 * Math.PI);
    this.ctx.fill();
}

App.prototype.main = function () {
    // this.draw();
    this.ctx.fillStyle = "#333333";
    this.ctx.fillRect(0, 0, this.width, this.height);

    this.ctx.fillStyle = "#00FF9B";

    this.ctx.fillRect(this.endGoal.pos - this.hit_width / 2, 0, this.hit_width, 5);
    

    // this.ctx.fillStyle = "#000000";
    //this.requestAnimationFrame.call(window, this.loop.bind(this));
}

App.prototype.update_light = function(){
    dphi = this.light.dphi(this.masses)

    this.light.angle = this.light.angle + dphi
    this.light.angle = this.light.angle % (Math.PI * 2)
    this.light.x = this.light.x + Math.cos(this.light.angle)
    this.light.y = this.light.y + Math.sin(this.light.angle)
}

App.prototype.loop = function () {
    console.log("this.light.checkBounds(this.width, this.height) gives us " + this.light.checkBounds(this.width, this.height));
    if(this.light.checkBounds(this.width, this.height)&& this.light.checkCollision(this.masses)) {
        this.update_light();
    }
     else{
        //console.log("Have you won "  + this.light.wonGame(this.endGoal.type, this.endGoal.pos - this.hit_width / 2, this.endGoal.pos - this.hit_width / 2));
        
        console.log("Light x is ", this.light.x);
        console.log("Light y is ", this.light.y);
        console.log("Startx is ", this.endGoal.pos - this.hit_width / 2);
        console.log("Endx is ", this.endGoal.pos - this.hit_width / 2);
        if (this.light.wonGame(this.endGoal.type, this.endGoal.pos - this.hit_width / 2, this.endGoal.pos - this.hit_width / 2)) {
            alert("Yo, you won!");
            document.getElementById("win").style.visibility = "visible";
        } else {
            document.getElementById("loss").style.visibility = "visible";
        }
        
     }
    this.draw();
    this.requestAnimationFrame.call(window, this.loop.bind(this));
}

App.prototype.addObject = function(x, y, type) {
    this.masses.push(new Mass(type, x, y));
}
