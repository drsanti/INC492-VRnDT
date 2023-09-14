import * as THREE from "three";
import * as CANNON from "cannon-es";
export declare class CannonUtils {
    static CreateTrimesh(geometry: THREE.BufferGeometry): CANNON.Trimesh;
    static CreateConvexPolyhedron(geometry: THREE.BufferGeometry): CANNON.ConvexPolyhedron;
    static offsetCenterOfMass(body: CANNON.Body, centreOfMass: CANNON.Vec3): void;
}
