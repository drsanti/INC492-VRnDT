export interface Size {
    width: number;
    height: number;
}
export interface Point {
    x: number;
    y: number;
}
export type BrowserResizeCallback = (size: Size) => void;
export declare class Browser {
    private static instance;
    private eventBus;
    private constructor();
    static getInstance: () => Browser;
    onResize: (callback: BrowserResizeCallback) => void;
}
