<template>
  <v-parallax class="text-center pa-0" height="800" dark :src="randCraft">
    <h3 class="display-3 font-weight-bold animated zoomIn">ArtMind</h3>
    <h4 class="heading font-thin mb-7 animated zoomIn">
      最懂你的AI绘画分析引擎
    </h4>
    <p class="subheading font-weight-black  animated zoomIn">
      共收录了
      <v-chip class="ma-2" label color="yellow darken-2" dark>
        <countTo
          :startVal="0"
          :endVal="num_of_painter"
          :duration="3000"
        ></countTo> </v-chip
      >个画家的
      <v-chip class="ma-2" label color="blue darken-2" dark>
        <countTo
          :startVal="0"
          :endVal="num_of_paints"
          :duration="3000"
        ></countTo> </v-chip
      >张油画
    </p>
  </v-parallax>
</template>

<script>
import countTo from "vue-count-to";
export default {
  components: {
    countTo,
  },
  data: () => ({
    imgs: [
      require("@/assets/crafts/c1.jpg"),
      require("@/assets/crafts/c2.jpg"),
      require("@/assets/crafts/c3.jpg"),
    ],
    bgImg: require("@/assets/crafts/c3.jpg"),
    num_of_painter: 30,
    num_of_paints: 3000,
  }),
  computed: {
    randCraft: function() {
      let a = new Date().getSeconds() % 3;
      if (a == 0) {
        return this.imgs[0];
      } else if (a == 1) {
        return this.imgs[1];
      } else {
        return this.imgs[2];
      }
    },
  },
};
</script>
