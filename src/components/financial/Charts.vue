<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div ref="chart"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  props: ["xData", "data"],
  watch: {
    xData() {
      this.refresh();
    },
    data() {
      this.refresh();
    },
  },
  mounted() {
    this.refresh();
  },
  methods: {
    refresh() {
      // 调用echarts.getInstanceByDom()方法判断是否已经存在echarts实例，如果存在则直接使用，否则调用echarts.init()方法创建echarts实例
      let chart = echarts.getInstanceByDom(this.$refs.chart);
      if (chart == null) {
        chart = echarts.init(this.$refs.chart);
      }
      // let chart = echarts.init(this.$refs.chart);
      chart.clear();
      chart.setOption({
        xAxis: {
          data: this.xData,
        },
        yAxis: {
          type: "value",
        },
        series: {
          name: this.name,
          type: "line",
          data: this.data,
        },
      });
    },
  },
};
</script>
