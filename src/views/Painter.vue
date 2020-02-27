<template>
  <v-container>
    <v-row>
      <!-- <v-col>
        <v-avatar>
          <v-img :src="img"></v-img>
        </v-avatar>
      </v-col>-->
      <v-col>
        <h2>文艺复兴</h2>
        <h4>1430-1500</h4>
      </v-col>
    </v-row>
    <v-row>
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
    </v-row>
    <v-row>
      <v-col v-for="(painter,i) in crafts" :key="i" cols="12" md="3">
        <v-card>
          <v-img :src="painter.avatar" aspect-ratio="1.5"></v-img>
          <v-card-actions>
            <v-card-action-text>{{painter.name}}</v-card-action-text>
            <v-spacer></v-spacer>
            <v-btn color="red" dark>喜欢</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    img: require("@/assets/painters/010103.jpg"),
    painters: [
      { name: "拉斐尔", avatar: require("@/assets/painters/010102.jpg") },
      { name: "达芬奇", avatar: require("@/assets/painters/010103.jpg") },
      { name: "梵高", avatar: require("@/assets/painters/020204.jpg") },
      { name: "拉斐尔", avatar: require("@/assets/painters/010102.jpg") },
      { name: "达芬奇", avatar: require("@/assets/painters/010103.jpg") },
      { name: "梵高", avatar: require("@/assets/painters/020204.jpg") }
    ],
    crafts: [
      { name: "拉斐尔", avatar: require("@/assets/painters/010102.jpg") },
      { name: "达芬奇", avatar: require("@/assets/painters/010103.jpg") },
      { name: "梵高", avatar: require("@/assets/painters/020204.jpg") },
      { name: "拉斐尔", avatar: require("@/assets/painters/010102.jpg") }
    ]
  })
};
</script>

<style>
</style>