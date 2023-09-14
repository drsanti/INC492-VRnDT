import { Canvas } from "./Canvas";
export interface GridOptions {
    nx?: number;
    ny?: number;
    color?: string;
    lineWidth?: number;
    lineDash?: number[];
}
export declare class CanvasGrid {
    private canvas;
    private context;
    private options;
    private target;
    private DEFAULT_COLOR;
    private DEFAULT_DASH;
    private DEFAULT_WIDTH;
    setTarget(target: Canvas): void;
    constructor(target: Canvas, options?: GridOptions);
    setOptions: (options: GridOptions) => this;
    gX: () => number;
    gY: () => number;
    draw: () => this;
    private _lineDashOffset;
    setLineDashOffset: (offset: number) => void;
}
