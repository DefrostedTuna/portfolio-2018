<template>
    <div class="progress-bar">
        <span class="progress-bar__label">{{ prefix }}</span>
        <span class="progress-bar__fill--wrap">
            <span class="progress-bar__fill" :style="'width: ' + percent + '%;'"></span>
        </span>
        <span class="progress-bar__text">{{ suffix }}</span>
    </div>
</template>

<script>
    export default {
        props: [
            'prefix',
            'percent',
            'suffix',
        ],

        data() {
            return {

            }
        },

        methods: {

        }
    }
</script>

<style lang="scss" type="text/scss">
    .progress-bar {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }

    .progress-bar__label {
        /*   Styles go here */
    }

    .progress-bar__fill--wrap {
        position: relative;
        width: 100%;
        height: 15px;
        margin-bottom: 5px;
        margin-top: 2px;
        background-color: darken(#778899, 30%);
        border: 2px solid darken(#778899, 30%) !important;
    }

    .progress-bar__fill {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 50%;
        background: lightblue;
        background-color: lightblue;
        border-right: 3px solid black;
    }

    .progress-bar__text {
        width: 100%;
        text-align: right;
        font-size: 12px;
        transform: translateY(-5px);
    }

    .progress-bar--red {
        .progress-bar__fill--wrap {
            border: 2px solid lighten(#FF0000, 20%);
        }

        .progress-bar__fill {
            background-color: #C25B56;
            border-right: 3px solid darken(#C25B56, 15%);
            border: none;
        }
    }

    .progress-bar--blue {
        .progress-bar__fill--wrap {
            border: 2px solid lighten(#007FFF, 20%);
        }

        .progress-bar__fill {
            background-color: #96C0CE;
            border-right: 3px solid darken(#96C0CE, 15%);
            border: none;
        }
    }

    .progress-bar--green {
        .progress-bar__fill--wrap {
            border: 2px solid lighten(#758918, 10%);
        }

        .progress-bar__fill {
            background-color: #FEF6EB;
            border-right: 3px solid darken(#FEF6EB, 15%);
            border: none;
        }
    }
</style>