<template>
  <v-container>
    <v-timeline dense>
      <v-timeline-item>
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
                    <v-list-item-title class="font-weight-bold display-2">文艺复兴</v-list-item-title>
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
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn icon>
                          <v-icon small>mdi-heart</v-icon>
                        </v-btn>
                        <v-btn icon>
                          <v-icon small>mdi-share-variant</v-icon>
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
      </v-timeline-item>
      <v-timeline-item class="text-right">timeline item</v-timeline-item>
      <v-timeline-item>timeline item</v-timeline-item>
    </v-timeline>

    <!-- <v-row>
      <v-col v-for="(painter,i) in painters" :key="i" cols="12" md="2">
        <v-card>
          <v-card-text class="text-center">
            <v-avatar size="100">
              <v-img :src="painter.avatar"></v-img>
            </v-avatar>
            <p>{{painter.name}}</p>
            <v-chip small dark color="blue">文艺复兴</v-chip>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" dark block>关注</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>-->
    <v-row>
      <v-col v-for="(painter, i) in crafts" :key="i" cols="12" md="3">
        <v-card>
          <v-img :src="painter.avatar" aspect-ratio="1.5"></v-img>
          <v-card-actions>
            <v-card-action-text>{{ painter.name }}</v-card-action-text>
            <v-spacer></v-spacer>
            <v-btn color="red" dark>喜欢</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import painters from "@/api/painters.js";
export default {
  data: () => ({
    tab: null,
    items: ["Painters", "Crafts", "Deserts", "Cocktails"],
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    painters: painters,
    crafts: painters
  })
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
