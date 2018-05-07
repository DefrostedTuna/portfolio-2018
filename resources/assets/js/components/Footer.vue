<template>
    <div class="footer--container">
        <div class="footer--wrap">
            <dif class="footer--flex">
                <a href="http://github.com/DefrostedTuna" target="_blank" class="footer__item">View my Github</a>
                <span class="footer__item footer__copy">&copy 2018 Rick Bennett</span>
                <a href="/files/resume2018.pdf" class="footer__item">View my resume</a>
            </dif>
        </div>
    </div>
</template>

<style lang="scss" type="text/scss">
    .footer--container {
        width: 100%;
        height: 100px;
        background: #0f3147;

        @media(max-width: 500px) {
            height: 150px;
        }
    }

    .footer--wrap {
        max-width: 1200px;
        height: 100%;
        margin: auto;
    }

    .footer--flex {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        height: 100%;
    }

    .footer__item {
        width: 33%;
        color: white;
        text-align: center;

        @media(max-width: 500px) {
            width: 100%;
        }
    }

    .footer__copy {
        @media(max-width: 500px) {
            order: 3;
        }
    }
</style>