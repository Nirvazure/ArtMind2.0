<template>
  <v-card>
    <v-card-text class="pa-0">
      <v-container class="pa-0">
        <div class="layout row ma-0">
          <div class="sm6 xs6 flex">
            <div class="layout column ma-0 justify-center align-center">
              <v-icon size="56px" :color="color">{{ icon }}</v-icon>
            </div>
          </div>
          <div class="sm6 xs6 flex text-sm-center py-3 white--text" :class="color">
            <div class="headline">
              <countTo :startVal="0" :endVal="count" :duration="3000"></countTo>
            </div>
            <span class="title">{{ title }}</span>
          </div>
        </div>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import countTo from "vue-count-to";
export default {
  components: {
    countTo
  },
  props: {
    icon: String,
    count: Number,
    title: String,
    color: String
  }
};
</script>