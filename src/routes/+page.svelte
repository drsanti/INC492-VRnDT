<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { appEnd, appInit } from '../lib/main';
	onMount(() => {
		appInit();
	});
	onDestroy(() => {
		appEnd();
	});
</script>

<div class="w-screen h-screen bg-gray-900">
	<div id="container1" class="w-full h-full" />
</div>
