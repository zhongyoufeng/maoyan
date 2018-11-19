<template>
<div class="content" ref="content">
    <div class="wrap">
        <slot/>
    </div>
</div>
</template>

<script>
export default {
  name: "app-content",
  props: {
    canLoadMore: Boolean
  },
  methods: {
    refresh() {
      this.contentScroll.refresh();
    }
  },
  mounted() {
    // 创建滚动视图
    this.contentScroll = new IScroll(this.$refs.content, {});
    this.contentScroll.on("beforeScrollStart", () => {
      //滚动开始前刷新，识别最新高度
      this.contentScroll.refresh();
    });
    this.contentScroll.on("scrollEnd", () => {
      if (
        this.contentScroll.y <= this.contentScroll.maxScrollY &&
        this.canLoadMore
      ) {
        this.$emit("loadmore");
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.content {
  position: absolute;
  left: 0;
  width: 100%;
  overflow: hidden;
}
</style>

