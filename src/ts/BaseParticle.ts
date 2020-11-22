import { IBaseParticle } from "./IBaseParticle";
import { IParticleBehavior } from "./IParticleBehavior";
export default class BaseParticle implements IBaseParticle, IParticleBehavior {
  pos: { x: number; y: number };
  speed: { x: number; y: number };
  context: CanvasRenderingContext2D;
  color: string;
  sizeWidth: number;
  sizeHeight: number;

  constructor(_context: CanvasRenderingContext2D, name = "") {
    this.context = _context;
    this.pos = {
      x: Math.random() * this.context.canvas.clientWidth,
      y: Math.random() * this.context.canvas.clientHeight,
    };

    this.speed = { x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 };
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
