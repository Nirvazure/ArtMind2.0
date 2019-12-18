<template>
<v-container>
    <v-row>
        <v-col cols="12" sm="4">
            <StyleAnalyse></StyleAnalyse>
        </v-col>
        <v-col cols="12" sm="4">
            <EraAnalyse></EraAnalyse>
        </v-col>
        <v-col cols="12" sm="4">
            <PainterAnalyse></PainterAnalyse>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import StyleAnalyse from '@/components/Report/StyleAnalyse.vue'
import EraAnalyse from '@/components/Report/EraAnalyse'
import PainterAnalyse from '@/components/Report/PainterAnalyse'
export default {
    components: {
        StyleAnalyse,
        EraAnalyse,
        PainterAnalyse
    }
}
</script>
