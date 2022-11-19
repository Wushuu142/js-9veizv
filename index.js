// Import stylesheets
import './style.css';

// Write Javascript code!
const canvas = document.getElementById('border');
let raf;

if (canvas.getContext) {
  const ctx = canvas.getContext('2d');
  // drawing code here
  const context = document.querySelector('canvas').getContext('2d');

  // functions for crystal creation
  var rand_x = Math.round(Math.random() * 380);
  var rand_y = Math.round(Math.random() * 380);

  const blueGrayCrystal = {
    x: rand_x,
    y: rand_y,
    vx: 1,
    vh: 1,
    radius: 2,
    color: '#7393B3',
    draw() {
      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
      context.closePath();
      context.fillStyle = this.color;
      context.fill();
    },
  };

  var rand_x = Math.round(Math.random() * 380);
  var rand_y = Math.round(Math.random() * 380);

  const GlaucousCrystal = {
    x: rand_x,
    y: rand_y,
    vx: 1,
    vh: 1,
    radius: 2,
    color: '#6082B6',
    draw() {
      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
      context.closePath();
      context.fillStyle = this.color;
      context.fill();
    },
  };

  var rand_x = Math.round(Math.random() * 380);
  var rand_y = Math.round(Math.random() * 380);

  const SlateGrayCrystal = {
    x: rand_x,
    y: rand_y,
    vx: 1,
    vh: 1,
    radius: 2,
    color: '#708090',
    draw() {
      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
      context.closePath();
      context.fillStyle = this.color;
      context.fill();
    },
  };

  var rand_x = Math.round(Math.random() * 380);
  var rand_y = Math.round(Math.random() * 380);

  const AshGrayCrystal = {
    x: rand_x,
    y: rand_y,
    vx: 1,
    vh: 1,
    radius: 2,
    color: '#B2BEB5',
    draw() {
      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
      context.closePath();
      context.fillStyle = this.color;
      context.fill();
    },
  };

  function drawBlueGrayCrystal() {
    blueGrayCrystal.draw();
    blueGrayCrystal.x += Math.random() - Math.random();
    blueGrayCrystal.y += Math.random() - Math.random();
    blueGrayCrystal.vh += Math.random() - Math.random();
    blueGrayCrystal.vx += Math.random() - Math.random();
    blueGrayCrystal.radius += 0.003;
    window.requestAnimationFrame(drawBlueGrayCrystal);
  }

  function drawGlaucousCrystal() {
    SlateGrayCrystal.draw();
    SlateGrayCrystal.x += Math.random() * 2 - Math.random() * 2;
    SlateGrayCrystal.y += Math.random() * 2 - Math.random() * 2;
    SlateGrayCrystal.vh += Math.random() - Math.random();
    SlateGrayCrystal.vx += Math.random() - Math.random();
    SlateGrayCrystal.radius += 0.003;
    window.requestAnimationFrame(drawGlaucousCrystal);
  }

  function drawSlateGrayCrystal() {
    GlaucousCrystal.draw();
    GlaucousCrystal.x += Math.random() * 2 - Math.random() * 2;
    GlaucousCrystal.y += Math.random() * 2 - Math.random() * 2;
    GlaucousCrystal.vh += Math.random() - Math.random();
    GlaucousCrystal.vx += Math.random() - Math.random();
    GlaucousCrystal.radius += 0.003;
    window.requestAnimationFrame(drawSlateGrayCrystal);
  }

  function drawAshGrayCrystal() {
    AshGrayCrystal.draw();
    AshGrayCrystal.x += Math.random() * 2 - Math.random() * 2;
    AshGrayCrystal.y += Math.random() * 2 - Math.random() * 2;
    AshGrayCrystal.vh += Math.random() - Math.random();
    AshGrayCrystal.vx += Math.random() - Math.random();
    AshGrayCrystal.radius += 0.003;
    window.requestAnimationFrame(drawAshGrayCrystal);
  }

  //drawBlueGrayCrystal();
  //drawGlaucousCrystal();
  //drawSlateGrayCrystal();
  //drawAshGrayCrystal();
} else {
  // canvas-unsupported code here
  console.log('Not supported by canvas');
}
