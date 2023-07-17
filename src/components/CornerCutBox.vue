<template>
	<!-- 
        import CornerCutBox from '@/components/CornerCutBox.vue';

        <CornerCutBox 
        :styles="{
            width: '30em', 
            height: '10em', 
            background: 'darkcyan', 
            borderColor:'blue', 
            borderWidth:'.5em',
            cutSize: '1.5em',
        }"
        cuts="2"
        />
    -->
	<div class="tilt-parent my-2"
		:style="`
			--width: ${styling.width || '30em'};
			--height: ${styling.height || '10em'};
			--background: ${styling.background || 'darkcyan'};
			--border-color: ${styling.borderColor || 'rgb(220, 20, 60)'};
			--border-width: ${styling.borderWidth || '0.2em'};
			--cut-size: ${styling.cutSize || '2.5em'};
			--cuts: ${cuts || '1'};
		`"
	>
		<Tilt :options="{ reverse: true, max: 9, glare: true}">
			<div
				class="cut-box"
				:class="`cut-box-${cuts || '1'}`"
			>
				<slot></slot>
			</div>
		</Tilt>
	</div>
</template>
<script>
import Tilt from "vanilla-tilt-vue";
export default {
	props: {
		styling: {
			default: {},
		},
		cuts: {
			default: 1,
		},
	},
	components: {
		Tilt,
	},
};
</script>
<style lang="scss" scoped>
/* Variables & 'Tilt' Styles */
.tilt-parent {
	/* Variables: CSS */
	--width: 30em;
	--height: 10em;
	--background: darkcyan;
	--border-color: rgb(220, 20, 60);
	--border-width: 4px;
	--cut-size: 2.5em;
	--cuts: 1;

	
	// Tilt Styling
	& > div#tiltMe {
		padding: 0;
		background: var(--border-color);
		clip-path: polygon(
			calc(-1 * var(--border-width)) calc(var(--cut-size) + var(--border-width)),
			var(--cut-size) 0,
			100% 0,
			100% calc(100% - var(--cut-size)),
			calc(100% - var(--cut-size)) 100%,
			0 100%
		);
		> div {
			background: var(--background);
			clip-path: polygon(
				var(--border-width) calc(var(--cut-size) + var(--border-width) * 0.5),
				calc(var(--cut-size) + var(--border-width) * 0.5) var(--border-width),
				calc(100% - var(--border-width)) var(--border-width),
				calc(100% - var(--border-width))
					calc(100% - var(--cut-size) - var(--border-width) * 0.5),
				calc(100% - var(--cut-size) - var(--border-width) * 0.5)
					calc(100% - var(--border-width)),
				var(--border-width) calc(100% - var(--border-width))
			);
		}
		overflow: hidden;
	}
	// Hover 
	&:hover > div {
		scale: 1.008;
	}
}

/* Cut Box General Styles */
.cut-box {
	width: var(--width);
	height: var(--height);
	padding: var(--border-width);

	position: relative;
	isolation: isolate;

	display: grid;
	grid-template-columns: 1fr;

	border: 0;
	overflow: hidden;

	&::after,
	&::before {
		content: "";
		position: absolute;
		inset: 0;
	}
	
	/* Cut Box General Styles (End) */
}

div.row {
    width: 100%;
    margin: calc(var(--border-width) * -1) auto;
    height: 100%;
    clip-path: polygon( 
		var(--border-width) calc(2 * var(--cut-size) + var(--border-width) * 0.5),
		calc(var(--cut-size) + var(--border-width) * 0.5) var(--border-width), 
		calc(100% - var(--border-width)) var(--border-width), 
		calc(100% - var(--border-width)) calc(100% - var(--cut-size) - var(--border-width) * 0.5), 
		calc(100% - var(--cut-size) - var(--border-width) * 0.5) calc(100% - var(--border-width)), 
		var(--border-width) calc(100% - var(--border-width))
	);
}
</style>
