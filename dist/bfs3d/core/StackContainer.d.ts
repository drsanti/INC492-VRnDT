import { Size } from "./Browser";
/**
 * This class is used to stack canvas elements both 2D and 3D contexts.
 * All canvas elements will be resize to fit to the container.
 * ALl canvas elements should be set to `absolute`
 */
export declare class StackContainer {
    private static MIN_WIDTH;
    private static MIN_HEIGHT;
    private container;
    private eventBus;
    constructor(container?: HTMLElement | string);
    getContainer: () => HTMLElement;
    getStackedCanvases: () => ChildNode[];
    onResized: (callback: (size: Size) => void) => void;
    /**
     * Resizes the container based on the `width` and `height` parameters.
     * However, when the browser is resized, the `autoSize` function is executed, and the container size will be resized based on the HTML and CSS.
     * Operations:
     * 1) Check the `width` and `height`, if they are too small, their size will be changed to the predefined value (32x32).
     * 2) Resize the container by assigning `width` and `height` to the `style.width` and `style.height`.
     * 3) Resize children elements (only canvas objects are considered).
     */
    setSize: (width: number, height: number) => this;
    /**
     * Makes the container change its size based on the HTML/CSS layout.
     * Operations:
     * 1) Remove the values of `style.width` and `style.height`. This will allow the container to resize itself.
     * 2) Get the new size of the container and update `style.width` and `style.height` by calling the `setSize` function.
     */
    autoSize: () => this;
    getComputedRect: () => DOMRect;
    /**
     * PRIVATE
     */
    private _updateSizeOfChildCanvases;
    private _onResizeCallback;
}
