<template>
    <v-layout>
        <v-flex class="list__container">
            <v-card flat color="transparent" v-for="song in topSongs" :key="song.songId" class="mb-1 mt-1">
                <!-- <song-tile :song="song"></song-tile> -->
                <active-song :activeSong="song"></active-song>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import SongTile from '@/components/SongList/SongTile.vue'
import ActiveSong from '@/components/ActiveSong/ActiveSong.vue'

@Component({
    components: {
        SongTile,
        ActiveSong
    }
})
export default class SongList extends Vue {
    @Prop() songs!: Array<any>
    songLimit: number = 10;

    get topSongs() {
        return this.songs.slice(0, this.songLimit);
    }

}

</script>

<style lang="scss" scoped>
.list__container {
  max-height: 90vh;
  overflow: auto;
}
</style>
