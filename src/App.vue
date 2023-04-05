<template>
  <v-app id="main-container">
    <navigation/>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Navigation from './components/Navigation.vue'

export default {
  name: 'App',
  components: {
    Navigation
  },

  data: () => ({
    //
  }),
};
</script>

<style>

/* *{
  border: 1px solid yellow;
} */

#main-container{
  background-image: url('./assets/anitrace_bg.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

</style>
