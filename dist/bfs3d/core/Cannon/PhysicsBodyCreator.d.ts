import * as THREE from "three";
import * as CANNON from "cannon-es";
/**
 * Physics and Graphics Object Interface
 */
export interface PGObject {
    mesh: THREE.Mesh | THREE.Group;
    body: CANNON.Body;
}
export declare class PhysicsBodyCreator {
    private static instance;
    private constructor();
    private mu;
    static getInstance: () => PhysicsBodyCreator;
    /**
     * Creates and returns physics objects of `multi-material objects`.
     */
    createPoFromMmo: (glTFScene: THREE.Group) => PGObject[];
    /**
     * Creates and returns physics objects of `single-material objects`.
     */
    createPoFromSmo: (glTFScene: THREE.Group) => PGObject[];
}
