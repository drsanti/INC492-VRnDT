import * as THREE from 'three';
import { Graphics, Physics, ModelLoader, ResourceLoader, type Resources, type GLTF, Looper, type LooperParams, Animator } from 'bfs3d';
export { appInit, appEnd };

const MODEL_PATH = `models/cubes.glb`;


const renderLoop = (params: LooperParams) => {
	params;
}

const initPhysics = (graphics: Graphics, glTF: GLTF) => {
	Physics.getInstance().init(graphics).buildPhysics(glTF).getDebugger()?.hide();
}

const initGraphics = (resources: Resources) => {
	const graphics: Graphics = new Graphics(`container1`);
	const glTF = resources.glTFs[resources.glTFs.length - 1];
	const model = glTF.scene;
	graphics.scene.add(model);
	graphics.scene.background = resources.envMaps[0];
	graphics.scene.environment = resources.envMaps[0];
	graphics.camera.position.set(5, 5, 10);
	graphics.camera.lookAt(new THREE.Vector3());
	initPhysics(graphics, glTF);

	//** Physics */
	Looper.getInstance().onFrame(renderLoop);

	//** Animator */
	new Animator(glTF);

}

const appInit = async () => {
	const resources: Resources = await ResourceLoader.getInstance('SvelteKit').load();
	ModelLoader.getInstance()
		.load(MODEL_PATH)
		.then((data) => {
			resources.glTFs.push(data.glTF);
			initGraphics(resources);
		});
};

const appEnd = () => {
	Looper.getInstance().stop();
}