<template>
    <v-card dark flat id="upload-field">
        <v-row class="d-flex align-center px-4" id="upload-container">
            <v-file-input
            truncate-length="15" 
            prepend-icon="mdi-image" 
            placeholder="Input Image File"
            v-model="uploadedImage"
            >
            </v-file-input>

            <v-btn class="ml-4" light @click="fetchMatchScenes(uploadedImage)">UPLOAD</v-btn>
        </v-row>
        <v-checkbox v-model="allowNSFW" label="Show NSFW results" class="float-right"></v-checkbox>
    </v-card>
</template>
  
<script>
import { mapActions } from 'vuex';

export default {
    name: 'ImageUpload',

    data: () => ({
        allowNSFW: false,
        uploadedImage: null,
    }),
    methods: {

        ...mapActions(['fetchMatchScenes']),

    }

};
</script>
  
<style scoped>
#upload-field {
    background: transparent;
}

#upload-container {
    border: 1px solid whitesmoke;
    border-radius: 5px;
}
</style>
  