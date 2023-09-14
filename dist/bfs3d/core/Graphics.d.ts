import { THREE } from "./ThreeJS";
import { OrbitControls } from "./Controls/OrbitControls";
import { StackContainer } from "./StackContainer";
export declare class Graphics {
    camera: THREE.PerspectiveCamera;
    scene: THREE.Scene;
    renderer: THREE.WebGLRenderer;
    controls: OrbitControls;
    topCanvas: HTMLCanvasElement;
    wglCanvas: HTMLCanvasElement;
    bkgCanvas: HTMLCanvasElement;
    container: HTMLElement;
    private canvases;
    private stackedContainer;
    constructor(container: StackContainer | string);
    private _initDefault;
    private _onUpdateCallback;
    private _updateSizeOfRendererAndCamera;
    setSize: (width: number, height: number) => this;
    /**
     * The size is changed based on css or the size of children.
     */
    autoSize: () => this;
}
