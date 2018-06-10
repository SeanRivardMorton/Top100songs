<template>
  <div id="app">
    <v-app dark>
      <v-toolbar fixed app :clipped-left="clipped">
        <v-icon color="red">music_note</v-icon>
        <v-toolbar-title v-text="title"></v-toolbar-title>
      </v-toolbar>
      <v-content>
        <v-container>
          <router-view/>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Home extends Vue {
  clipped: boolean = false;
  drawer: boolean = true;
  fixed: boolean = false;
  miniVariant: boolean = false;
  right: boolean = false;
  rightDrawer: boolean = false;
  title: string = 'itunes top 100';

  get drawerProperties() {
    return {
      drawer: this.drawer,
      miniVariant: this.miniVariant,
      clipped: this.clipped
    }
  }
}
</script>
