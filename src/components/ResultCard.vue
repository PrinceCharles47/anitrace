<template>
    <v-card dark flat class="cards-outer" height="250" @click="getSceneDetails(scene.anilist.idMal)">
        <v-img :src="scene.image" cover class="result-images" height="55%"></v-img>

        <v-card flat class="d-flex flex-column justify-space-between cards-inner" height="45%">
            <v-card-title class="subtitle-2">{{ scene.anilist.title.romaji }}</v-card-title>
            <v-card-text>
                Episode {{ scene.episode }} | Similarity {{ Math.floor(scene.similarity * 100) }}%
            </v-card-text>
        </v-card>
    </v-card>
</template>
  
<script>

export default {
    name: 'ResultCard',

    props: {
        scene: Object,
    },
    data: () => ({

    }),
    methods: {

        getSceneDetails: function(animeID) {
            this.$router.push({name: 'anime details', params: {animeID: animeID}})
        }

    }

};
</script>
  
<style scoped>
/* * {
    border: 1px solid yellow;
} */

.cards-outer {
    background: transparent;
    border: 1px solid gray;
}

.cards-inner {
    background: transparent;
}

/* .result-images {
    border-radius: 5px;
    border: 1px solid black;
}

.result-images:hover {
    border-color: white;
    transition: 0.5s;
} */
</style>
  