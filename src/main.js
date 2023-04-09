import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import firebaseConfig from './firebaseConfig'

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()

Vue.prototype.$db = db

let app
firebase.auth().onAuthStateChanged(user => {
  if(!app){

    app = new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount('#app')

  }
})

Vue.config.productionTip = false

