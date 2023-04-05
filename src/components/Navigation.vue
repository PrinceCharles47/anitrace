<template>
    <v-app-bar app dense flat id="navbar">
        <p class="font-italic white--text pt-4">Ani<span class="font-weight-bold">TRACE</span></p>

        <div class="ml-auto">
            <v-btn text class="white--text">Sign In</v-btn>
            <v-btn text class="white--text">Dashboard</v-btn>
            <v-btn text class="white--text">Back</v-btn>
            <v-btn text class="white--text">Log Out</v-btn>
        </div>
    </v-app-bar>
</template>
  
<script>

export default {
    name: 'Navigation',

    data: () => ({
        //
    }),
};
</script>
  
<style>
#navbar {
    background: transparent;
}
</style>
  