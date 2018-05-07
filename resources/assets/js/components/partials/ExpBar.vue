<template>
    <div class="exp-bar" :class="'exp-bar--' + color">
        <span class="exp-bar__label">{{ label }}</span>
        <span class="exp-bar__fill--wrap">
            <span class="exp-bar__fill" :style="'width: ' + width + '%;'"></span>
        </span>
        <span class="exp-bar__text">{{ values }}</span>
    </div>
</template>

<script>
    export default {
        props: [
            'label',
            'width',
            'values',
            'color',
        ],
    }
</script>

<style lang="scss" type="text/scss">
    .exp-bar {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }

    .exp-bar__label {
        /*   Styles go here */
    }

    .exp-bar__fill--wrap {
        position: relative;
        width: 100%;
        height: 15px;
        margin-bottom: 5px;
        margin-top: 2px;
        background-color: darken(#778899, 30%);
        border: 2px solid darken(#778899, 30%) !important;
    }

    .exp-bar__fill {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 50%;
        background: lightblue;
        background-color: lightblue;
        border-right: 3px solid black;
    }

    .exp-bar__text {
        width: 100%;
        text-align: right;
        font-size: 12px;
        transform: translateY(-5px);
    }

    .exp-bar--red {
        .exp-bar__fill--wrap {
            border: 2px solid lighten(#FF0000, 20%);
        }

        .exp-bar__fill {
            background-color: #C25B56;
            border-right: 3px solid darken(#C25B56, 15%);
            border: none;
        }
    }

    .exp-bar--blue {
        .exp-bar__fill--wrap {
            border: 2px solid lighten(#007FFF, 20%);
        }

        .exp-bar__fill {
            background-color: #96C0CE;
            border-right: 3px solid darken(#96C0CE, 15%);
            border: none;
        }
    }

    .exp-bar--green {
        .exp-bar__fill--wrap {
            border: 2px solid lighten(#758918, 10%);
        }

        .exp-bar__fill {
            background-color: #FEF6EB;
            border-right: 3px solid darken(#FEF6EB, 15%);
            border: none;
        }
    }
</style>