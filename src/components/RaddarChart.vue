<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from "echarts";
require("echarts/theme/shine"); // echarts theme

const animationDuration = 3000;

export default {
  props: {
    className: {
      type: String,
      default: "chart"
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "300px"
    }
  },
  data: () => ({
    chart: null,
    option: {
      tooltip: {},
      radar: {
        // shape: "circle",
        name: {
          textStyle: {
            color: "#fff",
            // backgroundColor: "#888",
            borderRadius: 5,
            padding: [5, 5]
          }
        },

        splitArea: {
          show: true
        },
        axisLine: {
          lineStyle: {
            color: "white"
          }
        },
        indicator: [
          { name: "印象派", max: 100 },
          { name: "抽象派", max: 100 },
          { name: "现实主义", max: 100 },
          { name: "巴洛克", max: 100 },
          { name: "洛可可", max: 100 },
          { name: "达达主义", max: 100 }
        ]
      },
      series: [
        {
          name: "预算 vs 开销（Budget vs spending）",
          type: "radar",
          // areaStyle: { normal: {} },
          data: [
            {
              value: [50, 70, 82, 91, 20, 70],
              name: "Nirvazure",
              lineStyle: {
                color: "teal"
              }
            }
          ]
        }
      ]
    }
  }),
  mounted() {
    this.initChart();
  },

  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, "shine");
      this.chart.setOption(this.option);
    }
  }
};
</script>
