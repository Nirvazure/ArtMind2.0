<template>
  <v-container>
    <v-card>
      <v-img
        class="text-center justify-center py-6"
        height="100%"
        aspect-ratio="10"
        src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2478879494,2180777851&fm=26&gp=0.jpg"
      >
        <v-row align="end" class="fill-height">
          <v-col class="py-0">
            <v-list-item color="rgba(0, 0, 0, .4)" dark>
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold display-2"
                  >文艺复兴</v-list-item-title
                >
                <v-list-item-subtitle>约1300-1600</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
      </v-img>

      <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
        <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in items" :key="item">
          <v-container>
            <v-row>
              <v-col v-for="(painter, i) in painters" :key="i" cols="12" md="2">
                <v-card flat class="basil">
                  <v-card-text class="text-center">
                    <v-avatar size="100">
                      <v-img :src="painter.avatar"></v-img>
                    </v-avatar>
                    <p>{{ painter.name }}</p>
                    <v-chip small dark color="blue">文艺复兴</v-chip>
                  </v-card-text>
                  <v-card-actions class="white justify-center">
                    <v-btn
                      v-for="(social, i) in socials"
                      :key="i"
                      :color="social.color"
                      class="white--text"
                      fab
                      icon
                      small
                    >
                      <v-icon>{{ social.icon }}</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
              <v-divider vertical></v-divider>
            </v-row>
          </v-container>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
    <PainterTable></PainterTable>
  </v-container>
</template>

<script>
import PainterTable from "@/components/PainterTable";
import painters from "@/api/painters.js";
export default {
  components: { PainterTable },
  data: () => ({
    tab: null,
    socials: [
      {
        icon: "mdi-facebook",
        color: "indigo",
      },
      {
        icon: "mdi-linkedin",
        color: "cyan darken-1",
      },
      {
        icon: "mdi-instagram",
        color: "red lighten-3",
      },
    ],
    items: ["Painters", "Crafts", "Deserts", "Cocktails"],
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    painters: painters,
    crafts: painters,
  }),
};
</script>

<style>
/* Helper classes */
.basil {
  background-color: #fffbe6 !important;
}
.basil--text {
  color: #356859 !important;
}
</style>
