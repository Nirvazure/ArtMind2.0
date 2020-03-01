<template>
  <v-parallax class="text-center pa-0" height="800" dark :src="bgImg">
    <h3 class="display-3 font-weight-bold">ArtMind</h3>
    <h4 class="heading font-thin mb-7">最懂你的AI绘画分析引擎</h4>
    <p class="subheading font-weight-black">
      共收录了
      <v-chip class="ma-2" label color="yellow darken-2" dark>
        <countTo :startVal="0" :endVal="num_of_painter" :duration="3000"></countTo>
      </v-chip>个画家的
      <v-chip class="ma-2" label color="blue darken-2" dark>
        <countTo :startVal="0" :endVal="num_of_paints" :duration="3000"></countTo>
      </v-chip>张油画
    </p>
  </v-parallax>
</template>

<script>
import countTo from "vue-count-to";
export default {
  components: {
    countTo
  },
  data: () => ({
    bgImg: require("@/assets/crafts/44444.jpg"),
    num_of_painter: 30,
    num_of_paints: 3000
  })
};
</script>
