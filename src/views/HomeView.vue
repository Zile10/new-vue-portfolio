<template>
	<div class="container">
    <div class="mt-3">
      <CornerCutBox
        :tilt="true"
        :styling="{
          width: '100%',
          height: '40em',
          background: 'var(--secColor)',
          borderWidth: '2px',
        }"
        :options="{
          glare: 'false'
          
        }"
      >
        
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
};
</script>
<style lang="scss"></style>
