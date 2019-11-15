<template>
<v-flex mb-5 xs12>
    <p>{{msg}}</p>
    <input type="file" placeholder="edit me">
    <v-btn block color="primary" @click="getHeros">上传</v-btn>
    <h2 class="headline font-weight-bold mb-3">What's next?</h2>
    <v-layout justify-center>
        <a v-for="(next, i) in whatsNext" :key="i" :href="next.href" class="subheading mx-3" target="_blank">
            {{ next.text }}
        </a>
    </v-layout>
</v-flex>
</template>

<script>
import axios from "axios";
export default {
    name: 'HelloWorld',
    components: {},
    data: () => ({
        jumseen: false,
        msg:'sss',
        image:'',
        whatsNext: [{
                text: 'Explore components',
                href: 'https://vuetifyjs.com/components/api-explorer',
            },
            {
                text: 'Select a layout',
                href: 'https://vuetifyjs.com/layout/pre-defined',
            },
            {
                text: 'Frequently Asked Questions',
                href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
            },
        ],
    }),
    methods: {
        getHeros() {
            axios.post('/api/up_photo', {
                file: this.firstname,
            })
            .then(function (response) {
                this.msg=response;
            })
        }
    }
};
</script>
