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
  </v-container>
</template>

<script>
import PainterTable from "@/components/PainterTable";
import MiniStatistic from "@/components/Widgets/MiniStatistic";
import Models from "@/components/Model";
export default {
  data: () => ({}),
  components: {
    Models,
    PainterTable,
  },
};
</script>

<style></style>
