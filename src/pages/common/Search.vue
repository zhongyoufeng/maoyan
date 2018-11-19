<template>
<div id="search" class="page">
   <app-header title="猫眼电影" style="font-size:22px">   
          <div slot="left"><i class="iconfont icon-right m-left" @click="back()"></i>
          </div>
     </app-header>
<search-init :type='type'></search-init>



</div>
</template>

<script>
import searchInit from "./../../components/searchBox/searchInit.vue";

export default {
  props: {
    type: Array
  },
  components: {
    [searchInit.name]: searchInit
  },
  created() {
    console.log("搜索页面加载了");
    console.log(this.type);
  },
  methods: {
    back() {
      this.$router.back();
    }
  }
};
</script>

<style>
#search {
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  background: #ededed;
  z-index: 15;
  overflow: auto;
}
</style>
