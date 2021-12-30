<template>
  <div class="item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BannerItem",
};
</script>

<style scoped>
.item {
  width: 100%;
  flex-shrink: 0;
}
.item img {
  width: 100%;
}
</style>