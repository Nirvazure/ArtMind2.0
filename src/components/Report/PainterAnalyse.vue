<template>
  <v-container>
    <span class="title font-weight-bold">画家推测</span>
    <v-sheet class="text-center">
      <v-list two-line>
        <v-list-item v-for="(painter,i) in painters" :key="i">
          <v-list-item-avatar large>
            <v-img :src="painter.avatar"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="ml-0" v-html="painter.name">dsad</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-progress-circular></v-progress-circular>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-sheet>
  </v-container>
</template>

<script>
import painters from "@/api/painters.js";
export default {
  data: () => ({
    painters: painters.slice(0, 5)
  })
};
</script>

<style>
</style>
