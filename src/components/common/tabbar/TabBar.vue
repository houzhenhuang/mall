<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: "TabBar",
};
</script>

<style scope>
#tab-bar {
  display: flex;

  height: 49px;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f9f9f9;
  box-shadow: 0px -5px 10px #f1f0f0;
}
</style>