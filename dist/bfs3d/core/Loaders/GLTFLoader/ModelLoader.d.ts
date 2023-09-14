import { GLTF } from "./GLTFLoader";
export type { GLTF };
export interface ModelInfo {
    path: string;
    size: number;
    sceneNames: string[];
}
export interface ModelData {
    glTF: GLTF;
    info: ModelInfo;
}
export interface ModelDownloadInfo {
    path: string;
    percent: number;
    loaded: number;
    total: number;
}
export type ModelLoadingCallback = (info: ModelDownloadInfo) => void;
export type ModelLoadedCallback = (data: ModelData) => void;
export type ModelErrorCallback = (error: string) => void;
export interface ModelLoaderCallbacks {
    onProgress?: ModelLoadingCallback;
    onLoaded?: ModelLoadedCallback;
    onError?: ModelErrorCallback;
}
export declare class ModelLoader {
    private static instance?;
    private constructor();
    static getInstance: () => ModelLoader;
    load: (gltfPath: string, callbackOptions?: ModelLoaderCallbacks) => Promise<ModelData>;
}
