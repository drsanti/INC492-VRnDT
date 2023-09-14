export interface LooperParams {
    frameCount: number;
    deltaTime: number;
}
export type LooperCallback = (params: LooperParams) => void;
export interface FrameCountListener {
    callback: LooperCallback;
    frameCount: number;
    repeatCount?: number;
}
export declare class Looper {
    private static instance?;
    private running;
    private animationId;
    private frameCount;
    private deltaTime;
    private listeners;
    private constructor();
    static getInstance: () => Looper;
    addListener: (listener: LooperCallback) => this;
    removeListener: (listener: LooperCallback) => this;
    private _t0;
    private _dts;
    private loop;
    start: () => this;
    stop: () => this;
    pause: () => this;
    resume: () => this;
    onFrame: (callback: LooperCallback) => this;
    private _frameCountListeners;
    onFrameCount: (callback: LooperCallback, frameCount: number, repeatCount?: number) => (() => void);
    private _execFrameCount;
}
