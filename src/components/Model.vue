<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="4" v-for="(model,i) in models" :key="i">
        <v-card :disabled="model.status=='待应用'" shaped>
          <v-img :src="model.avatar" aspect-ratio="2"></v-img>
          <CircleStatistic
            :title="model.name"
            sub-title="90%"
            :caption="model.description"
            icon="mdi-wechat"
            :color="model.color?model.color:'grey'"
            :value="90"
            status="已部署"
          ></CircleStatistic>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CircleStatistic from "@/components/Widgets/CircleStatistic";
export default {
  components: {
    CircleStatistic
  },
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
    ]
  })
};
</script>

<style></style>
