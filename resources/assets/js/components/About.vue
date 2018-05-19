<template>
    <div id="about-me" class="about-me--container">
        <div class="about-me--wrap">
            <h1 class="about-me__title">Character Info</h1>
            <div class="character-card--wrap">
                <character-card name="Rick Bennett"
                                image-url="https://avatars2.githubusercontent.com/u/5687508?v=4&s=400"
                                character-class="Ground Control Engineer"
                                birthday="11-06-1988"
                                hp-current="700"
                                hp-max="756"
                                mp-current="160"
                                mp-max="233"
                                :horizontal="shouldBeHorizontal()">
                </character-card>
            </div>

            <div class="about-me__description--wrap">
                <p>
                    An experienced software engineer with four years of web development under his belt and a passion for innovation.
                    The world around him is constantly changing and it's his job to make sure he
                    keeps up with it and delivers the products needed in this day and age.
                    Most of his current experience is in developing internal applications using PHP and the open source web stack to
                    assist in the day to day operations of a repair facility, with a few personal projects
                    thrown in here and there. He's built applications ranging from simple reporting dashboards,
                    to an entire ecosystem that saved his company close to one million dollars a year in expenses.
                    Whatever the challenge, He's always up for it.
                </p>
            </div>

            <div class="about-me__skills--wrap">
                <skills></skills>
            </div>
        </div>
    </div>
</template>

<script>
    import CharacterCard from './partials/CharacterCard'
    import Skills from './partials/Skills'

    export default {
        components: {
            'character-card': CharacterCard,
            'skills': Skills,
        },

        data() {
            return {
                windowWidth: 0,
            }
        },

        watch: {
            windowWidth(newWidth, oldWidth) {
                this.txt = 'it changed from ' + newWidth + ' / ' + oldWidth;
            }
        },

        methods: {
            shouldBeHorizontal() {
                return this.windowWidth <= 814 && this.windowWidth >= 600;
            }
        },

        mounted() {
            let that = this;
            this.$nextTick(function() {
                window.addEventListener('resize', function(e) {
                    that.windowWidth = window.innerWidth
                });
            })
        },
    }
</script>

<style lang="scss" type="text/scss">
    .about-me--container {
        background: #add1ec;
        min-height: 100vh;
        padding-top: 75px;
    }

    .about-me--wrap {
        margin: auto;
        max-width: 900px;
        padding: 16px;
    }

    .about-me__title {
        font-family: 'Berkshire Swash', serif;
        color: #0f3147;
        text-align: center;
        margin-bottom: 32px;
        font-size: 40px;
    }

    .character-card--wrap {
        width: 100%;
        border: 2px solid #0f3147;
        margin: auto auto 32px auto;

        &:after {
            display: block;
            text-align: center;
            content: "Currently looking to join a group!";
            padding: 8px;
            background: #0f3147;
            font-family: 'Lato', serif;
            font-size: 18px;
            color: white;
        }

        @media (max-width: 731px) {
            max-width: 500px;
            max-height: initial;
        }
    }

    .about-me__description--wrap {
        font-family: 'Josefin Sans', sans-serif;
        background: white;
        color: #0f3147;
        font-size: 18px;
        padding: 16px;
        border: 2px solid #0f3147;
        margin-right: 16px;
        min-width: 300px;
        width: 100%;
        margin-bottom: 32px;

        @media (min-width: 732px) {
            font-size: 22px;
        }
    }

    .about-me__skills--wrap {
        background: white;
        border: 2px solid #0f3147;
        padding: 16px;
        color: #0f3147;
        width: 100%;
    }
</style>