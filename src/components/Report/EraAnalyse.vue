<template>
  <v-container>
    <span class="title font-weight-bold">时代分析</span>
    <MyChart></MyChart>
    <v-timeline>
      <v-timeline-item>timeline item</v-timeline-item>
      <v-timeline-item class="text-right">timeline item</v-timeline-item>
      <v-timeline-item>timeline item</v-timeline-item>
    </v-timeline>
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
