export declare class DevBox {
    container: HTMLElement;
    private mouseDownPosition;
    private boxPosition;
    private boxSize;
    constructor(parent?: HTMLElement);
    autoSize: () => this;
    lockCurrentSize: (expandX?: number, expandY?: number) => this;
    appendChild: (child: HTMLElement) => this;
    setPosition: (x: number, y: number) => this;
    getPosition: () => {
        x: number;
        y: number;
    };
    getSize: () => {
        width: number;
        height: number;
    };
    setSize: (width: number, height: number) => this;
    private _onMouseDown;
    private _onMouseUp;
    private _onMouseMove;
}
