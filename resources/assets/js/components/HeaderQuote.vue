<template>
    <div class="header-quote__container">
        <div class="header-quote__wrap">
            <span class="header-quote__text">Hi, my name is <strong>Rick Bennett</strong>.</span>
            <span class="header-quote__text">I'm just a guy who likes to make cool things with code.</span>
            <a href="#about-me"
               v-smooth-scroll
               class="header-quote__find-out-more">Want to know more?</a>
            <br>
            <a href="/files/resume2018.pdf"
               class="header-quote__view-resume">View my resume</a>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
    }
</script>

<style lang="scss" type="text/scss">
    .header-quote__container {
        background: url('../../files/header_quote.jpg') no-repeat center center;
        background-size: cover;
        min-height: 100vh;
        display: flex;
        justify-content: center;
    }

    .header-quote__wrap {
        max-width: 1000px;
        min-height: 60vh;
        padding: 16px;
        margin-top: 50px;
        text-align: center;

        @media(max-width: 400px) {
            margin-top: 8px;
        }

        @media(max-height: 361px) {
            margin-top: 8px;
        }
    }

    .header-quote__text {
        display: block;
        font-family: 'Roboto', sans-serif;
        font-size: 48px;
        font-weight: 300;
        color: #0f3147;
        text-align: center;

        strong {
            font-weight: 500;
        }

        @media(max-width: 600px) {
            font-size: 36px;
        }

        @media(max-width: 400px) {
            font-size: 28px;
        }

        @media(max-height: 600px) {
            font-size: 24px;
        }
    }

    .header-quote__find-out-more,
    .header-quote__view-resume {
        display: inline-block;
        margin-top: 16px;
        border: 3px solid #0f3147;
        padding: 8px;
        color: #0f3147;
        background: #dae6f2;
        text-decoration: none;
        transition: color .5s ease, background .5s ease;

        &:hover {
            background: #0f3147;
            color: white;
        }
    }
</style>