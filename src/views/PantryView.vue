<template>
  <v-layout justify-center>
    <PantryListComponent/>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PantryListComponent from '@/components/pantry/PantryListComponent.vue';

@Component({
  components: {PantryListComponent},
  computed: {}
})
export default class PantryView extends Vue {}
</script>
