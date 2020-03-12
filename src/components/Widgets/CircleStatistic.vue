<template>
  <v-card>
    <v-card-title>
      <div class="layout row ma-0 justify-space-between pb-1">
        <div class="subheading">{{ title }}</div>
      </div>
    </v-card-title>
    <v-card-text>
      <div class="justify-center row layout ma-0">
        <v-progress-circular
          :size="150"
          :width="15"
          :rotate="-90"
          :value="value"
          :color="color"
        >{{ value }}</v-progress-circular>
      </div>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-span :color="color" dark label>
        <countTo :startVal="0" :endVal="count" :duration="3000"></countTo>张数据集
      </v-span>
      <v-spacer></v-spacer>
      <v-chip dark :color="color">{{status}}</v-chip>
    </v-card-actions>
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
    title: String,
    subTitle: String,
    caption: String,
    value: Number,
    color: String,
    status: String
  }
};
</script>

<style></style>
