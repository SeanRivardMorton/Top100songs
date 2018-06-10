<template>
  <v-layout justify-center>
    <v-flex xs12 lg6>
      <v-card>
        <!-- <auto-complete :items="SongNames"></auto-complete> -->
        <song-tile :item="{songName:'Come Tomorrow', songArtist:'Dave Matthews Band'}"></song-tile>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import AutoComplete from '@/components/basic/AutoComplete.vue'
import SongTile from '@/components/SongList/SongTile.vue'

@Component({
  components: {
    AutoComplete,
    SongTile
  }
})
export default class Home extends Vue {
  title: string = 'Search Songs';
  @Getter('topSongs') topSongs!: any;
  @Action('setTopSongs') setTopSongs!: null;
  items = [1,2,3,4]

  get SongNames() {
    return this.topSongs ? this.topSongs.feed.entry.map( item => item.title.label ) : []
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
