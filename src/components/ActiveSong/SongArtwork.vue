<template>
    <v-card flat>
        <v-card-media :src="songArtwork" height="150px"></v-card-media>
    </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class SongArtwork extends Vue {
    @Prop() songArtwork!: string;
}

</script>

<style lang="scss" scoped>
</style>
