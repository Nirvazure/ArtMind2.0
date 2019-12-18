<template>
<v-container>
    <v-row>
        <v-col cols="12" sm="12" md='5'>
            <SlaveCalendar></SlaveCalendar>
        </v-col>
        <v-col cols="12" sm="12" md='4'>
            <SlavePlan></SlavePlan>
        </v-col>
        <v-col cols="12" sm="12" md='3'>
            <SlavePreview></SlavePreview>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12" sm="12" md='5'>
            <SlaveServiceRank></SlaveServiceRank>
        </v-col>
        <v-col cols="12" sm="12" md='5'>
            <MentorList></MentorList>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import SlaveCalendar from '@/components/Slave/Calendar'
import SlavePlan from '@/components/Slave/Plan'
import SlavePreview from '@/components/Slave/Preview'
import SlaveServiceRank from '@/components/Slave/ServiceRank'
import MentorList from '@/components/Slave/MentorList'
export default {
    components: {
        SlaveCalendar,
        SlavePlan,
        SlavePreview,
        SlaveServiceRank,
        MentorList
    },

}
</script>

<style>

</style>
