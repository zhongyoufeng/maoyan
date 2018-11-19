<template> 
<div>
    <div class="page" id="movie">
        <!-- 头部 -->
        <app-header title="猫眼电影"></app-header>
        <!-- 子头部 -->
        <header class="sub-header">
            <span class="city-icon" @click="changeCity()">
                {{city}}
            </span>
            <nav class="nav">
                <li v-for="(navItem, index) in navList" :key="index"
                    :class="{active: navIndex==index}" @click="navAction(index)">
                    {{navItem}}
                </li>
            </nav>
            <span class="search-icon" @click="search()">
                <img src="../../assets/search.png"/>
            </span>
        </header>
        <!-- 内容部分 -->
        <keep-alive>
            <playing v-if="navIndex==0"/>
            <coming v-if="navIndex==1"/>
        </keep-alive>

    </div>
    <router-view></router-view>

   
</div>
</template>

<script>
import Playing from "../../components/movie/Playing";
import Coming from "../../components/movie/Coming";
import { mapState } from "vuex";

export default {
  components: {
    playing: Playing,
    coming: Coming
  },
  computed: {
    ...mapState(["city"])
  },
  data() {
    return {
      navList: ["正在热映", "即将上映"],
      navIndex: 0
    };
  },
  methods: {
    navAction(index) {
      this.navIndex = index;
    },
    changeCity() {
      console.log(46556);
      this.$router.push({
        path: "movie/citylist"
      });
    },
    search() {
      this.$router.push({
        path: "movie/search"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.page {
  bottom: 0;
}
.sub-header {
  width: 100%;
  height: 44px;
  border-bottom: 1px solid #e6e6e6;
  position: absolute;
  left: 0;
  top: 44px;
  color: #666;
  font-size: 14px;
  display: flex;
  .city-icon {
    flex: 1;
    text-align: center;
    line-height: 44px;
    &::after {
      content: "";
      display: inline-block;
      width: 0;
      height: 0;
      border: 6px solid transparent;
      border-top: 6px solid #666;
      transform: translateY(4px);
    }
  }
  .nav {
    width: 60%;
    display: flex;
    li {
      flex: 1;
      text-align: center;
      line-height: 44px;
      font-weight: bold;
      &.active {
        color: #f03d37;
        border-bottom: 2px solid #f03d37;
      }
    }
  }
  .search-icon {
    flex: 1;
    img {
      width: 24px;
      margin: 10px auto;
    }
  }
}
</style>
