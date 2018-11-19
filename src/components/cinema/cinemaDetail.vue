<template>
    <div class="lo-top">
        <app-content :style="{top: '0px', bottom: '0px'}" >
        <app-header :title="title" style="font-size:22px">

          <div slot="left"><i class="iconfont icon-right m-left" @click="back()"></i></div>
     </app-header>
        <div class="location-site">
            <span class="specific-site">
                <p class="site-name">{{site}}</p>
                <p class="specific">{{addr}}</p>
            </span>
            <span class="site-icon">
                <i class="iconfont icon-location"></i>
            </span>
        </div>
        <cinema-swiper :movies = movies ></cinema-swiper>
        <cinema-set-meal></cinema-set-meal>
        </app-content>
    </div>
</template>

<script>
import cinemaSwiper from "../cinemaDetail/cinemaSwiper";
import cinemaSetMeal from "../cinemaDetail/cinemaSetMeal";
export default {
  components: {
    cinemaSwiper,
    cinemaSetMeal
  },
  data() {
    return {
      site: "",
      addr: "",
      movies: null,
      dealList: null,
      title: ""
    };
  },
  methods: {
    async getCinemaDetail() {
      const data = await this.$http({
        url: "/ajax/cinemaDetail",
        params: {
          cinemaId: this.$route.query.cinemaId
        }
      });
      this.movies = data.showData.movies;
      this.dealList = data.dealList.dealList;
    },
    back() {
      this.$router.back();
    }
  },
  created() {
    this.title = this.$route.query.title;
    this.site = this.$route.query.title;
    this.addr = this.$route.query.addr;
    this.$bus.$emit("getTitle", this.site);
    this.getCinemaDetail();
  }
};
</script>

<style lang="scss">
.lo-top {
  padding: 1px;
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0px;
  z-index: 5;
  background: #fff;
}
.location-site {
  height: 2.5rem;
  background: white;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 0.4rem 0.4rem;
  padding-top: 51px;
  .specific-site {
    .site-name {
      font-size: 0.453333rem;
      line-height: 0.64rem;
      font-weight: 700;
      color: #333;
    }
    .specific {
      margin-top: 2px;
      font-size: 13px;
      line-height: 18.5px;
      color: #999;
      height: 0.48rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 6.933333rem;
    }
  }
  .site-icon {
    width: 1.893333rem;
    // line-height: 2.186667rem;
    border-left: 0.053333rem solid #efefef;
    text-align: center;
    line-height: 1.173333rem;
    i {
      font-size: 0.666667rem;
      color: dodgerblue;
      margin-left: 0.133333rem;
    }
  }
}
</style>
