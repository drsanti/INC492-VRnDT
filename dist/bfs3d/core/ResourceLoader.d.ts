import { GLTF } from "./Loaders/GLTFLoader/GLTFLoader";
import { ModelLoaderCallbacks } from "./Loaders/GLTFLoader/ModelLoader";
import { CubeTextureDownloaderCallbacks } from "./Loaders/Texture/TextureLoader";
export type DevFramework = "Vite" | "SvelteKit";
export interface Resources {
    envMaps: THREE.CubeTexture[];
    textures: THREE.Texture[];
    glTFs: GLTF[];
}
export declare class ResourceLoader {
    private static instance?;
    private resources;
    private resourceList;
    private static devFrameWork?;
    private static staticDir;
    private constructor();
    static getInstance(devFrameWork?: DevFramework): ResourceLoader;
    static updateRootDir: (devFrameWork: DevFramework) => typeof ResourceLoader;
    setFramework(devFrameWork: DevFramework): typeof ResourceLoader;
    load: (cubeTextureDownloaderCallbacks?: CubeTextureDownloaderCallbacks, modelLoaderCallbacks?: ModelLoaderCallbacks) => Promise<Resources>;
}
