<template>
<v-card>
    <v-card-title>我的日程</v-card-title>
    <v-calendar ref='calendar' type="month" @click:date="dosth"></v-calendar>
    <v-list>
        <h4 class='ml-2'>{{calendarData}}</h4>
        <v-list-item v-for="(s,i) in schedules" :key='i'>
            <v-list-item-avatar>
                <v-img :src="s.avatar"></v-img>
            </v-list-item-avatar>
            <v-list-item-title>{{s.content}}</v-list-item-title>
            <v-spacer></v-spacer>
            <v-list-item-action>
                <v-btn small color='primary'>确认</v-btn>
            </v-list-item-action>
        </v-list-item>
    </v-list>
</v-card>
</template>

<script>
export default {
    data: () => ({
        calendarData: '',
        schedules: [{
            avatar: require('@/assets/1.jpg'),
            content: '213123',
            date: ''
        }]
    }),
    computed: {

    },
    methods: {
        dosth(event) {
            console.log(event.date)
            this.calendarData = event.date
        }
    }
}
</script>

<style>

</style>
