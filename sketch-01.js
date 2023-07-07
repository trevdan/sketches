const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    context.lineWidth = 1;
    const w   = width * 0.10;
    const h   = height * 0.10;
    const gap = width * 0.03;
    const ix = width * 0.17;
    const iy = height * 0.17;
    let x, y;

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {

        x = ix + (w + gap) * i;
        y = iy + (h + gap) * j;

        context.beginPath();
        context.rect(x, y, w, h);
        context.stroke();  
      
      if (Math.random() > 0.5) {
        context.beginPath();
        context.rect(x + 10, y + 10, w - 20, h - 20);
        context.stroke();  
      } 
      
      if (Math.random() > 0.5) {
        context.beginPath();
        context.rect(x + 20, y + 20, w - 40, h - 40);
        context.stroke();  
      }

      if (Math.random() > 0.5) {
        context.beginPath();
        context.arc(x, y + h * 0.25, 10, 0, Math.PI * 2);
        context.stroke();  
      }

      if (Math.random() > 0.5) {
        context.beginPath();
        context.arc(x + w, y + h * 0.75, 10, 0, Math.PI * 2);
        context.stroke();  
      }

      if (Math.random() > 0.5) {
        context.beginPath();
        context.arc(x + w * 0.75, y, 10, 0, Math.PI * 2);
        context.stroke();  
      }

      if (Math.random() > 0.5) {
        context.beginPath();
        context.arc(x + w * 0.25, y + h, 10, 0, Math.PI * 2);
        context.stroke();  
      }

    };

  };
  };
};

canvasSketch(sketch, settings);