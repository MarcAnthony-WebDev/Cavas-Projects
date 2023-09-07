let canvas = document.getElementById('canvas');

let context = canvas.getContext('2d');

let window_height = window.innerHeight;
let window_width = window.innerWidth;

canvas.width = window_width;
canvas.height = window_height;

canvas.style.background = 'yellow';

class Circle {
  constructor(xpos, ypos, radius, color, text) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.radius = radius;
    this.color = color;
    this.text = text;
  }

  draw(context) {
    context.beginPath();

    context.strokeStyle = this.color;
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.font = '20px Arial';
    context.fillText(this.text, this.xpos, this.ypos);

    context.arc(this.xpos, this.ypos, this.radius, 0, Math.PI * 2, false);
    context.stroke();
    context.lineWidth = 3;
    context.closePath();
  }
}

let all_circles = [];

// let strArr = ['Goodbye', 'Hello', 'Buongiorno', 'Konichiwa'];
let circle_counter = 1;

const randomStr = () => {
  return strArr[Math.floor(Math.random() * 4)];
};

let createCircle = function (circle) {
  circle.draw(context);
};

for (let i = 0; i < 10; i++) {
  let random_x = Math.random() * window_width;
  let random_y = Math.random() * window_height;

  let my_circle = new Circle(random_x, random_y, 50, 'blue', circle_counter);
  all_circles.push(my_circle);
  createCircle(all_circles[i]);
  circle_counter++;
}

// let my_circle = new Circle(100, 100, 50, 'yellow');
// my_circle.draw(context);
