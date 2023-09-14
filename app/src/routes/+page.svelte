<script lang="ts">
	import * as THREE from 'three';
	import { onDestroy, onMount } from 'svelte';
	import { Graphics, Physics, ModelLoader, ResourceLoader, type Resources } from 'bfs3d';
	const MODEL_PATH = `models/cube1.glb`;
	const init = async () => {
		const resources: Resources = await ResourceLoader.getInstance('SvelteKit').load();
		ModelLoader.getInstance()
			.load(MODEL_PATH)
			.then((data) => {
				resources.glTFs.push(data.glTF);
				const graphics: Graphics = new Graphics(`container1`);
				const model = resources.glTFs[0].scene;
				graphics.scene.add(model);
				graphics.scene.environment = resources.envMaps[0];
				graphics.camera.position.set(5, 5, 10);
				graphics.camera.lookAt(new THREE.Vector3());
				Physics.getInstance().init(graphics).buildPhysics(data.glTF).getDebugger()?.hide();
			});
	};
	onMount(() => {
		init();
	});
	onDestroy(() => {});
</script>

<div class="w-screen h-screen bg-gray-900">
	<div id="container1" class="w-full h-full" />
</div>
