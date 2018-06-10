<template>
    <v-layout>
        <v-flex>
            <v-card flat color="transparent" v-for="n in 5" :key="n.id" class="mb-1 mt-1">
                <song-tile :item="{songName:'Come Tomorrow', songArtist:'Dave Matthews Band'}"></song-tile>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import SongTile from '@/components/SongList/SongTile.vue'

@Component({
    components: {
        SongTile
    }
})
export default class SongList extends Vue {
    @Prop() songList!: Array<any>
}

</script>