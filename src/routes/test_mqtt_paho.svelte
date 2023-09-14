<script lang="ts">
	import { MqttPahoClient, type Message } from '@bfs/bfs3d';
	import { onDestroy, onMount } from 'svelte';

	import logo from './bits-fusion.svg';

	/**
	 *
	 */
	let client: MqttPahoClient;
	let interval: NodeJS.Timer | number;

	let t0 = performance.now();
	let rtt = 0;
	onMount(() => {
		client = new MqttPahoClient({
			onMessageArrived: (clientId: string, message: Message) => {
				// console.log(clientId, message.destinationName, message.payloadString);
				console.log(
					`client: ${clientId}, topic: ${message.destinationName}, message: ${message.payloadString}`
				);
				processMessage(clientId, message.destinationName, message.payloadString);
			}
		});

		client.connect().then((id) => {
			client.subscribe('$SYS/broker/version');
			client.subscribe('$SYS/broker/timestamp');
			client.subscribe('$SYS/broker/heap/current');

			client.subscribe(`@RTT/${id}`);

			let counter = 10;

			interval = setInterval(() => {
				t0 = performance.now();
				client.publish(`@RTT/${id}`, (++counter).toFixed(0));
			}, 2000);
		});
	});

	onDestroy(() => {
		clearInterval(interval);
		client?.disconnect();
	});

	let id: string;
	let topic: string;
	let message: string;

	const processMessage = (_id: string, _topic: string, _message: string) => {
		id = _id;
		topic = _topic;
		message = _message;
		rtt = performance.now() - t0;
	};
</script>

<div class="flex flex-col justify-center items-center h-screen">
	<div class="">
		<div class="flex flex-col justify-center items-center pt-8">
			<img class="w-12 h-auto" src={logo} alt="Example SVG" />
			<span>bits-fusion</span>
			<div class="w-32 h-[2px] bg-gray-500/40" />
		</div>

		<div class="flex flex-col justify-center items-center">
			<span class="text-lime-200">RTNetLink-M</span>
		</div>
	</div>

	<div class="flex flex-col w-80 px-4 py-2 mt-4 rounded-xl border-2 border-gray-500/50 bg-black/50">
		<div class="{id ? '' : 'hidden'} flex flex-row p2">
			<span class="w-14">Id: </span>
			<span class="flex flex-grow">{id}</span>
		</div>

		<div class="{topic ? '' : 'hidden'} flex flex-row p2">
			<span class="w-14">Topic: </span>
			<span class="flex flex-grow">{topic}</span>
		</div>

		<div class="{message ? '' : 'hidden'} flex flex-row p2">
			<span class="w-14">Data: </span>
			<span class="flex flex-grow">{message}</span>
		</div>

		<div class="{rtt ? '' : 'hidden'} flex flex-row p2">
			<span class="w-14">RTT: </span>
			<span class="flex flex-grow">{rtt.toFixed(2)} ms</span>
		</div>
	</div>
</div>
