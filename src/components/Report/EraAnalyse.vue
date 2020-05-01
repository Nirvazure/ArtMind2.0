<template>
  <v-container>
    <span class="title font-weight-bold">画像分析</span>
    <MyChart></MyChart>
  </v-container>
</template>

<script>
import MyChart from "@/components/Echart";

export default {
  components: {
    MyChart
  }
};
</script>
