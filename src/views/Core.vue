<template>
<v-container>
    <v-card>
        <picture-input ref="pictureInput" accept="image/jpeg,image/png" size="10" hideChangeButton=true :custom-strings="{
        upload: '<h1>Bummer!</h1>',
        drag: 'Drag a 😺 GIF or GTFO'
      }" @change="onChange">
        </picture-input>
        <v-progress-linear :active="loading" :indeterminate="loading" bottom color="deep-purple accent-4"></v-progress-linear>
        <v-btn block color="green" dark @click="startTest">{{btnText}}</v-btn>
        <Report v-if="response"></Report>
    </v-card>
</v-container>
</template>

<script>
import PictureInput from 'vue-picture-input'
import Report from '../components/Report'
export default {
    components: {
        Report,
        PictureInput
    },
    data: () => ({
        loading: false,
        btnText: '开启艺术探索',
        response: false
    }),
    methods: {
        onChange(image) {
            console.log('New picture selected!')
            if (image) {
                console.log('Picture loaded.')
                this.image = image
            } else {
                console.log('FileReader API not supported: use the <form>, Luke!')
            }
        },
        startTest() {
            this.btnText = "分析中"
            this.loading = true
            this.response = false
        }
    },
    watch: {
        loading(val) {
            if (!val) return
            setTimeout(() => {
                this.loading = false, this.btnText = "开启艺术探索", this.response = true
            }, 3000)
        },
    }
}
</script>
