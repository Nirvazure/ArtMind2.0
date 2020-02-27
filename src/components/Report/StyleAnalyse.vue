<template>
  <v-container>
    <span class="title font-weight-bold">类别分析</span>
    <v-row>
      <v-col class="text-center" v-for="(s,i) in styles" :key="i">
        <v-chip :color="s.color" dark small>{{s.name}}</v-chip>
        <v-progress-circular
          class="my-2"
          size="70"
          width="10"
          :value="s.value"
          :color="s.color"
        >{{s.value}}</v-progress-circular>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    styles: [
      {
        name: "抽象派",
        value: 70,
        color: "teal"
      },
      {
        name: "野兽派",
        value: 30,
        color: "green"
      },
      {
        name: "浪漫主义",
        value: 20,
        color: "cyan"
      }
    ]
  })
};
</script>

<style>
</style>
