<template>
  <banner>
    <banner-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" />
      </a>
    </banner-item>
  </banner>
</template>

<script>
import { Banner, BannerItem } from "components/common/banner";
export default {
  name: "HomeBanner",
  props: {
    banners: {
      type: Array,
      defaul() {
        return [];
      },
    },
  },
  components: {
    Banner,
    BannerItem,
  },
};
</script>

<style  scoped>
</style>>