<template>
	<NavBar />
	<div class="w-100">
		<Tabs />
		<main>
			<router-view />
		</main>
	</div>
	<!-- <div
		class="magnify"
		:style="`top: ${mouse.position.y + 2}px; left: ${mouse.position.x + 2}px;`"
	></div> -->
</template>
<script>
import Tabs from "./components/Tabs.vue";
import NavBar from "./components/NavBar.vue";
import FooterComp from "./components/Footer.vue";

export default {
	components: {
		NavBar,
		Tabs,
		FooterComp,
	},
	data() {
		return {
			mouse: {
				position: {
					x: 0,
					y: 0,
				},
			},
		};
	},
	// methods: {

	// },
	mounted() {
		
	},
};
</script>
<style lang="scss">
:root {
	--primColor: #09080d;
	--secColor: #121019;
	--accentColor: #f91e4e;
	--textColor: white;
}
* {
	color: white !important;
}
#app {
	font-family: "Lato", sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	background: linear-gradient(var(--primColor) 40%, var(--accentColor) 240%);
	color: #2c3e50;
	/* cursor: none !important; */
	display: flex;
}
::selection {
	background: var(--accentColor);
	color: var(--primColor);
	font-weight: 300;
}
::-webkit-scrollbar {
	width: 5px;
}
::-webkit-scrollbar-thumb {
	background-color: #999;
	border-radius: 5px; 
}

main {
	/* border-left: 2px solid rgb(255, 20, 20); */
	min-height: calc(100vh - 54px);
}

section {
	min-height: calc(100vh - 57px);
}

nav a {
	font-weight: bold;
	color: #2c3e50;
}

nav a.router-link-exact-active {
	color: #42b983;
}
</style>
