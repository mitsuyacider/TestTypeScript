import User from "./User";
import CircleParticle from "./CircleParticle";
import ParticleSystem from "./ParticleSystem";
import "../scss/style.scss";

const user = new User("Mitsuya", "Watanabe", 44);
let circle: CircleParticle;
let ctx: CanvasRenderingContext2D | null;
let particleSystem: ParticleSystem;

const contentsElem = document.getElementById("contents");
if (!!contentsElem) {
  contentsElem.innerText = `${user.familyName} ${user.givenName}`;
}

window.onload = () => {
  setup();
  draw();
};

const setup = () => {
  let canvas: HTMLCanvasElement = document.getElementById(
    "canvas"
  ) as HTMLCanvasElement;
  if (!(ctx = canvas.getContext("2d"))) {
    throw new Error(`2d context not supported or canvas already initialized`);
  }

  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
  circle = new CircleParticle(ctx);
  particleSystem = new ParticleSystem(ctx);
  particleSystem.createParticles(100);
};

const draw = () => {
  ctx?.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);
  circle.update();
  circle.draw();

  particleSystem.render();
  window.requestAnimationFrame(draw);
};
