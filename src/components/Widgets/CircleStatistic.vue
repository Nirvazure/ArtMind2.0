<template>
  <v-card>
    <v-img :src="avatar" aspect-ratio="1.7">
      <v-row>
        <v-spacer></v-spacer
        ><v-chip label class="mx-6 my-3" dark :color="color">{{
          status
        }}</v-chip>
      </v-row>
    </v-img>
    <v-card-text>
      <div class="justify-center row layout ma-0">
        <v-progress-circular
          :size="140"
          :width="13"
          :rotate="-90"
          :value="value"
          :color="color"
          >{{ value }}</v-progress-circular
        >
      </div>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <div class="subheading">{{ title }}</div>
      <v-spacer></v-spacer>
      <v-span :color="color" dark label>
        <countTo :startVal="0" :endVal="count" :duration="3000"></countTo
        >张数据集
      </v-span>
    </v-card-actions>
  </v-card>
</template>

<script>
import countTo from "vue-count-to";
export default {
  components: {
    countTo,
  },
  props: {
    avatar: String,
    icon: String,
    title: String,
    subTitle: String,
    caption: String,
    value: Number,
    color: String,
    status: String,
  },
};
</script>

<style></style>
