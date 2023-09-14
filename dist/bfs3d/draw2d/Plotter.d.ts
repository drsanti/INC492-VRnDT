import { Draw2D } from "./Draw2D";
export declare class Plotter extends Draw2D {
    private props;
    private array;
    constructor(canvas: HTMLCanvasElement);
    addPoint: (data: number) => this;
    plot: (data: number | number[]) => this;
}
