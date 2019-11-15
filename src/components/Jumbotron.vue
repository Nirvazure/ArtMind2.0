<template>
<v-flex xs12 text-center>
    <v-parallax dark src="http://img.zcool.cn/community/01856e57fba43ba84a0d304f7cacbe.jpg@1280w_1l_2o_100sh.jpg">
        <h3 class="display-2 font-weight-bold mb-3">
            ArtMind
        </h3>
        <p class="subheading font-weight-black">
            共收录了
            <v-chip class="ma-2" label color="yellow darken-2" dark>
                <countTo :startVal="0" :endVal="num_of_painter" :duration="3000"></countTo>
            </v-chip>
            个画家的
            <v-chip class="ma-2" label color="blue darken-2" dark>
                <countTo :startVal="0" :endVal="num_of_paints" :duration="3000"></countTo>
            </v-chip>
            张油画
        </p>
    </v-parallax>
</v-flex>
</template>

<script>
import countTo from "vue-count-to";
export default {
    name: 'HelloWorld',
    components: {
        countTo,
    },
    data: () => ({
        num_of_painter: 30,
        num_of_paints:3000
    }),
};
</script>
