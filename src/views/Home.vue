<template>
  <div class="home">
    <img src="../assets/logo.png">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';


@Component({})
export default class Home extends Vue {
  @Getter('topSongs') topSongs!: any;
  @Action('setTopSongs') setTopSongs!: null;

  created() {
    this.setTopSongs();
  }
}
</script>