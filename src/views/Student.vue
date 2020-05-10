<template>
  <div class="mx-7">
    <v-row>
      <v-col cols="12" md="9">
        <router-view></router-view>
      </v-col>
      <v-col cols="12" md="3">
        <v-card flat>
          <v-card-title class="justify-center">
            <v-avatar size="150">
              <v-img aspect-ratio="1" :src="myInfo.avatar"></v-img>
            </v-avatar>
          </v-card-title>
          <v-card-actions>
            <v-btn block color="teal" dark>受训中</v-btn>
          </v-card-actions>
          <v-card-text>
            <v-row>
              <v-col class="d-flex flex-column justift-center">
                <h4>身高：172cm</h4>
                <h4>体重：96g</h4>
                <h4>罩杯：C</h4>
              </v-col>
              <v-divider vertical></v-divider>
              <v-col>
                <h4>胸围：88cm</h4>
                <h4>腰围：62cm</h4>
                <h4>臀围：89cm</h4>
              </v-col>
            </v-row>
          </v-card-text>
          <v-list>
            <v-list-item-group v-model="item" color="pink">
              <v-list-item v-for="(item, i) in items" :key="i" @click="routerChange(item.text)">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-list-item-icon v-on="on">
                      <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                  </template>
                  <span>{{item.text}}</span>
                </v-tooltip>
                <v-list-item-content>
                  <v-list-item-title class="font-weight-bold" v-text="item.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import myInfo from "@/api/mine";
export default {
  data: () => ({
    myInfo: myInfo,
    item: 0,
    items: [
      {
        text: "Info",
        icon: "mdi-home"
      },
      {
        text: "Contract",
        icon: "mdi-gamepad-square"
      },
      {
        text: "Schedule",
        icon: "mdi-music"
      },
      {
        text: "Train",
        icon: "mdi-palette"
      },
      {
        text: "Log",
        icon: "mdi-palette"
      }
    ]
  }),
  methods: {
    routerChange(routeName) {
      this.$router.push({
        path: `/mine/${routeName}`
      });
    }
  }
};
</script>

<style></style>
