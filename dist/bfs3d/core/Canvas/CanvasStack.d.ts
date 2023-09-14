import { Canvas } from "./Canvas";
export type CanvasLayer = "front" | "middle" | "bottom";
export declare class CanvasStack {
    private canvas;
    private context;
    private canvasObject;
    private canvasObjects;
    constructor(container: HTMLElement | string);
    selectLayer: (layer: CanvasLayer) => this;
    getLayer: (layer?: CanvasLayer) => Canvas;
    getAllLayers: () => Canvas[];
    getCanvas: (layer?: CanvasLayer) => HTMLCanvasElement;
    getContext: (layer?: CanvasLayer) => CanvasRenderingContext2D;
}
