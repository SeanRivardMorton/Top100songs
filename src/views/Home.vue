<template>
  <v-layout justify-center>
    <v-flex xs12 lg6>
      <!-- <auto-complete :items="SongNames"></auto-complete> -->
      <song-list :songs="songs"></song-list>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import AutoComplete from '@/components/basic/AutoComplete.vue'
import SongList from '@/components/SongList/SongList.vue'

@Component({
  components: {
    AutoComplete,
    SongList
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

  // return an empty array if the API has not returned with its query.
  get songs() {
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
