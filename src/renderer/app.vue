<template>
  <section>
    <h1>💖 Hello World!</h1>
    <p>Welcome to your Electron application.</p>
    <input type="file" @change="selectFileHandle" />
  </section>
</template>

<script>
export default {
  methods: {
    selectFileHandle(e) {
      console.log("file change", e.target);
    }
  }
};
</script>

<style></style>
