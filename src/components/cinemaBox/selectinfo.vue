<template>
    <div class="cinema-nav">
        <span class="nav-item">
            全城
            <i class="iconfont icon-jiantou-copy-copy"></i>
        </span>
        <span class="nav-item">
            品牌
            <i class="iconfont icon-jiantou-copy-copy"></i>
        </span>
        <span class="nav-item nav-item-right">
            特色
            <i class="iconfont icon-jiantou-copy-copy"></i>
        </span>
    </div>
</template>

<script>
export default {
  name: "selectinfo"
};
</script>

<style lang="scss">
.cinema-nav {
  height: 1.066667rem;
  display: flex;
  border-bottom: 1px solid #efefef;
  background: white;
  .nav-item {
    flex: 1;
    text-align: center;
    line-height: 1.066667rem;
    font-size: 0.373333rem;
    color: #666;
    position: relative;
    i {
      font-size: 0.213333rem;
    }
  }
  .nav-item::after {
    content: "";
    display: block;
    width: 1px;
    position: absolute;
    right: 0px;
    background: #efefef;
    top: 0.16rem;
    bottom: 0.16rem;
  }
  .nav-item-right:after {
    display: none;
  }
}
</style>
