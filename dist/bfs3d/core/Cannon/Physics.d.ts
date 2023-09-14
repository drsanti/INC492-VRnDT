import { Graphics } from "../Graphics";
import { LooperParams } from "../Looper";
import { CannonDebugRenderer } from "./CannonDebug";
import { PGObject } from "./PhysicsBodyCreator";
import { GLTF } from "../Loaders/GLTFLoader/GLTFLoader";
export declare class Physics {
    private static instance;
    constructor();
    private objects;
    private world?;
    private debug?;
    static getInstance: () => Physics;
    private graphics?;
    private scene?;
    init: (graphics: Graphics) => this;
    addPgObjects: (pgoArray: PGObject[]) => this;
    private cleanMesh;
    removePgObjects: (pgoArray: PGObject[]) => this;
    private v3C2T;
    private v4C2T;
    update: (params: LooperParams) => void;
    createPoFromGLTF: (glTF: GLTF, sceneIndex?: number) => PGObject[];
    buildPhysics: (glTF: GLTF, sceneIndex?: number) => this;
    getDebugger: () => CannonDebugRenderer | undefined;
}
