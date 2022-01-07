<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BSScroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      bsScroll: null,
    };
  },
  mounted() {
    this.bsScroll = new BSScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    });

    this.bsScroll.on("scroll", (position) => {
      this.$emit("scroll", position);
    });
    if (this.pullUpLoad) {
      this.bsScroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
    }
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.bsScroll && this.bsScroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.bsScroll && this.bsScroll.finishPullUp();
    },
    refresh() {
      this.bsScroll && this.bsScroll.refresh();
    },
  },
};
</script>

<style scoped>
</style>