<template>
  <v-container>
    <v-card color="teal lighten-1" dark>
      <RaddarChart></RaddarChart>
    </v-card>
    <v-row>
      <v-col v-for="(card,i) in cards" :key="i">
        <ProgressCard
          :name="card.name"
          :color="card.color"
          :value="card.value"
          :description="card.des"
        ></ProgressCard>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import ProgressCard from "@/components/ProgressCard";
import RaddarChart from "@/components/RaddarChart";
export default {
  components: {
    RaddarChart,
    ProgressCard
  },
  data: () => ({

    cards: [
      { name: "印象派", value: 90, des: "Impressionist", color: "teal" },
      { name: "古典主义", value: 50, des: "Classcism", color: "purple" },
      { name: "立体派", value: 70, des: "Cubism", color: "pink" },
      { name: "野兽派", value: 70, des: "Fauavism", color: "indigo" },
      { name: "达达主义", value: 10, des: "Dadaism", color: "orange" },
      { name: "浪漫主义", value: 70, des: "Romanticism", color: "yellow" }
    ]
  })
};
</script>

<style>
</style>