<template>
    <v-app id="inspire">
        <header-quote></header-quote>
        <about></about>
        <quests></quests>
        <contact></contact>
        <bottom-footer></bottom-footer>

        <notification-component></notification-component>
    </v-app>
</template>

<script>
    import About from './About'
    import Quests from './Quests'
    import BottomFooter from './Footer'
    import Contact from './Contact'
    import HeaderQuote from './HeaderQuote'
    import NotificationComponent from './partials/NotificationComponent'

    export default {
        components: {
            HeaderQuote,
            About,
            Quests,
            Contact,
            BottomFooter,
            NotificationComponent,
        },
    }
</script>