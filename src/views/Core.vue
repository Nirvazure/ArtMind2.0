<template>
<div>
    <PainterList></PainterList>
    <Report></Report>
    <HelloWorld></HelloWorld>
</div>
</template>

<script>
import PainterList from '../components/PainterList'
import Report from '../components/Report'
import HelloWorld from '../components/HelloWorld'
export default {
    components: {
        PainterList,
        Report,
        HelloWorld
    },
    data: () => ({

    })
}
</script>
