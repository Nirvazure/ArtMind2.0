<template>
  <v-container>
    <v-row>
      <v-col>
        <Models></Models>
      </v-col>
      <v-col cols="12" sm="8">
        <PainterTable></PainterTable>
      </v-col>
    </v-row>

    <v-row>
      <v-col v-for="(v,i) in statistics" :key="i" class="mx-7">
        <mini-statistic :icon="v.icon" :count="v.count" :title="v.title" :color="v.color"></mini-statistic>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PainterTable from "@/components/PainterTable";
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
    MiniStatistic,
    PainterTable
  }
};
</script>

<style>
</style>