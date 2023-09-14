export interface BFSTween {
    startValue: number;
    endValue: number;
    ease?: gsap.EaseFunction | string;
    duration?: number;
    repeat?: number;
    yoyo?: boolean;
    onUpdate: (value: number) => void;
    onComplete?: () => void;
}
export declare const createTween: (options: BFSTween) => gsap.core.Tween;
