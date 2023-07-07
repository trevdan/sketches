const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const degToRad = (degrees) => {
  return degrees / 180 * Math.PI;
}

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    context.fillStyle = 'black';

    const cx = width;
    const cy = height;

    const w = width * 0.01;
    const h = height * 0.1;

    let x, y;

    const num = 48;
    const radius = width * 0.9;

    for (let i = 0; i < num; i++) {
      const slice = math.degToRad(360 / num);
      const angle = slice * i;

      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);

      context.save();
      context.translate(x, y);
      context.rotate(-angle);
      context.scale(random.range(0.01, 0.5), random.range(0.01, 1));

      context.beginPath();
      context.rect(-w * 0.5, random.range(0.5, -h * 1), w, h);
      context.fill();
      context.restore();

      context.save();
      context.translate(cx, cy);
      context.rotate(-angle)
      context.lineWidth = random.range(0.5, 1);

      context.beginPath();
      context.arc(0, 0, radius * random.range(0.8, 0.2), slice * random.range(1, -4), slice * random.range(2, 3));
      context.stroke();
      context.restore();
    }

 

  };
};

canvasSketch(sketch, settings);
