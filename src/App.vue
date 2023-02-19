<template>
        <router-view/>
        <Loader/>
</template>
<script>
import Loader from "./components/Loader";

export default {
    components:{
        Loader
    },
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');
@import "~toastify-js/src/toastify.css";

a {
    text-decoration: none;
}

.min-h-screen {
    min-height: 100vh;
}

.w-full {
    width: 100%;
}

button, input, optgroup, select, textarea {
    padding: 0;
    line-height: inherit;
    color: inherit;
}

button, [role="button"] {
 cursor: pointer;
}

button {
 background-color: transparent;
 background-image: none;
}

button, [type='button'], [type='reset'], [type='submit'] {
 -webkit-appearance: button;
}

button, select {
 text-transform: none;
}

button, input, optgroup, select, textarea {
 font-family: inherit;
 font-size: 100%;
 line-height: 1.15;
 margin: 0;
}

*, ::before, ::after {
 --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
 --tw-ring-offset-width: 0px;
 --tw-ring-offset-color: #fff;
 --tw-ring-color: rgba(63, 131, 248, 0.5);
 --tw-ring-offset-shadow: 0 0 #0000;
 --tw-ring-shadow: 0 0 #0000;
}

*, ::before, ::after {
 --tw-shadow: 0 0 #0000;
}

*, ::before, ::after {
 --tw-border-opacity: 1;
 border-color: rgba(229, 231, 235, var(--tw-border-opacity));
}

*, ::before, ::after {
 box-sizing: border-box;
 border-width: 0;
 border-style: solid;
 border-color: currentColor;
}

*, ::before, ::after {
 box-sizing: border-box;
}

.bg-transparent {
    background-color: transparent;
}

input[type='range'] {
    &::-webkit-slider-thumb {
        background-color: #61CC2C;
        width: 15px;
        -webkit-appearance: none;
        height: 15px;
        border-radius: 100%;
    }
}

html, body, #app {
    padding: 0;
    margin: 0;
    font-family: 'Quicksand', normal, sans-serif;
    min-height: 100vh;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
}

.body-content {
    min-height: 100vh;
    min-width: 100%;
}
.toastify {
    width: 100%;
    max-width: 328px !important;
    margin-right: 0;
    margin-left: auto;
    padding: 15px;
    position: absolute;
    top: 0 !important;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: 1px solid #E6ECF4;
    box-sizing: border-box;
    box-shadow: 0 1px 8px rgba(12, 88, 176, 0.08);
    border-radius: 10px;
    font-size: 12px;
    line-height: 20px;
    &:before {
        content: '';
        width: 20px;
        height: 20px;
        position: absolute;
        background-repeat: no-repeat;
        background-size: contain;
        margin: auto;
        top: 0;
        bottom: 0;
        left: 0;
        z-index: 5;
    }
    &:after {
        content: '';
        width: 44px;
        height: 100%;
        position: absolute;
        left: 2px;
        margin: auto;
        top: 0;
        bottom: 0;
        border-radius: 8px;
    }
    &.error {
        &:before {
            background-image: url('~@/assets/img/stop.svg');
        }
        &:after {
            background: #F2374D;
        }
    }
    &.info {
        &:before {
            background-image: url('~@/assets/img/info.svg');
        }
        &:after {
            background: #2468CA;
        }
    }
    &.warning {
        &:before {
            background-image: url('~@/assets/img/warning.svg');
        }
        &:after {
            background: #FFC01F;
        }
    }
    &.success {
        &:before {
            background-image: url('~@/assets/img/success.svg');
        }
        &:after {
            background: #00DDC6;
        }
    }
    .toast-close {
        color: transparent;
        background-image: url('~@/assets/img/close.svg');
        background-repeat: no-repeat;
        background-size: contain;
    }
}

.btn {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;
    border-radius: 16px;

    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;

    transition: all 0.8s;

    .btn_green {
        color: #FFFFFF;
        background: #61CC2C;
        border: 1px solid #61CC2C;

        &:hover {
            color: #61CC2C;
            background: #FFFFFF;
            border: 2px solid #61CC2C;
        }
    }
}

.btn_emit {
    cursor: pointer;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
    transition: background-color 5000s ease-in-out 0s;
}
</style>
