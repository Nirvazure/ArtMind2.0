<template>
<v-container>
    <v-card>
        <v-list>
            <v-list-item v-for="(mentor,i) in mentors" :key=i>
                <v-list-item-avatar>
                    <v-img :src="mentor.avatar"></v-img>
                </v-list-item-avatar>
                <v-list-item-title>
                    {{mentor.name}}
                </v-list-item-title>
                <v-list-item-subtitle>
                    <v-chip dark label small>{{mentor.title}}</v-chip>
                </v-list-item-subtitle>
            </v-list-item>
        </v-list>
    </v-card>
</v-container>
</template>

<script>
export default {
    data: () => ({
        mentors: [{
            name: 'Killer',
            avatar: require('@/assets/1.jpg'),
            title: '上单霸主'
        }, {
            name: 'Queen',
            avatar: require('@/assets/2.jpg'),
            title: 'Dominant'
        }, {
            name: 'Spanker',
            avatar: require('@/assets/3.jpg'),
            title: 'Cruel'
        }]
    })
}
</script>

<style>

</style>
