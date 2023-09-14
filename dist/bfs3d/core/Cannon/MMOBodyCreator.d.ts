import * as THREE from "three";
import * as CANNON from "cannon-es";
export declare class MMOBodyCreator {
    private static instance;
    private constructor();
    static getInstance: () => MMOBodyCreator;
    /**
     * Return a bounding box of the multi-material object.
     */
    getBoundingBox: (group: THREE.Group) => THREE.Box3;
    getRadiusFromBB: (box: THREE.Box3) => number;
    getBoundingBoxDimension: (box3: THREE.Box3) => CANNON.Vec3;
    getCenterOfBoundingBox: (bb: THREE.Box3) => CANNON.Vec3;
    getMassFromBoundingBox: (bb: THREE.Box3, scale?: number) => number;
    /**
     * SPHERE BODY
     * Create a Sphere body and attach a Sphere shape to it.
     */
    createSphereBody: (group: THREE.Group) => CANNON.Body;
    /**
     * CUBE BODY
     * Create a Cube body and attach a Box shape to it.
     */
    createCubeBody: (group: THREE.Group) => CANNON.Body;
    /**
     * CYLINDER BODY
     * Create a Cylinder body and attach a Cylinder shape to it.
     */
    createCylinderBody: (group: THREE.Group) => CANNON.Body;
    /**
     * CONE BODY
     * Create a Cone body and attach a Cone shape to it.
     */
    createConeBody: (group: THREE.Group) => CANNON.Body;
    /**
     * TORUS BODY
     * Create Torus body and attach a simple Cylinder shape to it.
     */
    createTorusBody: (group: THREE.Group) => CANNON.Body;
    createCapsuleBody: (group: THREE.Group) => CANNON.Body;
    /**
     * PLANE BODY
     * Create a Plane body and attach a Box shape to it.
     */
    createPlaneBody: (group: THREE.Group) => CANNON.Body;
    /**
     * Creates and return MultiShapesBody based on name of group object.
     */
    createBody: (group: THREE.Group) => CANNON.Body;
}
