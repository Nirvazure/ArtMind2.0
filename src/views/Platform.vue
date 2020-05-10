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
  data: () => ({
    types: ["Places to Be", "Places to See"],
    cards: ["Good", "Best", "Finest"]
  }),
  components: {
    Models,
    PainterTable
  },
  methods: {
    getImage() {
      const min = 550;
      const max = 560;

      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }
};
</script>

<style></style>
