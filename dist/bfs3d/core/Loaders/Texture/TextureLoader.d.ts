import { THREE } from "../../ThreeJS";
export interface TextureInfo {
    path: string;
    size: number;
    sceneNames: string[];
}
export interface TextureData {
    texture: THREE.Texture;
    info: TextureInfo;
}
export interface TextureDownloadInfo {
    path: string;
    percent: number;
    loaded: number;
    total: number;
}
export interface CubeTextureDownloadInfo {
    url: string;
    loaded: number;
    total: number;
    tag: string;
}
export interface CubeTextureDownloaderCallbacks {
    onStart?: (info?: string) => void;
    onProgress?: (info: CubeTextureDownloadInfo) => void;
    onDownloaded?: (cubeText: THREE.CubeTexture) => void;
    onError?: (error: string, url?: string) => void;
}
export declare class TextureLoader {
    private static instance?;
    private constructor();
    static getInstance: () => TextureLoader;
    private _checkName;
    loadEnvMap(root: string, name: "bridge" | "park" | "snow" | string, callbackOptions?: CubeTextureDownloaderCallbacks): Promise<THREE.CubeTexture>;
    loadCubeEnvTexture(path: string, names: string[], callbackOptions?: CubeTextureDownloaderCallbacks): Promise<THREE.CubeTexture>;
    loadDefaultCubeEnvTexture(dir: "bridge" | "park" | "snow" | string, callbackOptions?: CubeTextureDownloaderCallbacks): Promise<THREE.CubeTexture>;
}
