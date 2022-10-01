class Light {

    // constructor() {
    //     this.angle = 0;
    //     this.x = 0;
    //     this.y = 100;
    // }

    constructor(angle, x, y) {
        this.angle = angle;
        this.x = x;
        this.y = y;
    }

}

Light.prototype.past = function (part) {
    xp = part.x - c * Math.cos(part.angle);
    yp = part.y - c * Math.sin(part.angle);
    return x, y;
};
Light.prototype.dist = function (x, y, mass) {
    return Math.sqrt((x - mass.x) ** 2 + (y - mass.y) ** 2);
}

// calculating impact parameter (distance of closest approach)
Light.prototype.b = function (part, mass, xp, yp) {
    return Math.abs(mass.y + (mass.x * (yp - part.y)) / (part.x - xp) - yp - (xp * (yp - part.y)) / (part.x - xp)) / Math.sqrt(1 + ((yp - part.y) / (part.x - xp)) ** 2);
}

// returns the change in angle in the light due to the masses that are currently on the screen
Light.prototype.dphi = function (part, list_masses) {
    // list_masses is the current list of masses that are on the game screen
    past = past(part);
    xp, yp = past[0], past[1];

    dphi = 0
    for (object in list_masses) {
        r = dist(part.x, part.y, object);
        b = b(part, mass, xp, yp);
        dr = Math.abs(r - dist(xp, yp, object));
        // dphi / dr according to the theory of light bending in scharzchild geometries (general relativity)
        dpdr = 1 / (r * r * Math.sqrt(1 / (b * b) - (1 - object.radius / r) * 1 / (r * r)));
        dphi += dpdr * dr;
    }

    return dphi
};
