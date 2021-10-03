<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {},
  created() {},
  mounted() {},
};
</script>

<style lang="less">
@import url("assets/css/common.less");
#app {
  border-block-color:inherit;
}
</style>