<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4" v-for="(plan,i) in trainPlans" :key="i">
        <v-card color="orange darken-1" dark :img="plan.img">
          <v-card-title>
            {{plan.name}}
            <v-spacer></v-spacer>
            <v-chip color="orange">{{plan.level}}</v-chip>
          </v-card-title>
          <v-card-subtitle>{{plan.description}}</v-card-subtitle>
          <!-- <v-card-text>{{plan.description}}</v-card-text> -->
          <v-card-text>
            <v-chip
              v-for="(tag,i) in plan.tags"
              :key="i"
              small
              label
              color="teal"
              class="mx-1"
            >{{tag}}</v-chip>
          </v-card-text>
          <v-card-actions>
            <v-avatar v-for="(mentor,i) in plan.mentors" :key="i" size="30" class="mx-1">
              <v-img :src="mentor.avatar"></v-img>
            </v-avatar>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
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
import trainPlans from "@/api/trainPlans";
import PainterTable from "@/components/PainterTable";
import MiniStatistic from "@/components/Widgets/MiniStatistic";
import Models from "@/components/Model";
export default {
  data: () => ({
    trainPlans: trainPlans,
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
