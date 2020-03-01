<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="4" v-for="(model,i) in models" :key="i">
        <v-card :color="model.color?model.color:'grey'" dark :disabled="model.status=='待应用'" shaped>
          <v-img :src="model.avatar" aspect-ratio="2"></v-img>
          <v-card-title>{{model.name}}</v-card-title>
          <v-card-subtitle>{{model.description}}</v-card-subtitle>
          <v-card-actions>
            <v-btn block>{{model.status}}</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-list>
      <v-list-item v-for="(p, i) in painters" :key="i">
        <v-list-item-title>{{ p.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    models: [
      {
        name: "西方油画",
        description: "用于西方流派分析",
        avatar: require("@/assets/west.jpg"),
        status: "已部署",
        color: "cyan"
      },
      {
        name: "中国山水",
        description: "用于中国风山水画分析",
        avatar: require("@/assets/china.jpg"),
        status: "待应用"
        // color: "teal"
      },
      {
        name: "日本浮世绘",
        description: "用于日式浮世绘风格分析",
        avatar: require("@/assets/japan.jpg"),
        status: "待应用"
        // color: "orange"
      }
    ],
    painters: [
      { name: "", title: "逃犯" },
      { name: "", title: "光影大师" },
      { name: "", title: "奇才" },
      { name: "", title: "彩虹" },
      { name: "", title: "睡莲" },
      { name: "", title: "幸福画家" },
      { name: "", title: "疯子" },
      { name: "", title: "舞女控" },
      { name: "", title: "苹果男" }
    ]
  })
};
</script>

<style></style>
