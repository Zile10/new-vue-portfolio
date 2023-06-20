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
    <div class="cut-box" :class="`cut-box-${cuts || '1'}`" 
        :style="`
            width: ${styles.width || '30em'};
            height: ${styles.height || '10em'};
            --background: ${styles.background || 'darkcyan'};
            --border-color: ${styles.borderColor || 'blue'};
            --border-width: ${styles.borderWidth || '0.5em'};
            --cut-size: ${styles.cutSize || '2.5em'};
            --cuts: ${cuts || '1'};
        `">
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: ['styles', 'cuts']
}
</script>
<style>
/* Cut Box General Styles */
    .cut-box{
        width: 30em;
        height: 10em;
        --background: darkcyan;
        --border-color: crimson;
        --border-width: 4px;
        --cut-size: 2.5em;
        --cuts: 1;

        position: relative;
        isolation: isolate;

        display: inline-grid;
        /* padding: 0.5em 1.5em; */
        border: 0;
        background: var(--background);
    }

    .cut-box::after, .cut-box::before {
        content: '';
        position: absolute;
        inset: 0;
    }

    .cut-box::before{
        background: var(--border-color);
        z-index: -2;
    }

    .cut-box::after{
        background: var(--background);
        z-index: -1;
        background-size: cover;
        background-position: center;
    }
/* Cut Box General Styles (End) */

/* 1 Cut Styles */
    .cut-box-1 {
        clip-path: 
            polygon(
                0em var(--cut-size),
                var(--cut-size) 0em,
                100% 0,
                100% 100%,
                0 100%
            )
        ;
    }

    .cut-box-1::after{
        clip-path: 
            polygon(
                var(--border-width) calc(var(--cut-size) + var(--border-width) * 0.5),
                calc(var(--cut-size) + var(--border-width) * 0.5) var(--border-width),
                calc(100% - var(--border-width)) var(--border-width),
                calc(100% - var(--border-width)) calc(100% - var(--border-width)),
                var(--border-width) calc(100% - var(--border-width))
            )
        ;
    }
/* 1 Cut Styles (End) */

/* 2 Cut Styles */
    .cut-box-2 {
        clip-path: 
            polygon(
                0em var(--cut-size),
                var(--cut-size) 0em,
                100% 0,
                100% calc(100% - var(--cut-size)),
                calc(100% - var(--cut-size)) 100%,
                0 100%
            )
        ;
    }
    .cut-box-2::after{
        clip-path: 
            polygon(
            var(--border-width) calc(var(--cut-size) + var(--border-width) * 0.5),
            calc(var(--cut-size) + var(--border-width) * 0.5) var(--border-width),
            calc(100% - var(--border-width)) var(--border-width),
            calc(100% - var(--border-width)) calc(100% - var(--cut-size) - var(--border-width) * 0.5),
            calc(100% - var(--cut-size) - var(--border-width) * 0.5) calc(100% - var(--border-width)),
            var(--border-width) calc(100% - var(--border-width))
            )
        ;
    }
/* 2 Cut Styles (End) */
</style>