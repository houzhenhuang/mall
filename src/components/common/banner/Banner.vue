<template>
  <div id="banner">
    <div class="banner-item">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
};
</script>

<style  scoped>
#banner {
  overflow: hidden;
}
.banner-item {
  display: flex;
}
</style>