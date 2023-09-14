export declare class Canvas {
    private canvas;
    private context;
    private container;
    static zIndex: number;
    constructor(container?: HTMLElement | string);
    private onResize;
    setSize: (width: number, height: number) => this;
    setZIndex: (zIndex: number) => this;
    setId: (id: string) => this;
    getWidth: () => number;
    getHeight: () => number;
    getCanvas: () => HTMLCanvasElement;
    getContext: () => CanvasRenderingContext2D;
    cX: () => number;
    cY: () => number;
    clear: () => this;
    fillBackground: (color?: string) => this;
    fill: (color?: string) => this;
}
