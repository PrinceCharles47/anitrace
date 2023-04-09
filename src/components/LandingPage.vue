<template>
  <v-container>
    <v-card dark id="container" flat class="my-10 mx-auto" max-width="500">
      <p class="text-h4 text-center">ASK FOR SAUCE NO MORE!</p>
      <p class="subtitle-1 text-center">
        Upload the image of the anime scene to know the title of the show and other details.
      </p>
      <v-card-actions>
        <v-btn block light to="/signin">SIGN UP NOW</v-btn>
      </v-card-actions>

      <v-card-title class="content-title">
        What is <span class="font-italic mx-1">Ani<span class="font-weight-bold">TRACE</span></span>?
      </v-card-title>
      <v-card-text class="text-body-2">
        AniTRACE is an anime scene tracer web app built using trace.moe and Jikan APIs. It allows users to upload an image
        taken from an anime scene to get its title and other details. This project aims to help anime fans and watchers to
        get anime sauce from social media posts or other platforms that doesn’t indicate the title of the anime series or
        movie.

        <br>
        AniTRACE is by no means perfect and may produce incorrect results.
      </v-card-text>

      <v-card-title class="content-title">
        How to use <span class="font-italic mx-1">Ani<span class="font-weight-bold">TRACE</span></span>?
      </v-card-title>
      <v-card-text class="pl-0">
        <ul>
          <li v-for="instruction in instructions" :key="i" class="mb-2 text-body-2">{{ instruction }}</li>
        </ul>
      </v-card-text>

      <v-card-title class="content-title">
        Got some suggestions?
      </v-card-title>
      <v-textarea placeholder="Type here..." outlined dark dense class="mx-2" v-model="userFeedback.suggestions"></v-textarea>
      <v-card-actions class="py-0">
        <v-spacer></v-spacer>
        <v-btn light @click="sendSuggestion">SEND</v-btn>
      </v-card-actions>

    </v-card>
  </v-container>
</template>

<script>
// import firebase from 'firebase/compat/app'

export default {
  name: 'LandingPage',

  data: () => ({
    userFeedback: {
      month: '',
      day: '',
      year: '',
      suggestions: ''
    },

    instructions: [
      "Click on the input field and select your image file.",
      "Upload your image and wait for the results.",
      "Choose the result that is the same as your uploaded image.",
      "Results that have less than 90% similarity are most likely incorrect but not all the time.",
      "This works better on screen captured (screen shot) images from clips or anime episodes with the original aspect ratio.",
      "For better results, trim out black borders of your image before uploading.",
      "If you didn't get the result that you're looking for, try uploading a different image until you finally get your desired result.",
      "Be aware that AniTRACE may produce NSFW (adult contents) results."
      // "AniTRACE may show NSFW contents (adult contents), click on the checkbox to filter them out before uploading an image."
    ]

  }),
  methods: {
    
    sendSuggestion: function () {
      let date = new Date()
      this.userFeedback.month = date.getMonth()
      this.userFeedback.day = date.getDate()
      this.userFeedback.year = date.getFullYear()

      this.$db.collection("suggestions")
      .add(this.userFeedback)
      .then(doc => {
        alert('Thank you for your feedback')
        this.userFeedback.suggestions = ''
      })
      .catch(err => {
        console.log(err.message);
      })
    }

  }

}
</script>

<style scoped>
/* *{
  border: 1px solid yellow;
} */

#container {
  background: transparent;
}

.content-title {
  margin-top: 1.5em;
}
</style>
