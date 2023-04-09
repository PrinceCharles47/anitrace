<template>
    <v-app-bar dense flat id="navbar">
        <p class="font-italic white--text pt-4 ml-4">Ani<span class="font-weight-bold">TRACE</span></p>

        <div class="ml-auto">
            <v-btn plain class="white--text" v-if="isHomepage" to="/signin">Sign In</v-btn>
            <!-- <v-btn plain class="white--text">Dashboard</v-btn> -->
            <v-btn plain class="white--text" @click="signOut()" v-if="isLoggedIn">Log Out</v-btn>
            <v-btn plain class="white--text" :to="backButtonRoute" v-if="goBack">Back</v-btn>
        </div>
    </v-app-bar>
</template>
  
<script>
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

export default {
    name: 'Navigation',

    data: () => ({
        isLoggedIn: true,
        isHomepage: false,
        goBack: true,
        backButtonRoute: '/'
    }),
    methods: {

        signOut: function () {
            firebase.auth().signOut().then(() => {
                this.$router.push('signin')
            })
        }

    },
    created() {

        if (this.$route.name === 'upload') {

            this.isLoggedIn = true
            this.isHomepage = false
            this.goBack = false

        } else if (this.$route.name === 'home') {

            this.isLoggedIn = false
            this.isHomepage = true
            this.goBack = false

        } else if (this.$route.name === 'signin') {
            this.isLoggedIn = false
            this.isHomepage = false
            this.goBack = true
            this.backButtonRoute = '/'
        } else if (this.$route.name === 'anime details') {
            this.isLoggedIn = true
            this.isHomepage = false
            this.goBack = true
            this.backButtonRoute = '/upload'
        }

    },
    watch: {

        '$route.name': function (newVal, oldVal) {
            console.log(newVal);
            if (newVal === 'upload') {

                this.isLoggedIn = true
                this.isHomepage = false
                this.goBack = false

            } else if (newVal === 'home') {

                this.isLoggedIn = false
                this.isHomepage = true
                this.goBack = false

            } else if (newVal === 'signin') {
                this.isLoggedIn = false
                this.isHomepage = false
                this.goBack = true
                this.backButtonRoute = '/'
            } else if (newVal === 'anime details') {
                this.isLoggedIn = true
                this.isHomepage = false
                this.goBack = true
                this.backButtonRoute = '/upload'
            }
        }

    }
};
</script>
  
<style>
#navbar {
    background: transparent;
}
</style>
  