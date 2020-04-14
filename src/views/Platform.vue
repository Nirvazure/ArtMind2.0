<template>
  <v-container>
    <v-row>
      <Models></Models>
    </v-row>
    <v-row>
      <v-col v-for="(v,i) in statistics" :key="i" class="mx-7">
        <mini-statistic :icon="v.icon" :count="v.count" :title="v.title" :color="v.color"></mini-statistic>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MiniStatistic from "@/components/Widgets/MiniStatistic";
import Models from "@/components/Model";
export default {
  data: () => ({
    statistics: [
      {
        icon: "mdi-sina-weibo",
        title: "Painters",
        count: "30",
        color: "indigo"
      },
      { icon: "mdi-douban", title: "Crafts", count: "3000", color: "red" },
      { icon: "mdi-wechat", title: "Models", count: "3", color: "light-blue" },
      { icon: "mdi-google", title: "21321", count: "3123", color: "purple" }
    ]
  }),
  components: {
    Models,
    MiniStatistic
  }
};
</script>

<style>
</style>