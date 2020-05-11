<template>
  <v-card :color="bgColor">
    <v-card-title class>{{name}}</v-card-title>
    <v-card-subtitle>{{description}}</v-card-subtitle>
    <v-card-text class="text-center">
      <v-progress-circular width="12" :value="value" size="120" :color="color">
        <h1>{{value}}%</h1>
      </v-progress-circular>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    name: String,
    description: String,
    value: Number,
    color: String,
    bgColor: String
  }
};
</script>

<style>
</style>