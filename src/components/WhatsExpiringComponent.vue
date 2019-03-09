<template>
<v-layout justify-center>
    <v-flex xs12 sm6>
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex xs12>
              <v-card color="secondary">
                <v-card-title><h1 class="headline"> Was muss weg?</h1></v-card-title>
                <v-card-text>alles</v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
    </v-flex>
  </v-layout>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from "vue-property-decorator";
import router from "@/router";

@Component({
  components: {},
  methods: { routeTo: target => router.push(target) }
})
export default class WhatsExpiringComponent extends Vue {

}
</script>