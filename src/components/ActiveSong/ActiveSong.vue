<template>
    <v-card>
        <v-layout wrap v-if="activeSong">
            <v-flex xs4>
                <song-artwork :songArtwork="songArtwork"></song-artwork>
            </v-flex>
            <v-flex xs8>
                <!-- <span class="body-2 ml-3 pt-2 pb-0">Song</span> -->
                <v-card-title class="title pt-4 pb-1">{{activeSong['im:name'].label}}</v-card-title>
                <span class="body-1 ml-4 pt-2">
                    By
                    <strong>{{ activeSong['im:artist'].label }}</strong>
                </span>
                <v-divider></v-divider>
                <v-chip class="ml-3" label outline color="red">{{ activeSong.category.attributes.label }}</v-chip>
                <span class="body-1 ml-1">Released: {{ activeSong['im:releaseDate'].attributes.label }}</span>
            </v-flex>
        </v-layout>
    </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import SongArtwork from '@/components/ActiveSong/SongArtwork.vue';

@Component({
    components: {
        SongArtwork
    }
})
export default class ActiveSong extends Vue {
    @Prop() activeSong!: any;

    get songArtwork() {
        return this.activeSong['im:image'][2].label ;
    }

}
</script>

<style scoped lang="scss">
</style>
