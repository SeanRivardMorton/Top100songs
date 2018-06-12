<template>
    <v-container fluid>
        <v-layout row wrap>
            <v-flex xs12>
                <v-select color="red" :items="items" item-text="title.label" v-model="autoComplete" :label="selectLabel" return-object autocomplete @input="update()"></v-select>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Action } from 'vuex-class';

@Component({})
export default class AutoComplete extends Vue {
    selectLabel: string = 'Search the top 100 songs on itunes'
    autoComplete: any = null;

    @Prop() items!: Array<string>;
    @Action('setSong') setSong!: Function;


    update() {
        this.setSong(this.autoComplete);
    }
}
</script>

