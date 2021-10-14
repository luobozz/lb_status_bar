<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "App",
  data() {
    return {};
  },
  methods: { ...mapActions(["initLocationOnce"]) },
  computed: {},
  created() {},
  mounted() {
    this.initLocationOnce();
  },
};
</script>

<style lang="less">
@import url("assets/css/common.less");
#app {
  border-block-color: inherit;
}
</style>