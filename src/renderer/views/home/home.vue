<template>
  <div
    class="home_content"
    @mouseenter="curAction().hover(true)"
    @mouseleave="curAction().hover(false)"
  >
    <div v-for="(item, i) in monitorInfo" :key="`moitorItem_${i}`">
      <div class="title">
        <lb-icon
          v-if="item.title.flag == 'icon'"
          :type="item.title.icon"
          :alt="item.title.title"
        ></lb-icon>
        <div v-else>{{ item.title.title }}</div>
      </div>
      <div class="content">{{ item.data }}</div>
    </div>
    <div class="sfa_btn_group" ref="sfa">
      <div
        :class="{ sfa_btn_switch: true, show: sfa.show }"
        @click="sfa.show ? sfaAction().hide() : sfaAction().show()"
      >
        <lb-icon
          v-show="sfa.switchShow"
          :type="sfa.show ? 'fa-angle-left' : 'fa-angle-right'"
        ></lb-icon>
      </div>
      <div :class="{ sfa_btn_area: true, show: sfa.show }">
        <div class="sfa_btn">
          <lb-icon v-show="sfa.switchShow" type="fa-share-square-o"></lb-icon>
        </div>
        <div class="sfa_btn">
          <lb-icon v-show="sfa.switchShow" type="fa-shield"></lb-icon>
        </div>
        <div class="sfa_btn">
          <lb-icon v-show="sfa.switchShow" type="fa-reorder"></lb-icon>
        </div>
      </div>
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
          title: {
            flag: "icon",
            title: "CPU",
            icon: "fa-microchip",
          },
          data: "--",
          show: true,
          interval: true,
          set: (r) => {
            const coreNumber = `${os.cpuCount()}C`;
            os.cpuUsage(function (v) {
              const cpuUsePrecent = `${(v * 100).toFixed(0)}%`;
              r.data = `${cpuUsePrecent}`;
            });
          },
        },
        {
          title: {
            flag: "icon",
            title: "RAM",
            icon: "fa-cubes",
          },
          data: "--",
          show: true,
          interval: true,
          set: (r) => {
            const total = (os.totalmem() / 1000).toFixed(2);
            const free = (os.freemem() / 1000).toFixed(2);
            const use = (total - free).toFixed(2);
            const memUsePrecent = `${(
              (1 - os.freememPercentage()) *
              100
            ).toFixed(0)}%`;
            const memUseDetail = `${use} GB / ${total} GB`;
            r.data = `${memUsePrecent}`;
          },
        },
        {
          title: {
            flag: "icon",
            title: "RAM",
            icon: "fa-cubes",
          },
          data: "--",
          show: true,
          interval: true,
          set: (r) => {
            const total = (os.totalmem() / 1000).toFixed(2);
            const free = (os.freemem() / 1000).toFixed(2);
            const use = (total - free).toFixed(2);
            const memUsePrecent = `${(
              (1 - os.freememPercentage()) *
              100
            ).toFixed(0)}%`;
            const memUseDetail = `${use} GB / ${total} GB`;
            r.data = `${memUsePrecent}`;
          },
        },
        {
          title: {
            flag: "icon",
            title: "RAM",
            icon: "fa-cubes",
          },
          data: "--",
          show: true,
          interval: true,
          set: (r) => {
            const total = (os.totalmem() / 1000).toFixed(2);
            const free = (os.freemem() / 1000).toFixed(2);
            const use = (total - free).toFixed(2);
            const memUsePrecent = `${(
              (1 - os.freememPercentage()) *
              100
            ).toFixed(0)}%`;
            const memUseDetail = `${use} GB / ${total} GB`;
            r.data = `${memUsePrecent}`;
          },
        },
      ],
      sfa: {
        switchShow: false,
        show: false,
      },
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