<template>
    <div class="contact--container">
        <div class="contact--wrap">
            <h1 class="contact__title">Recruiting</h1>
            <p class="contact__text">
                I'm <strong>currently looking</strong> for a group to join that will allow me <strong>to take on more quests.</strong>
                Want to talk to me about joining yours? Just <strong>want some help</strong> with a single quest? <strong>Sure thing!</strong>
                Just shoot me a message and <strong>let me know</strong> the details.
                <br>
                <strong>I'll get back to you</strong> as soon as I'm able to!
            </p>

            <div class="contact-form">
                <v-form>
                    <v-text-field
                            v-model="form.name"
                            label="Name"
                            :error="form.errors.has('name')"
                            :error-messages="form.errors.get('name')"
                            required
                    ></v-text-field>

                    <v-text-field
                            v-model="form.email"
                            label="Email"
                            type="email"
                            :error="form.errors.has('email')"
                            :error-messages="form.errors.get('email')"
                            required
                    ></v-text-field>

                    <v-text-field
                            v-model="form.inquiry"
                            label="Inquiry"
                            :error="form.errors.has('inquiry')"
                            :error-messages="form.errors.get('inquiry')"
                            textarea
                            required
                    ></v-text-field>

                    <div class="contact-form__buttons">
                        <v-btn class="contact-form__submit-button" @click="submitForm()">Message Me</v-btn>
                    </div>
                </v-form>
            </div>
        </div>
    </div>
</template>

<script>
    import Form from '../core/Form'
    import { mapMutations, mapGetters, mapActions } from 'vuex';

    export default {
        data() {
            return {
                form: new Form({
                    name: null,
                    email: null,
                    inquiry: null,
                }),
            }
        },

        methods: {
            ...mapMutations([
                'showSnackbar',
                'closeSnackbar',
            ]),
            submitForm() {
                this.form.post('/super-secret-email-route').then(response => {
                    console.log(response);
                    this.showSnackbar({
                        text: "Thank you for your submission! I'll get back to you soon!"
                    });
                }).catch(errors => {
                    console.log(errors);
                    this.showSnackbar({
                        text: "Oops! Something went wrong... That's not good. You could always email me directly. " +
                              "You can find my direct email in my resume. I offer my apologies!",
                        timeout: 12000,
                    });
                });
            }
        },
    }
</script>

<style lang="scss" type="text/scss">
    .contact--container {
        background: #add1ec;
        min-height: 100vh;
        padding-top: 75px;
    }

    .contact--wrap {
        margin: auto auto 32px auto;
        max-width: 1200px;
        padding: 16px;
    }

    .contact__title {
        font-family: 'Berkshire Swash', serif;
        color: #0f3147;
        text-align: center;
        margin-bottom: 32px;
        font-size: 40px;
    }

    .contact__text {
        display: block;
        font-family: 'Roboto', sans-serif;
        font-size: 22px;
        font-weight: 300;
        color: #0f3147;
        text-align: center;
        margin-bottom: 32px;

        strong {
            font-weight: 500;
        }

        @media(min-width: 601px) {
            font-size: 26px
        }

        @media(min-width: 801px) {
            font-size: 28px;
        }
    }

    .contact-form {
        margin: auto;
        max-width: 900px;
        background: white;
        border: 2px solid #0f3147;
        padding: 16px;
    }

    .contact-form__buttons {
        text-align: right;
    }

    .contact-form__submit-button {
        background: #436e8e !important;
        color: white !important;
    }
</style>