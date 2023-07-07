const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');
const math = require('canvas-sketch-util/math');

const settings = {
  dimensions: [ 1080, 1080 ],
  animate: true
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    
    const gap = width * 0.02;
    const ix = width * 0.06;
    const iy = height * 0.06;
    const n = random.noise2D(ix, iy, 0.001);
    const scale = math.mapRange(n, 1, 1, 1, 20);
    let x, y;
    
    for (let i = 0; i < 45; i++) {
      for (let j = 0; j < 45; j++) {

        x = ix + scale + gap * i;
        y = iy + scale + gap * j;

      context.save();
      context.beginPath();
      context.arc(x, y, scale, 0, Math.PI * 2);
      context.fillStyle = 'black';
      context.fill();
      context.restore();
    
      };
      };
    };
  };

canvasSketch(sketch, settings);
