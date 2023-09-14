import { LooperCallback } from "../core/Looper";
export declare class Draw2D {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    grid: {
        enabled: boolean;
        nGx: number;
        nGy: number;
        lineColor: string;
        lineWidth: number;
        lineDash: number[];
    };
    constructor(canvas: HTMLCanvasElement);
    getWidth: () => number;
    getHeight: () => number;
    cX: () => number;
    cY: () => number;
    gX: () => number;
    gY: () => number;
    clear: () => this;
    fill: (color: string) => this;
    private _updateCallback;
    start: (updateCallback: LooperCallback) => this;
    stop: () => this;
    showGrids: (enabled: boolean) => this;
    drawGrids: (nGx?: number, nGy?: number) => this;
}
