<template>
    <v-app-bar dense flat id="navbar">
        <p class="font-italic white--text pt-4 ml-4">Ani<span class="font-weight-bold">TRACE</span></p>

        <div class="ml-auto">
            <v-btn plain class="white--text" v-if="isHomepage" to="/signin">Sign In</v-btn>
            <!-- <v-btn plain class="white--text">Dashboard</v-btn> -->
            <v-btn plain class="white--text" @click="signOut()" v-if="isLoggedIn">Log Out</v-btn>
            <v-btn plain class="white--text" to="/">Back</v-btn>
        </div>
    </v-app-bar>
</template>
  
<script>
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

export default {
    name: 'Navigation',

    data: () => ({
        isLoggedIn: false,
        isHomepage: true
    }),
    methods: {

        signOut: function () {
            firebase.auth().signOut().then(() => {
                this.$router.push('signin')
            })
        }

    },
    watch: {

        '$route.name' : function(newVal, oldVal) {
            console.log(newVal);
            if(newVal === 'upload'){

                this.isLoggedIn = true
                this.isHomepage = false

            }else if(newVal === 'home'){

                this.isLoggedIn = false
                this.isHomepage = true

            }else{
                this.isLoggedIn = false
                this.isHomepage = false
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
  