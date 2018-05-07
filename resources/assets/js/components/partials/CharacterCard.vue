<template>
    <div :class="{horizontal: horizontal, 'party-lead': selected}"
         class="character-card">

        <div class="character-card__image--wrap">
            <img class="character-card__image" :src="imageUrl" alt="">
            <span v-if="selected" class="current-character-flag">SELECTED</span>
        </div>

        <div class="character-card__info">
            <span class="character-card__name">{{ name }}</span>
            <span class="character-card__class">{{ characterClass }}</span>
            <span class="character-card__lv">Level {{ age }}</span>

            <div class="character-card__hp">
                <exp-bar label="HP"
                         :width="(hpCurrent / hpMax) * 100"
                         :values="hpCurrent + '/' + hpMax"
                         color="red"></exp-bar>
            </div>

            <div class="character-card__mp">
                <exp-bar label="MP"
                         :width="(mpCurrent / mpMax) * 100"
                         :values="mpCurrent + '/' + mpMax"
                         color="blue"></exp-bar>
            </div>

            <div class="character-card__exp">
                <exp-bar label="EXP"
                         :width="expWidthPercent"
                         :values="exp + '/' + tnl"
                         color="green"></exp-bar>
            </div>
        </div>
    </div>
</template>

<script>
    import ExpBar from './ExpBar'
    import moment from 'moment'

    export default {
        components: {
            'exp-bar': ExpBar,
        },

        props: [
            'name',
            'imageUrl',
            'characterClass',
            'birthday',
            'selected',
            'hpCurrent',
            'hpMax',
            'mpCurrent',
            'mpMax',
            'horizontal',
        ],

        data() {
            return {
                level: '',
                exp: 0,
                expWidthPercent: 0,
            }
        },

        computed: {
            age() {
                return new moment().diff(this.getInitialBirthdayObject(), 'years');
            },
            tnl() {
                return this.secondsSinceLastBirthday() + this.secondsUntilNextBirthday();
            },
        },

        methods: {
            getInitialBirthdayObject() {
                return new moment(this.birthday, 'MM-DD-YYYY');
            },
            getLastBirthdayObject($birthdayString) {
                return new moment(this.birthday, 'MM-DD-YYYY').add(this.age, 'years');
            },
            getNextBirthdayObject() {
                return new moment(this.birthday, 'MM-DD-YYYY').add(this.age + 1, 'years');
            },
            secondsSinceLastBirthday() {
                return new moment().diff(this.getLastBirthdayObject(), 'milliseconds');
            },
            secondsUntilNextBirthday() {
                return this.getNextBirthdayObject().diff(new moment(), 'milliseconds');
            },
            calculateExp() {
                this.exp = this.secondsSinceLastBirthday();
            },
            calculateExpWidthPercent() {
                this.expWidthPercent = ((this.secondsSinceLastBirthday() / this.tnl) * 100);
            }
        },

        created() {
            // Check to make sure values are proper
            // console.log('Initial Birthday: ' + this.getInitialBirthdayObject().format('MM-DD-YYYY'));
            // console.log('Last Birthday: ' + this.getLastBirthdayObject().format('MM-DD-YYYY'));
            // console.log('Next Birthday: ' + this.getNextBirthdayObject().format('MM-DD-YYYY'));
            // console.log('Seconds since last birthday: ' + this.secondsSinceLastBirthday());
            // console.log('Seconds until next birthday: ' + (this.secondsSinceLastBirthday() + this.secondsUntilNextBirthday()));

            // Constantly update the properties so they are reflected in the view
            setInterval(function () {
                this.calculateExp();
                this.calculateExpWidthPercent();
            }.bind(this), 30);

        }
    }
</script>

<style lang="scss" type="text/scss">
    .character-card {
        display: flex;
        background: white;
        z-index: 0;
        color: darken(#778899, 30%);
        flex-wrap: wrap;

        @media (min-width: 732px) {
            max-height: 300px;
        }
    }

    .character-card__image--wrap {
        width: 100%;
        max-width: 300px;
        @media (max-width: 731px) {
            max-width: 100%;
            max-height: initial;
        }
    }

    .character-card__image {
        max-width: 100%;
        width: 100%;
    }

    .character-card__info {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        flex-grow: 1;
        justify-content: space-between;
        padding: 0 16px 16px;

        @media (min-width: 732px) {
            min-width: 300px;
        }

    }

    .character-card__name {
        font-size: 28px;
        font-weight: 300;
        font-family: 'Lato', sans-serif;
        text-align: center;
    }

    .character-card__class {
        font-size: 16px;
        font-weight: 300;
        font-family: 'Lato', sans-serif;
        text-align: center;
        //margin-bottom: 8px;
    }

    .character-card__lv {
        margin-bottom: 5px;
        font-weight: 300;
        font-family: 'Lato', sans-serif;
        font-size: 18px;
        text-align: center;
        //margin-bottom: 16px;
    }

    .character-card__hp,
    .character-card__mp,
    .character-card__exp {
        font-weight: 300;
        font-family: 'Lato', sans-serif;
        margin-bottom: -5px;
    }


</style>