import BaseParticle from "./BaseParticle";
import { ParticleType, ParticleName } from "./ParticleType";

export default class RectParticle extends BaseParticle implements ParticleType {
  figure = ParticleName.RECT;
  constructor(context: CanvasRenderingContext2D) {
    super(context);
  }
  /**
   * NOTE: Draw particle
   */
  draw() {
    // NOTE: Rect
    this.context.strokeStyle = this.color;
    this.context.fillStyle = this.color;

    this.context.beginPath();
    this.context.rect(this.pos.x, this.pos.y, 7, 7);
    // this.context.stroke();
    this.context.fill();
  }
}
