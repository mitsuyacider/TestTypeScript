import BaseParticle from "./BaseParticle";
import { ParticleType, ParticleName } from "./ParticleType";

export default class CircleParticle extends BaseParticle {
  figure = ParticleName.CIRCLE;

  constructor(_context: CanvasRenderingContext2D) {
    super(_context);

    // this.figure = "CIRCLE";
  }

  /**
   * NOTE: Draw particle
   */
  draw() {
    // NOTE: Circle
    this.context.strokeStyle = this.color;
    this.context.fillStyle = this.color;
    this.context.beginPath();
    this.context.arc(this.pos.x, this.pos.y, 3.5, 0, Math.PI * 2, true);
    this.context.stroke();
    this.context.fill();
  }
}
