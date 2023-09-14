import * as CANNON from "cannon-es";
import * as THREE from "three";
import { BodyType } from "cannon-es";
import { Mesh, Object3D } from "three";
export type ModelShape = "plane" | "wall" | "ground" | "platform" | "floor" | "cube" | "box" | "sphere" | "ball" | "cylinder" | "cone" | "icosphere" | "torus" | "capsule" | "suzanne" | "player";
export declare class SMOBodyCreator {
    private cylinderNumSegments;
    private forceIcosphereAsSphere;
    private forceUnknownAsCube;
    private static instance?;
    static getInstance: () => SMOBodyCreator;
    /*******************************************************************************************
     * Mesh Utility Functions
     *******************************************************************************************/
    assertNoBounding(mesh: THREE.Mesh): boolean;
    getMeshOrigin(mesh: THREE.Mesh, retCannon?: boolean): THREE.Vector3 | CANNON.Vec3;
    getSphereRadius: (mesh: THREE.Mesh) => number;
    getBoundingBox(object: Object3D): CANNON.Vec3;
    computeMass(object: THREE.Object3D): number;
    getPosition(object: THREE.Mesh | THREE.Object3D): CANNON.Vec3;
    getQuaternion(object: THREE.Mesh | THREE.Object3D): CANNON.Quaternion;
    copyPosition: (body: CANNON.Body, object: THREE.Mesh | THREE.Object3D) => void;
    copyQuaternion: (body: CANNON.Body, object: THREE.Mesh | THREE.Object3D) => void;
    /**
     * Copy Position and Quaternion of CANNON.Body to THREE.Mesh|THREE.Group
     */
    copyPositionAndQuaternion(body: CANNON.Body, object: THREE.Mesh | THREE.Group): void;
    /*******************************************************************************************
     * BODY and SHAPE CREATORS
     /******************************************************************************************/
    /**
     * Create physics body based on the given types.
     * If the body type is dynamic, the mess is set to 1. The mess can be changed later.
     */
    createCannonBody(type?: BodyType, mass?: number): CANNON.Body;
    /**
     * CUBE SHAPE
     */
    createCubeShape(mesh: THREE.Mesh): CANNON.Box;
    /**
     * CUBE BODY
     */
    createCubeBody(mesh: THREE.Mesh, mass?: number): CANNON.Body;
    /**
     * SPHERE SHAPE
     */
    createSphereShape(mesh: THREE.Mesh): CANNON.Sphere;
    /**
     * SPHERE BODY
     */
    createSphereBody(mesh: THREE.Mesh, mass?: number): CANNON.Body;
    /**
     * CYLINDER SHAPE
     */
    createCylinderShape(mesh: THREE.Mesh, numSegments?: number): CANNON.Cylinder;
    /**
     * Torus shape.
     * The shape of Torus is a simple Cylinder shape.
     */
    createTorusShape(mesh: THREE.Mesh): CANNON.Cylinder;
    /**
     * Capsule shape.
     * The shape of Capsule is a simple Cylinder shape.
     */
    createCapsuleShape(mesh: THREE.Mesh): CANNON.Cylinder;
    /**
     * Suzanne shape.
     * The shape of Suzanne is a simple Cylinder shape.
     */
    createSuzanneShape(mesh: THREE.Mesh): CANNON.Cylinder;
    createSpecialCylinderShape(mesh: THREE.Mesh, radiusTopRatio?: number, radiusBottomRatio?: number, numSegments?: number): CANNON.Cylinder;
    /**
     * CYLINDER BODY
     */
    createCylinderBody(mesh: THREE.Mesh, mass?: number): CANNON.Body;
    /**
     * CYLINDER BODY
     */
    createSpecialCylinderBody(mesh: THREE.Mesh, radiusTopRatio?: number, radiusBottomRatio?: number, mass?: number): CANNON.Body;
    /**
     * CONE BODY (It is a special type of Cylinder)
     */
    createConeBody(mesh: THREE.Mesh, mass?: number): CANNON.Body;
    /**
     * CANNON Plane Shape. (Cannon specific)
     */
    createCannonPlaneShape(): CANNON.Plane;
    /**
     * CANNON Plane Body (Cannon specific)
     */
    createCannonPlaneBody(mass?: number): CANNON.Body;
    /**
     * Plane Shape.
     */
    createPlaneShape(mesh: THREE.Mesh): CANNON.Box;
    /**
     * Plane Body.
     */
    createPlaneBody(mesh: THREE.Mesh, mass?: number): CANNON.Body;
    /**
     * TRIMESH
     */
    createTrimeshShape(mesh: THREE.Mesh): CANNON.Trimesh;
    createTrimeshBody(mesh: THREE.Mesh, mass?: number): CANNON.Body;
    /**
     * ICOSAHEDRON (not works with the Icosphere exported from Blender)
     */
    createIcosahedronShape(mesh: THREE.Mesh): CANNON.ConvexPolyhedron;
    createIcosahedronBody(mesh: THREE.Mesh, mass?: number): CANNON.Body;
    createCapsuleBodyMultiShapes(mesh: THREE.Mesh, mass?: number): CANNON.Body;
    createSuzanneBodyMultiShapes(mesh: THREE.Mesh, mass?: number): CANNON.Body;
    makeStaticBody(body: CANNON.Body): CANNON.Body;
    /*************************************************************************************/
    /*************************************************************************************/
    isModelOf: (name: string, ModelShape: ModelShape) => boolean;
    getInferredType(mesh: THREE.Mesh): 1 | 2 | 4;
    createInferredShape(mesh: THREE.Mesh): CANNON.Shape;
    /**
     * Create body and its shape(s).
     * This function create physics body and shape(s) based on the name of given object.
     */
    createInferredBody(object: THREE.Mesh, type?: CANNON.BodyType, mass?: number): CANNON.Body;
    /**
     * Create Body from mesh.
     */
    createBody(object: THREE.Mesh, type?: CANNON.BodyType, mass?: number): CANNON.Body;
    createPhysicBody(object: THREE.Mesh, type?: CANNON.BodyType, mass?: number): CANNON.Body;
}
