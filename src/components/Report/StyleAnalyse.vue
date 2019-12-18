<template>
<v-card>
    <v-card-title>
        <v-icon left>mdi-share</v-icon>
        <span class="title font-weight-bold">类别分析</span>
    </v-card-title>
    <v-row>
        <v-col class='text-center' v-for='(s,i) in styles' :key='i'>
            <v-chip :color='s.color' dark>{{s.name}}</v-chip>
            <v-progress-circular class='my-2' size="90" width="15" :value='s.value' :color='s.color'>{{s.value}}</v-progress-circular>
        </v-col>
    </v-row>
</v-card>
</template>

<script>
export default {
    data: () => ({
        styles: [{
                name: '抽象派',
                value: 70,
                color: 'teal'
            },
            {
                name: '野兽派',
                value: 30,
                color: 'green'
            },
            {
                name: '浪漫主义',
                value: 20,
                color: 'cyan'
            },
            {
                name: '巴洛克',
                value: 30,
                color: 'purple'
            },
            {
                name: '达达主义',
                value: 20,
                color: 'red'
            }
        ]
    })
}
</script>

<style>

</style>
