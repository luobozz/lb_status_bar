<template>
  <div class="home_content">
    <div v-for="(item, i) in monitorInfo" :key="`moitorItem_${i}`">
      <div class="title">{{ item.title }}</div>
      <div class="content">{{ item.data }}</div>
    </div>
  </div>
</template>
<script>
import methods from "./home.js";
import os from "os-utils";
export default {
  data() {
    return {
      mointorTimes: 1000,
      monitorInfo: [
        {
          title: "CPU",
          data: "--",
          show: true,
          interval: true,
          get: (r) => {
            os.cpuUsage(function (v) {
              r.data=`${(v*100).toFixed(0)}%`
            });
          },
        },
        {
          title: "RAM",
          data: "--",
          show: true,
          interval: true,
          get: (r) => {
            r.data=`${((1-os.freememPercentage())*100).toFixed(0)}%`
          },
        },
      ],
    };
  },
  methods: methods,
  created() {
    this.init();
  },
};
</script>
<style lang="less" scoped>
@import url("./home.less");
</style>