import * as THREE from "three";
import * as CANNON from "cannon-es";
export declare class CannonDebugRenderer {
    static readonly DebugMeshScaleFactor = 1.01;
    private NumOfBodies;
    private debugScene;
    scene: THREE.Scene;
    world: CANNON.World;
    private _meshes;
    private _debugMats;
    private _particleMaterial;
    private _sphereGeometry;
    private _boxGeometry;
    private _cylinderGeometry;
    private _planeGeometry;
    private _particleGeometry;
    private tmpVec0;
    private tmpVec1;
    private tmpVec2;
    private tmpQuat0;
    private enabled;
    toggle: () => void;
    show: () => void;
    hide: () => void;
    constructor(scene: THREE.Scene, world: CANNON.World, options?: object);
    getDebugMeshes(): THREE.Mesh<THREE.BufferGeometry<THREE.NormalBufferAttributes>, THREE.Material | THREE.Material[]>[] | THREE.Points<THREE.BufferGeometry<THREE.NormalBufferAttributes>, THREE.Material | THREE.Material[]>[];
    getDebugScene(): THREE.Scene;
    /**
     * Remove all debug meshes from the scene.
     * Clear the array of the debug meshes.
     */
    reset(): void;
    /**
     * This function is called by the PhysicsDebug.update().
     */
    update(): void;
    private _updateMesh;
    private _typeMatch;
    private _getMaterial;
    private _createMesh;
    private _getTypeString;
    private _scaleMesh;
}
