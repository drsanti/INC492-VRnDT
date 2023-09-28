import * as THREE from 'three';
import { Input, Graphics, Physics, ModelLoader, ResourceLoader, type Resources, type GLTF, Looper, type LooperParams, Animator, type DevFramework } from 'bfs3d';
export { appInit, appEnd };

// const MODEL_PATH = `models/cubes.glb`;
const MODEL_PATH = `models/simple.glb`;


let target: THREE.Object3D | undefined = undefined;


const renderLoop = (params: LooperParams) => {
	params

	if (target !== undefined) {
		target.rotation.x += params.deltaTime;
	}
}

// const initPhysics = (graphics: Graphics, glTF: GLTF) => {
// 	Physics.getInstance().init(graphics).buildPhysics(glTF).getDebugger()?.hide();
// }

const initGraphics = (resources: Resources) => {
	const graphics: Graphics = new Graphics(`container1`);
	const glTF = resources.glTFs[resources.glTFs.length - 1];
	const model = glTF.scene;
	graphics.scene.add(model);
	graphics.scene.background = resources.envMaps[0];
	graphics.scene.environment = resources.envMaps[0];
	graphics.camera.position.set(5, 5, 10);
	graphics.camera.lookAt(new THREE.Vector3());


	// console.dir(graphics.scene.children)
	graphics.scene.traverse((c) => {
		if (c.name === 'Cube') {
			target = c;
		}
	});




	//** Physics */
	// initPhysics(graphics, glTF);

	//** Animator */
	new Animator(glTF);

	//** Loop */
	Looper.getInstance().onFrame(renderLoop);


	//** Keyboard */
	Input.Keyboard.onKeyDown(null, (e) => {
		console.log(e.key)
	});
}


const appInit = async (framework: DevFramework) => {
	const resources: Resources = await ResourceLoader.getInstance(framework).load();
	ModelLoader.getInstance().setFramework(framework)
		.load(MODEL_PATH)
		.then((data) => {
			resources.glTFs.push(data.glTF);
			initGraphics(resources);
		});
};

const appEnd = () => {
	Looper.getInstance().stop();
}