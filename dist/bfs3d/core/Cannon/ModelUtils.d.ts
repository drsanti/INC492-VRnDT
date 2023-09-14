import * as THREE from "three";
export declare class ModelUtils {
    private static instance;
    private constructor();
    static getInstance: () => ModelUtils;
    /**
     * Returns `true` if the `obj` is `face` objet (one of group children).
     */
    isFace: (obj: THREE.Object3D) => boolean;
    /**
     * Returns `true` if the `obj` is `multi-material object`.
     */
    isMultiMaterialObject: (obj: THREE.Object3D) => boolean | undefined;
    /**
     * Returns `multi-material objects`, the children of the `parent`.
     */
    getMultiMaterialsObjects: (parent: THREE.Scene | THREE.Group) => THREE.Group[];
    /**
     * Returns `true` if the `obj` is `single-material object`.
     */
    isSingleMaterialObject: (obj: THREE.Object3D) => boolean;
    /**
     * Returns `single-material objects`, children of the given parent.
     */
    getSingleMaterialObjects: (glTFScene: THREE.Group) => THREE.Mesh<THREE.BufferGeometry<THREE.NormalBufferAttributes>, THREE.Material | THREE.Material[]>[];
}
