import Vue from 'vue';
import App from './App.vue';
import router from './router';
import firebase from 'firebase/app';

var firebaseConfig = {
    apiKey: 'AIzaSyDfV0FHojN-L5DLlEFMKl-dmfGRG_0wCxE',
    authDomain: 'front-rn.firebaseapp.com',
    projectId: 'front-rn',
    storageBucket: 'front-rn.appspot.com',
    messagingSenderId: '345941823075',
    appId: '1:345941823075:web:56f7c7d4301ca7b5d13256',
    measurementId: 'G-LPFGTS9GR3',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
