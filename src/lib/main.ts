import * as THREE from 'three';
import { Input, Graphics, Physics, ModelLoader, ResourceLoader, type Resources, type GLTF, Looper, type LooperParams, Animator, type DevFramework } from 'bfs3d';
export { appInit, appEnd };

//** Object names: "Box", "Ball", "Monkey"

const MODEL_PATH = `models/objects.glb`;

//** Select a target object */
let target: THREE.Object3D | null = null;

const selectTarget = (scene: THREE.Scene, name: string) => {

	scene.traverse((obj) => {
		if (obj.name === name) {
			target = obj;
		}
	});

	if (target) {
		//** Translation (change position)
		// target?.position.set(2, 2, 0);
		//target?.position.setY(-2);

		//** Rotation */
		//const x_rad = THREE.MathUtils.degToRad(45);
		const y_rad = THREE.MathUtils.degToRad(45);
		// target.rotation.set(0, y_rad, 0);
		target.rotateY(y_rad);

		//** Scaling */
		// target.scale.set(1, 10, 1);
		target.scale.setY(5);

	}
	else {
		console.error(`No object named "${name}" found!!`);
	}
}

const key_a_action = () => {
	if (target) {
		target.rotateY(0.1);
	}
}

const key_w_action = () => {
	if (target) {
		target.position.z += 0.1;
	}
}



const renderLoop = (params: LooperParams) => {
	params

	if (target) {
		//target.rotation.set(0, Math.PI / 4, 0);
		//target.rotateY(0.1);
		//target.position.y += 0.1;
	}
}

const initPhysics = (graphics: Graphics, glTF: GLTF) => {
	Physics.getInstance().init(graphics).buildPhysics(glTF).getDebugger()?.hide();
	Physics.getInstance().disable();
	//Physics.getInstance().enable();
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

	//** Physics */
	initPhysics(graphics, glTF);

	//** Animator */
	new Animator(glTF);

	//** Loop */
	Looper.getInstance().onFrame(renderLoop);


	//** Call the function selectTarget and pass the scene to it */
	selectTarget(graphics.scene, "Cube2");


	//** Keyboard */
	//** null means all keys */
	Input.Keyboard.onKeyDown(null, (e) => {
		if (e.key == 'w') {
			key_w_action();
		}
	});


	//** Check the 'a' key */
	Input.Keyboard.onKeyDown('a', () => {
		//console.log('you pressed a');
		key_a_action();
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