import './bootstrap';
import { store } from './store';

Vue.component('root-component', require('./components/RootComponent.vue'));

const app = new Vue({
    el: '#app',
    store,
    data: () => ({
        drawer: null
    }),
});