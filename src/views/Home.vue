<template>
  <v-layout justify-center>
    <v-flex xs12 lg6>
      <auto-complete :items="allSongs"></auto-complete>
      <song-list :songs="songs"></song-list>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import AutoComplete from '@/components/basic/AutoComplete.vue'
import SongList from '@/components/SongList/SongList.vue'
import ActiveSong from '@/components/ActiveSong/ActiveSong.vue'

@Component({
  components: {
    AutoComplete,
    SongList,
    ActiveSong
  }
})
export default class Home extends Vue {
  title: string = 'Search Songs';
  @Getter('topSongs') topSongs!: any;
  @Getter('song') song!: any;
  @Action('setTopSongs') setTopSongs!: null;
  items = [1,2,3,4]

  get activeSong() {
    return this.topSongs ? this.topSongs.feed.entry[0] : null;
  }

  get songNames() {
    return this.topSongs ? this.topSongs.feed.entry.map( item => item.title.label ) : []
  }

  // return an empty array if the API has not returned with its query.
  get songs() {
    if (this.song) {
      return [this.song]
    } else {
      return this.topSongs ? this.topSongs.feed.entry : [];
    }
  }

  get allSongs() {
    return this.topSongs ? this.topSongs.feed.entry : [];
  }

  created() {
    this.setTopSongs();
  }
}
</script>

<style lang="scss">
// .card {
//   top: 30vh;
// }
</style>
