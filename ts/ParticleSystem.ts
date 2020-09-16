import BaseParticle from "./BaseParticle";

import ParticleFactory from "./ParticleFactory";

export default class ParticleSystem {
  private context: CanvasRenderingContext2D;
  private particleNum: number;
  private particles: Array<BaseParticle>;
  private animationId: number;
  private particleFactory: ParticleFactory;
  private enableLines: boolean;
  private lineLength: number;

  constructor(ctx: CanvasRenderingContext2D) {
    this.context = ctx;
    this.particleNum = 0;
    this.particles = [];
    this.animationId = 0;
    this.particleFactory = new ParticleFactory();
    this.enableLines = true;
    this.lineLength = 100;
  }

  /**
   * NOTE: Iniialze particles
   * @param { context } canvas context
   */
  createParticles(num: number) {
    // NOTE: Set canvas size
    // this.context = context;
    this.context.fillStyle = "#00000000";
    this.context.fillRect(
      0,
      0,
      this.context.canvas.clientWidth,
      this.context.canvas.clientHeight
    );

    this.particleNum = num;
    // NOTE: Create particle
    for (let i = 0; i < num; i++) {
      // const particle = new Particle(this.context);
      const particle = this.particleFactory.createRandomParticle(this.context);
      this.particles.push(particle);
    }
  }

  /**
   * NOTE: Loop animation
   */
  render() {
    //NOTE draw particles.
    for (let i = 0; i < this.particleNum; i++) {
      const particle = this.particles[i];
      particle.update();
      this.drawLines(particle);
      particle.draw();
    }
  }

  drawLines(src: BaseParticle) {
    let i = 0;
    const count = this.particles.length;
    while (i < count) {
      const dst = this.particles[i];
      const distance = src.distance(dst.pos);

      if (this.enableLines && distance < this.lineLength) {
        // NOTE: Draw line
        const alpha = this.map(distance, 0, this.lineLength, 0.7, 0);
        this.context.strokeStyle = "rgba(128, 128, 128, " + alpha + ")";
        this.context.lineWidth = 0.1;
        this.context.beginPath();
        this.context.moveTo(src.pos.x, src.pos.y);
        this.context.lineTo(dst.pos.x, dst.pos.y);
        this.context.closePath();
        this.context.stroke();
        // line(src.pos.x, src.pos.y, dst.pos.x, dst.pos.y)
        // this.context.stroke();
      }

      i = (i + 1) | 0;
    }
  }

  /**
   * NOTE: Change range to another range with same ratio.
   * @param { float }   value
   * @param { float }  start1
   * @param { float }    end1
   * @param { float }  start2
   * @param { float }    end2
   */
  map(
    value: number,
    start1: number,
    end1: number,
    start2: number,
    end2: number
  ): number {
    return start2 + (end2 - start2) * ((value - start1) / (end1 - start1));
  }

  /**
   * NOTE: Stop animation
   */
  stopAnimation() {
    window.cancelAnimationFrame(this.animationId);
  }
}
