<template>
<v-card>
    <v-card-title>
        <v-img :src="img"></v-img>
    </v-card-title>
    <p class="text-center title font-weight-black">
        Nirvazure Darkrai
    </p>
    <v-card-actions>
        <v-btn color="primary" block>关注</v-btn>
    </v-card-actions>
</v-card>
</template>

<script>
export default {
    data: () => ({
        img: require('@/assets/3.jpg')
    })
}
</script>

<style>

</style>
