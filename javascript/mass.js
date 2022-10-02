//import './constants.js';

// radius, color, position
// color should be a hex value 
// position is separate x and y value 
// 

/** Types Abhay and Andrew gave me
types = {
    "black_hole": [30 * M, '#000000', 2 * G * 30 * M / (c * c)],
    "blue_giant": [5 * M, '#00008B', RS * 100],
    "main_sequence": [M, '#FAC14F', RS],
    "white_dwarf": [1.4 * M, '#BBF7EE', RS * 0.01],
    "planet": [1 * Math.pow(10, -6) * M, '#B77364', RS * 0.001],
}
*/

class Mass {
    types = {
        "black_hole": [30 * M, '#000000', 10],
        "blue_giant": [5 * M, '#00008B', 10],
        "main_sequence": [M, '#FAC14F', 5],
        "white_dwarf": [1.4 * M, '#BBF7EE', 28],
        "planet": [1 * Math.pow(10, -6) * M, '#B77364', 1],
    }
    constructor(type, x, y) {
        this.x = x;
        this.y = y;
        // black_hole, blue_giant, main_sequence, white_dwarf, planet
        this.mass = this.types[type][0]
        this.color = this.types[type][1]
        this.radius = this.types[type][2]
    }
}