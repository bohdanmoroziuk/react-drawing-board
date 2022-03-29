import { Point, Stroke } from 'types';

export const drawStroke = (
  context: CanvasRenderingContext2D,
  points: Point[],
  color: Stroke['color'],
) => {
  if (!points.length) return;

  context.strokeStyle = color;
  context.beginPath();
  context.moveTo(points[0].x, points[0].y);

  points.forEach((point) => {
    context.lineTo(point.x, point.y);
    context.stroke();
  });

  context.closePath();
};

export const clearCanvas = (canvas: HTMLCanvasElement) => {
  const context = canvas.getContext('2d');

  if (!context) return;

  context.fillStyle = 'white';
  context.fillRect(0, 0, canvas.width, canvas.height);
};
