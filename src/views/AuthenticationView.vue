<template>
    <v-container>
        <p class="font-italic text-h4 white--text d-flex justify-center">Ani<span class="font-weight-bold">TRACE</span></p>
        <v-row class="mt-4 mb-15">
            <v-col cols="10" sm="8" md="5" lg="4" class="mx-auto">
                <v-card dark flat id="card">

                    <label>Email</label>
                    <v-text-field 
                    placeholder="Enter your email" 
                    type="email" 
                    v-model="email" 
                    outlined 
                    dense 
                    required
                    >
                    </v-text-field>

                    <label>Password</label>
                    <v-text-field 
                    placeholder="Enter your password" 
                    v-model="password" 
                    outlined 
                    dense
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" 
                    :type="showPassword ? 'password' : 'text'"
                    @click:append="showPassword = !showPassword" 
                    required
                    >
                    </v-text-field>

                    <v-btn block light class="mb-2" @click="signInUser()">SIGN IN</v-btn>
                    <v-btn block outlined @click="registerUser()">SIGN UP</v-btn>

                    <v-card-text v-if="errorMessage" class="red--text white text-center mt-4" id="error-message">
                        {{ errorMessage }}
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export default {
    name: 'Authentication',

    data() {
        return {
            showPassword: true,
            email: '',
            password: '',
            errorMessage: '',
        }
    },
    methods: {

        signInUser: function() {

            if(!this.email || !this.password){
                return this.errorMessage = 'Email or password is required'
            }

            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then(user => {
                this.$router.push('upload')
            }).catch(err => {
                this.errorMessage = 'The email or password is incorrect'
            })
        },

        registerUser: function(){

            if(!this.email || !this.password){
                return this.errorMessage = 'Email or password is required'
            }

            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then(user => {
                alert('Signed up successfully')
                this.$router.push('upload')
            })
            .catch(err => {
                switch (err.message) {
                    case 'Firebase: Password should be at least 6 characters (auth/weak-password).':
                        this.errorMessage = 'Password should be at least 6 characters'
                        break;
                    
                    case 'Firebase: The email address is already in use by another account. (auth/email-already-in-use).':
                        this.errorMessage = 'The email address is already in use by another account'
                        break;

                    default:
                        this.errorMessage = 'Password should be at least 6 characters'
                        break;
                }
            })
        }

    }
}
</script>

<style scoped>
/* * {
    border: 1px solid yellow;
} */

#card {
    background: transparent;
}

#error-message{
    border-radius: 5px;
}

</style>
  