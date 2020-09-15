export default class BaseParticle {
  protected pos: { x: number; y: number };
  protected speed: { x: number; y: number };
  protected context: CanvasRenderingContext2D;
  protected color: string;
  protected sizeWidth: number;
  protected sizeHeight: number;

  constructor(_context: CanvasRenderingContext2D) {
    // this.pos = {
    //   x: Math.random() * window.screen.width,
    //   y: Math.random() * window.screen.height,
    // };

    this.pos = {
      x: 10,
      y: 10,
    };

    this.speed = { x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 };
    this.context = _context;
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    this.color = "rgba(" + r + "," + g + "," + b + ", 0.2)";

    this.sizeWidth = this.context.canvas.clientWidth;
    this.sizeHeight = this.context.canvas.clientHeight;
  }

  /**
   * NOTE: Abstruct function. This function should be defined in subclass.
   */
  draw() {}

  /**
   * NOTE: Update particle position
   */
  update() {
    // this.pos.add(this.speed)
    this.pos.x += this.speed.x;
    this.pos.y += this.speed.y;

    if (this.pos.x > this.sizeWidth || this.pos.x < 0) {
      this.speed.x *= -1;
    }

    if (this.pos.y > this.sizeHeight || this.pos.y < 0) {
      this.speed.y *= -1;
    }
  }

  /**
   * NOTE: Culclate distance between this object and passed particle.
   * @param { BaseParticle } p target particle
   */
  distance(p: { x: number; y: number }) {
    const x = this.pos.x - p.x;
    const y = this.pos.y - p.y;
    const powX = x ** 2;
    const powY = y ** 2;

    return Math.sqrt(powX + powY);
  }
}
