<template>
    <v-container>
        <v-row class="mx-1">
            <v-col cols="12" sm="8" md="6" class="mt-10 mx-auto">
                <image-upload />
            </v-col>
        </v-row>

        <v-row class="mb-6">
            <v-col cols="12" sm="6" md="4" lg="3" v-for="scene in getMatchedScenes" :key="i">
                <result-card :scene="scene"/>
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script>
import ImageUpload from '../components/ImageUpload'
import ResultCard from '@/components/ResultCard.vue'
import { mapGetters } from 'vuex'


export default {
    name: 'SearchedContent',

    components: {
        ImageUpload,
        ResultCard,
    },

    data() {
        return {
            counts: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        }
    },
    computed: {

        ...mapGetters(['getMatchedScenes'])

    }
}
</script>

<style scoped>
/* *{
    border: 1px solid yellow;
} */
</style>
  