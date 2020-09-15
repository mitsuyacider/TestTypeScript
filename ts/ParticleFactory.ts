import BaseParticle from "./BaseParticle";
import CircleParticle from "./CircleParticle";
// import RectParticle from "./RectParticle";
// import TriangleParticle from "./TriangleParticle";

enum ParticleType {
  CIRCLE = "CIRCLE",
  //   RECT: "rect",
  //   TRIANGLE: "triangle",
}

export default class ParticleFactory {
  constructor() {}

  createRandomParticle(context: CanvasRenderingContext2D): BaseParticle {
    let particle = {};
    const keys = Object.keys(ParticleType);
    const randomKey = Math.floor(Math.random() * keys.length);
    const key: string = keys[randomKey];

    switch (key) {
      case ParticleType.CIRCLE:
        particle = new CircleParticle(context);
        break;
      //   case ParticleType.RECT:
      //     particle = new RectParticle(context);
      //     break;

      //   case ParticleType.TRIANGLE:
      //     particle = new TriangleParticle(context);
      //     break;

      default:
        particle = new CircleParticle(context);
        break;
    }

    return particle;
  }
}
