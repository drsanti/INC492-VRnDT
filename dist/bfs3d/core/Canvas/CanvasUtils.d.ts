export declare class CanvasUtils {
    private static instance;
    private constructor();
    static getInstance(): CanvasUtils;
    create: (idPrefix: string, zIndex: number, container?: HTMLElement) => HTMLCanvasElement;
}
