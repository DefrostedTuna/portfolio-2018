import _ from 'lodash';
import jQuery from 'jquery';
import axios from 'axios';
import Vue from 'vue';
import Vuetify from 'vuetify';
import Event from './core/Dispatch';
import vueSmoothScroll from 'vue-smooth-scroll'


window._ = _;
window.$ = window.jQuery = jQuery;
window.Vue = Vue;
window.Vuetify = Vuetify;
window.Event = new Event();

Vue.use(vueSmoothScroll)
Vue.use(Vuetify, {
    theme: {
        primary: '#0f3247',
        accent: '#E37222',
    }
});
window.axios = axios.create({
    headers: {
        // Empty so that the instances are kept separate
    }
});
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}
