<template>
    <v-container>
        <v-row v-if="animeDetails.trailerURL" class="mx-auto">
            <v-col cols="12">
                <iframe :src="animeDetails.trailerURL" frameborder="0"></iframe>
            </v-col>
        </v-row>
        <v-row class="mx-auto mb-6">
            <v-col cols="12" sm="10" md="8">
                <v-card dark flat class="cards">
                    <v-card-title>{{ animeDetails.title.romaji }}</v-card-title>
                    <v-card-subtitle class="subtitle-1">{{ animeDetails.title.english }}</v-card-subtitle>
                    <v-card-subtitle>SYNOPSIS</v-card-subtitle>
                    <v-card-text>{{ animeDetails.synopsis }}</v-card-text>

                    <div class="d-flex">
                        <v-card dark flat class="cards mr-16">
                            <v-card-subtitle>GENRE</v-card-subtitle>
                            <v-card-text v-for="(genre, i) in animeDetails.genres" :key="i" class="py-0">
                                {{ genre }}
                            </v-card-text>
                        </v-card>

                        <v-card dark flat class="cards">
                            <v-card-subtitle>STUDIO</v-card-subtitle>
                            <v-card-text v-for="(studio, i) in animeDetails.studios" :key="i" class="py-0">
                                {{ studio }}
                            </v-card-text>
                        </v-card>
                    </div>
                </v-card>
            </v-col>
            <v-col cols="12" sm="2" md="4">
                <v-img :src="animeDetails.image" contain></v-img>
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'AnimeDetails',

    data: () => ({
        animeDetails: null
    }),
    methods: {

        ...mapActions(['fetchSceneDetails'])

    },
    computed: {

        ...mapGetters(['getAnimeDetails', 'getLoadingState'])

    },
    created() {
        this.fetchSceneDetails(this.$route.params.animeID);
        this.animeDetails = this.getAnimeDetails
    }
};
</script>
  
<style scoped>
iframe {
    width: 100%;
    aspect-ratio: 2/1;
}

.cards {
    background: transparent;
}
</style>
  