<template>
    <v-container fluid>
        <v-layout row wrap>
            <v-flex xs12>
                <v-select :items="items" v-model="autoComplete" label="Select" autocomplete></v-select>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class AutoComplete extends Vue {
    @Prop() items!: string;
    autoComplete = null;
}
</script>

