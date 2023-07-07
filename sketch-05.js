const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');
const math = require('canvas-sketch-util/math');
const Tweakpane = require('tweakpane');

const settings = {
  dimensions: [1080, 1080],
  animate: true
};

const sketch = () => {
  return ({ context, width, height, frame }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    const cols = 75;
    const rows = 75;
    const numCells = cols * rows;

    const gridw = width * 0.5;
    const gridh = height * 0.5; 
    const cellw = gridw / cols * 0.7;
    const cellh = gridh / rows * 0.7; 
    const margx = (width  - gridw) * 0.3;
    const margy = (height - gridh) * 0.3;

    for (let i = 0; i < numCells; i++) {
      const col = i % cols;
      const row = Math.floor(i / cols);

      const x = col * cellw;
      const y = row * cellh;
      const w = cellw * 0.5;
      const h = cellh * 0.5;

      //const n = random.noise2D(x + frame * 10, y, params.freq);
      const n = random.noise3D(x, y, frame * 10, 0.0015);
      
      const angle = n * Math.PI * 0;

      //const scale = (n * 0.5 + 0.5) * 40;
      const scale = math.mapRange(n, -1, 1, 0, 5 );

      context.save();
      context.translate(x, y);
      context.translate(margx, margy);
      context.translate(cellw * 0.5, cellh * 0.5);
      context.rotate(angle);

      context.beginPath();
      context.arc(x, y, scale, 0, Math.PI * 2);
      context.fillStyle = 'black';
      context.fill();

      context.restore();
    }

  };
};


canvasSketch(sketch, settings);
