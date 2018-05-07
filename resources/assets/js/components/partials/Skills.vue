<template>
    <div>
        <h1 class="skills__title">Skills</h1>
        <div class="skills--wrap">
            <div class="skill__item">
                <exp-bar label="HTML / CSS"
                         :width="100"
                         values="4 years / Very strong"
                         color="blue"></exp-bar>
            </div>

            <div class="skill__item">
                <exp-bar label="Javascript"
                         :width="100"
                         values="4 years / Very strong"
                         color="blue"></exp-bar>
            </div>

            <div class="skill__item">
                <exp-bar label="PHP"
                         :width="100"
                         values="4 years / Very strong"
                         color="blue"></exp-bar>
            </div>

            <div class="skill__item">
                <exp-bar label="Laravel"
                         :width="100"
                         values="4 years / Very strong"
                         color="blue"></exp-bar>
            </div>

            <div class="skill__item">
                <exp-bar label="Symfony"
                         :width="90"
                         values="4 years / Very strong"
                         color="blue"></exp-bar>
            </div>

            <div class="skill__item">
                <exp-bar label="Vue"
                         :width="90"
                         values="2 years / Very strong"
                         color="blue"></exp-bar>
            </div>

            <div class="skill__item">
                <exp-bar label="Bash"
                         :width="90"
                         values="5+ years / Very strong"
                         color="blue"></exp-bar>
            </div>

            <div class="skill__item">
                <exp-bar label="SQL"
                         :width="90"
                         values="4 years / Very strong"
                         color="blue"></exp-bar>
            </div>

            <div class="skill__item">
                <exp-bar label="Webpack / Gulp"
                         :width="70"
                         values="3 years / Moderate"
                         color="blue"></exp-bar>
            </div>

            <div class="skill__item">
                <exp-bar label="Bootstrap / Foundation / Materialize"
                         :width="60"
                         values="4 years / Moderate"
                         color="blue"></exp-bar>
            </div>

            <div class="skill__item">
                <exp-bar label="Node"
                         :width="60"
                         values="2 years / Moderate"
                         color="blue"></exp-bar>
            </div>

            <div class="skill__item">
                <exp-bar label="Python"
                         :width="50"
                         values="1 year / Can make things work"
                         color="blue"></exp-bar>
            </div>
        </div>
    </div>
</template>

<script>
    import ProgressBar from './ProgressBar'
    import ExpBar from './ExpBar'

    export default {
        components: {
            'progress-bar': ProgressBar,
            'exp-bar': ExpBar,
        }
    }
</script>

<style lang="scss" type="text/scss">
    .skills__title {
        font-family: 'Berkshire Swash', serif;
        color: #0f3147;
        text-align: center;
        margin-bottom: 32px;
        font-size: 40px;
    }

    .skills--wrap {
        display: flex;
        align-items: flex-start;
        flex-wrap: wrap;
        flex-direction: column;

        @media (min-width: 576px) {
            width: 50%;
            height: 375px;
        }
    }

    .skill__item {
        width: 100%;
        padding: 0 8px;
    }
</style>