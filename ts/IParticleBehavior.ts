interface IParticleBehavior {
  draw(): void;

  distance?: (p: { x: number; y: number }) => number;
  update?: () => void;
}

export { IParticleBehavior };
