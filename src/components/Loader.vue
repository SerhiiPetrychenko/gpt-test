<template>
    <section v-if="isLoading">
        <div class='sk-folding-cube'>
            <div class='sk-cube sk-cube-1'></div>
            <div class='sk-cube sk-cube-2'></div>
            <div class='sk-cube sk-cube-4'></div>
            <div class='sk-cube sk-cube-3'></div>
        </div>
    </section>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: "Loader",
    computed: {
        ...mapGetters([
            'isLoading'
        ])
    }
}
</script>

<style lang="scss" scoped>

$spinkit-size: 4em !default;
$spinkit-spinner-color: #0C1F38 !default;

.sk-folding-cube {
    $cubeCount: 4;
    $animationDuration: 2.4s;
    $delayRange: ($animationDuration / 2);

    width: $spinkit-size;
    height: $spinkit-size;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotateZ(45deg);;
    margin: auto;
    z-index: 10050;

    .sk-cube {
        float: left;
        width: 50%;
        height: 50%;
        position: relative;
        transform: scale(1.1);
    }

    .sk-cube:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: $spinkit-spinner-color;
        animation: sk-folding-cube-angle $animationDuration infinite linear both;
        transform-origin: 100% 100%;
    }

    // Rotation / angle
    @for $i from 2 through $cubeCount {
        .sk-cube-#{$i} {
            transform: scale(1.1) rotateZ((90deg * ($i - 1)));
        }
    }

    @for $i from 2 through $cubeCount {
        .sk-cube-#{$i}:before {
            animation-delay: ($delayRange / $cubeCount * ($i - 1));
        }
    }
}

@keyframes sk-folding-cube-angle {
    0%, 10% {
        transform: perspective(140px) rotateX(-180deg);
        opacity: 0;
    }
    25%, 75% {
        transform: perspective(140px) rotateX(0deg);
        opacity: 1;
    }
    90%, 100% {
        transform: perspective(140px) rotateY(180deg);
        opacity: 0;
    }
}
</style>
