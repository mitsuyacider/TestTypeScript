interface IBaseParticle {
  pos: { x: number; y: number };
  speed: { x: number; y: number };
  context: CanvasRenderingContext2D;
  color: string;
  sizeWidth: number;
  sizeHeight: number;
}

export { IBaseParticle };
