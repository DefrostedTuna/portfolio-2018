<template>
    <v-snackbar
            :timeout="snackbar.timeout"
            top right
            :multi-line="snackbar.multiline === true"
            v-model="snackbar.visible">
        {{ snackbar.text }}
        <v-btn flat color="pink" @click.native="closeSnackbar">Close</v-btn>
    </v-snackbar>
</template>

<script>
    import { mapMutations } from 'vuex';

    export default {
        computed: {
            snackbar() {
                return this.$store.state.snackbar
            }
        },
        methods: {
            ...mapMutations([
                'closeSnackbar',
            ]),
        }
    }
</script>