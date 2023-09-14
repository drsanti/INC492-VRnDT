export interface Registry {
    unregister: () => void;
}
export interface Callable {
    [key: string]: (...args: any[]) => any;
}
export interface Subscriber {
    [key: string]: Callable;
}
export interface IEventBus {
    dispatch<T>(event: string, arg?: T): void;
    register(event: string, callback: (...args: any[]) => any): Registry;
}
export declare class EventBus implements IEventBus {
    private subscribers;
    private static nextId;
    private static instance?;
    private constructor();
    static getInstance(): EventBus;
    dispatch<T>(event: string, arg?: T): void;
    register(event: string, callback: (...args: any[]) => any): Registry;
    private getNextId;
}
