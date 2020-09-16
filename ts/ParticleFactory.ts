import BaseParticle from "./BaseParticle";
import CircleParticle from "./CircleParticle";
import RectParticle from "./RectParticle";
// import TriangleParticle from "./TriangleParticle";
import { ParticleName } from "./ParticleType";
interface Animal {
  eat(food: string): void;
  sleep(hours: number): void;
}

export default class ParticleFactory implements Animal {
  constructor() {}

  createRandomParticle(
    context: CanvasRenderingContext2D,
    name?: string
  ): BaseParticle {
    let particle: BaseParticle;
    const keys = Object.keys(ParticleName);
    const randomKey = Math.floor(Math.random() * keys.length);
    const key: string = name || keys[randomKey];

    switch (key) {
      case ParticleName.CIRCLE:
        particle = new CircleParticle(context);
        break;
      case ParticleName.RECT:
        particle = new RectParticle(context);
        break;

      //   case ParticleType.TRIANGLE:
      //     particle = new TriangleParticle(context);
      //     break;

      default:
        particle = new CircleParticle(context);
        break;
    }

    return particle;
  }

  eat(food: string) {
    console.log("hallo");
  }

  sleep(hours: number) {
    console.log("hallo");
  }
}
