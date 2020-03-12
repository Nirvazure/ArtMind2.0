<template>
  <div>
    <Jumbotron></Jumbotron>
    <!-- <v-container> -->
    <v-row>
      <v-col v-for="(v,i) in statistics" :key="i" class="mx-7">
        <mini-statistic :icon="v.icon" :count="v.count" :title="v.title" :color="v.color"></mini-statistic>
      </v-col>
    </v-row>
    <!-- </v-container> -->
  </div>
</template>

<script>
import Jumbotron from "../components/Jumbotron";
import MiniStatistic from "@/components/Widgets/MiniStatistic";
export default {
  components: {
    Jumbotron,
    MiniStatistic
  },
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
  })
};
</script>
