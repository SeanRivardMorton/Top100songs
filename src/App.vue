<template>
  <div id="app">
    <v-app dark>
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
  title: string = 'CopoFi Submission';

  get drawerProperties() {
    return {
      drawer: this.drawer,
      miniVariant: this.miniVariant,
      clipped: this.clipped
    }
  }
}
</script>
