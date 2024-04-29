<script>
	import { onMount, onDestroy } from "svelte";
	import { dcInit, DcWorld } from "dvijcock";
	import DcLogic from "./DcLogic.js";
	import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

	let domEl;
	let dcWorld;
	const loader = new GLTFLoader();

	onMount(async() => {
		let model = await loader.loadAsync("game.glb");
		await dcInit();
		dcWorld = new DcWorld();
		dcWorld.setDomElement(domEl);
		dcWorld.setLogic(new DcLogic(model));
	});
</script>

<div bind:this={domEl} class="game"></div>

<style>
	.game {
		width: 100vw;
		height: 100vh;
		margin: 0px;
		top: 0px;
		left: 0px;
		position: fixed;
	}
</style>
