<template>
<v-container>
    <PainterTable></PainterTable>
    <v-row>
        <v-col cols="12" sm="12" md='9'>
            <v-container>
                <v-row>
                    <v-col>
                        <v-card>
                            <v-card-title>我的日程</v-card-title>
                            <v-calendar></v-calendar>
                        </v-card>
                    </v-col>
                    <v-col>
                        <v-card>
                            <v-card-title>我的计划</v-card-title>
                            <v-row>
                                <v-col class="text-center">
                                    <v-progress-circular width="10" size="90" color='green' value=54>72</v-progress-circular>
                                </v-col>
                                <v-col class="text-center">
                                    <v-progress-circular width="10" size="90" color='green' value=54>72</v-progress-circular>
                                </v-col>
                                <v-col class="text-center">
                                    <v-progress-circular width="10" size="90" color='green' value=54>72</v-progress-circular>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-col>
        <v-col cols="12" sm="12" md='3'>
            <v-card>
                <v-card-title>
                    <v-img :src="img"></v-img>
                </v-card-title>
                <!-- <v-card-text> -->

                <p class="text-center title font-weight-black">
                    Nirvazure Darkrai
                </p>
                <v-row>
                    <v-col class="text-center">
                        <p class="title">ss</p>
                        <p>231</p>
                    </v-col>
                    <v-divider vertical></v-divider>
                    <v-col class="text-center">
                        <p class="title">ss</p>
                        <p>231</p>
                    </v-col>
                    <v-divider vertical></v-divider>
                    <v-col class="text-center">
                        <p class="title">ss</p>
                        <p>231</p>
                    </v-col>
                </v-row>
                <v-card-actions>
                    <v-btn color="primary" block>
                        关注
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import PainterTable from '../components/PainterTable'
export default {
    components: {
        PainterTable
    },
    data: () => ({
        img: require('../assets/3.jpg')
    })
}
</script>
