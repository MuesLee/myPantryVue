<template>
  <v-layout justify-center>
    <v-flex>
      <WhatsExpiringComponent/>
      <WhatsOutOfStockComponent/>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import WhatsExpiringComponent from "@/components/WhatsExpiringComponent.vue";
import WhatsOutOfStockComponent from "@/components/WhatsOutOfStockComponent.vue";

@Component({
  components: { WhatsExpiringComponent, WhatsOutOfStockComponent },
  computed: {}
})
export default class HomeView extends Vue {}
</script>
