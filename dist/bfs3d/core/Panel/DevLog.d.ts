export declare class DevLog {
    private static instance;
    private devBox;
    private container;
    private constructor();
    static getInstance: () => DevLog;
    removeLine: (id: number) => this;
    removeFirst: () => this;
    removeLast: () => this;
    private randomColor;
    private lastMessage;
    log: (message: any, color?: string) => this | undefined;
}
