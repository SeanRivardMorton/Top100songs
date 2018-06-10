<template>
    <v-layout>
        <v-flex xs2>
            <v-card flat class="pa-0 ma-0 song__button">
                <v-btn color="red" class="ma-0 song__button--fill">Add</v-btn>
            </v-card>
        </v-flex>
        <v-flex xs10>
            <v-layout column>
                <v-flex xs12>
                    <v-card flat>
                        <v-card-title class="title">{{ song['im:name'].label }}</v-card-title>
                        <v-divider/>
                        <v-card-title class="subheader">{{song['im:artist'].label }}</v-card-title>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-flex>
    </v-layout>
</template>

<script lang="ts">
    import { Component, Vue, Prop } from 'vue-property-decorator';

    @Component({})
    export default class SongTile extends Vue {
        @Prop() song!: any;
    }

</script>

<style lang="scss" scoped>
.song__button {
  height: 100% !important;
}

.song__button--fill {
  height: 100%;
  width: 100%;
}
</style>
