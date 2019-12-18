<template>
<v-sheet class='text-center'>
    <v-parallax dark src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573822706162&di=d218dcdf14c1d5e4b45b3b9e08ae84cb&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fphotoblog%2F1203%2F01%2Fc1%2F10695750_10695750_1330579114750.jpg">
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
</v-sheet>
</template>

<script>
import countTo from "vue-count-to";
export default {
    components: {
        countTo,
    },
    data: () => ({
        num_of_painter: 30,
        num_of_paints: 3000
    }),
};
</script>
