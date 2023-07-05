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
            --width: ${(styling.width || '30em')};
            --height: ${(styling.height || '10em')};
            --background: ${(styling.background || 'darkcyan')};
            --border-color: ${(styling.borderColor || '220, 20, 60')};
            --border-width: ${styling.borderWidth || '0.5em'};
            --cut-size: ${(styling.cutSize || '2.5em')};
            --cuts: ${(cuts || '1')};
        `">
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: {
        styling:{
            default: {}
        }, 
        cuts:{
            default: 1
        }
    }
}
</script>
<style>
/* Cut Box General Styles */
    .cut-box{
        --width: 30em;
        --height: 10em;
        --background: darkcyan;
        --border-color: 220, 20, 60;
        --border-width: 4px;
        --cut-size: 2.5em;
        --cuts: 1;

        width: var(--width);
        height: var(--height);
        padding: var(--border-width);

        position: relative;
        isolation: isolate;

        display: grid;
        grid-template-columns: 1fr;
        /* padding: 0.5em 1.5em; */
        border: 0;
        /* background: var(--background); */
    }

    .cut-box::after, .cut-box::before {
        content: '';
        position: absolute;
        inset: 0;
    }

    .cut-box::before{
        background: transparent;
        z-index: -2;
    }
    .cut-box::after{
        background: var(--background);
        z-index: -1;
        background-size: cover;
        background-position: center center;
        transition-property: background-position;
        transition-duration: 0.2s;
        transition-timing-function: ease-in-out;
    }
    /* Hover Effects */

    .cut-box:hover::before{
        background: linear-gradient(rgb(var(--border-color)), rgba(var(--border-color), 0.6));
    }
    .cut-box:hover::after{
        background-position: bottom 45% center;
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

/* Content/Children */
.cut-box iframe {
    position: static;
    width: 200% !important;
    height: 200% !important;
    scale: 0.5;
    transform-origin: top left;
    z-index: 1;
    position: relative;
    padding: 0;
    margin: 0;
    clip-path: 
        polygon(
            0 calc(var(--cut-size) + var(--border-width)*4),
            calc(var(--cut-size) + var(--border-width) * 4) 0,
            100% 0,
            100% calc(100% - var(--cut-size) - var(--border-width) * 4),
            calc(100% - var(--cut-size) - var(--border-width) * 4) calc(100%),
            0 100%
        )
    ;
}

/* Content/Children (End) */
</style>