<template>
<v-container>
    <v-row>
        <v-col cols="12" md='9'>
            <v-card class="my-1">
                <picture-input ref="pictureInput" accept="image/jpeg,image/png" hideChangeButton=true @change="onChange"></picture-input>
                <v-card-actions>
                    <v-btn block dark @click="startTest">{{btnText}}</v-btn>
                </v-card-actions>
            </v-card>
            <StyleAnalyse class="my-2" v-if="response"></StyleAnalyse>
        </v-col>
        <v-col cols="12" md='3'>
            <PainterAnalyse class="my-1" v-if="response"></PainterAnalyse>
            <EraAnalyse class="my-2" v-if="response"></EraAnalyse>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import StyleAnalyse from '@/components/Report/StyleAnalyse.vue'
import EraAnalyse from '@/components/Report/EraAnalyse'
import PainterAnalyse from '@/components/Report/PainterAnalyse'
import PictureInput from 'vue-picture-input'
export default {
    components: {
        PictureInput,
        PainterAnalyse,
        StyleAnalyse,
        EraAnalyse
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
