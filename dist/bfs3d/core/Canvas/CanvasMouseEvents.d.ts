import { Point } from "../Browser";
import { Canvas } from "./Canvas";
export declare class CanvasMouseEvents {
    private target;
    private isEnabled;
    private isMouseDown;
    private eventBus;
    constructor(target: Canvas);
    enableMouseEvents: (enabled: boolean) => this;
    onMouseDown: (callback: (point: Point) => void) => this;
    onMouseUp: (callback: (point: Point) => void) => this;
    onMouseMove: (callback: (point: Point) => void) => void;
    onMouseDrag: (callback: (point: Point) => void) => this;
    private getNormalizedXY;
    private _onMouseDown;
    private _onMouseUp;
    private _onMouseMove;
}
