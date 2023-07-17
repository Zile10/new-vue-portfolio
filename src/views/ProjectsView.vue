<template>
	<div class="about">
		<div class="container">
			<h1>PROJECTS PAGE!!!</h1>
			<hr />

			<CornerCutBox
				v-for="proj in projects"
				:key="proj.id"
				:styling="{
					width: '100%',
					height: '200px',
					background: `rgba(120, 120, 120, 0.65)`,
					borderColor: 'rgba(200, 200, 200, 0.65)',
				}"
				:cuts="2"
			>
				<div class="row">
					<!-- <iframe :src="proj.projectUrl" frameborder="0"></iframe> -->
					<div class="col">
						<img src="https://hinicio.com/wp-content/uploads/2022/08/placeholder-3.png" alt="" style="width: 100%; height: 100%;">
					</div>
					<div class="col-8 bg-danger d-flex flex-column">
							<div class="desc bg-primary">
								<h2>{{proj.projectName}}</h2>

							</div>
							<div class="links row bg-warning">
								<div class="bg-warning col">
									aaa

								</div>
								<div class="bg-secondary col">
									aaa

								</div>
								<div class="bg-info col">
									aaa

								</div>
							</div>
							
					</div>
				</div>
			</CornerCutBox>
		</div>
	</div>
</template>

<script>
import CornerCutBox from "@/components/CornerCutBox.vue";
export default {
	components: {
		CornerCutBox,
	},
	computed: {
		projects() {
			let projects = this.$store.state.projects;
			return projects;
		},
	},
	mounted() {
		try {
			// this.$store.dispatch('getProjects')
		} catch (error) {
			console.error(error);
		}
	},
};
</script>

<style lang="scss" scoped>
.project-grid {
	color: white;
	text-align: left;
	overflow: hidden;
	// display: grid;
	// grid-template-columns: repeat(2, 1fr);
	// grid-template-rows: repeat(2, 45%);
	transition: 0.5s;
	clip-path: polygon(
		0em calc(var(--cut-size) - 2px),
		calc(var(--cut-size) - 2px) 0em,
		100% 0,
		100% calc(100% - (var(--cut-size) - 2px)),
		calc(100% - (var(--cut-size) - 2px)) 100%,
		0 100%
	);

	> div {
		// display: none;
		padding: 1em;
		grid-row: span 1;
	}
	// &:hover {
	//   background-color: rgba(0, 0, 0, 0.6);
	//   & > div {
	//     display: block;
	//     overflow: hidden;
	//   }
	// }
	& h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		text-align: center;
	}
	.project-desc {
		grid-column: span 2;
	}
}

.btns .btn {
	margin: 2px;
	padding: 1px;
}

::-webkit-scrollbar-corner {
	background: transparent;
}
</style>
