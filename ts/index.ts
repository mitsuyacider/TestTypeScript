import User from "./User";
import CircleParticle from "./CircleParticle";
import ParticleSystem from "./ParticleSystem";
const user = new User("Mitsuya", "Watanabe", 44);
let circle: CircleParticle;
let ctx: CanvasRenderingContext2D | null;
let particleSystem: ParticleSystem;

const contentsElem = document.getElementById("contents");
if (!!contentsElem) {
  contentsElem.innerText = `${user.familyName} ${user.givenName}`;
}

window.onload = () => {
  const data = [1, 5, 9, 10, 2, 54, 23, 90, 81];

  // let sortedData: Array<number> = [];
  let uniqueData: Set<number> = new Set();

  for (let i = 0; i < 10000000; i++) {
    const index = Math.floor(Math.random() * 100);
    uniqueData.add(index);
  }

  const sortedData: Array<number> = Array.from(uniqueData).sort(
    (a, b) => a - b
  );

  let searchIndex = 10;

  console.log("search index", searchIndex);

  // let startTime = performance.now();
  // let sortedSearchIndex = binarySearch(sortedData, searchIndex);
  // let endTime = performance.now();

  // console.log(
  //   "binary serch index",
  //   sortedSearchIndex,
  //   "time",
  //   endTime - startTime
  // );

  let startTime, endTime;

  startTime = performance.now();
  let sortedSearchIndex = binarySearch(sortedData, searchIndex);
  endTime = performance.now();

  console.log(
    "binary serch index",
    sortedSearchIndex,
    "time",
    endTime - startTime
  );

  const linearData: Array<number> = Array.from(uniqueData);

  startTime = performance.now();
  const linearIndex = linearSearch(linearData, searchIndex);
  endTime = performance.now();
  console.log("linear serch index", linearIndex, "time", endTime - startTime);

  startTime = performance.now();
  sortedSearchIndex = binarySearch(sortedData, searchIndex);
  endTime = performance.now();

  console.log(
    "binary serch index",
    sortedSearchIndex,
    "time",
    endTime - startTime
  );
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

const linearSearch = (arr: Array<number>, target: number): number => {
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];

    if (current === target) {
      index = i;
      break;
    }
  }

  return index;
};

const binarySearch = (arr: Array<number>, target: number): number => {
  let index = -1;
  let left = 0;
  let right = arr.length - 1;
  let middle = 0;
  while (left <= right) {
    middle = Math.floor((left + right) / 2);

    if (arr[middle] === target) {
      index = middle;
      break;
    } else if (arr[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return index;
};
