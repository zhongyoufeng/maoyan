<template>
<div>
    
    <div class="page my-cinmea" id="cinema">
         <app-header title="影院"></app-header>
         <div class="nav">
             
            <div class="topbar">
                <span @click="selectCity()">{{city}} <i class="iconfont icon-desc"></i> </span>
                <input type="text"  @click="search()">
                <div class="search-tip" @click="search()">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAwFJREFUSA3FVs1qU0EUTibBRQiCRF3UB3BTcFHwJ0XRJ+gDhDaQ5vcJ3PgCfYL80AYSyQP4BIKQiosuhLoQXOjCbqQIJUgoyY3fdzNnmCRzk3uvBQfmzrlzzvm+OTNzz7mJxH9qyTC83W733mQyeTKbzbbQc8lk8hL9Ip1OfyqVSr/CYCzbBBKDQHU6nX2MZfQ8HNWyM949LOAU/bharb7F6DlsnFNOYhDmp9NpGx7bTi/35HkqlaphAadu9eLsCjFIS57nNRHlLct0AnmIiL5ivETPQf8Q4y56Gt1v0F8rpRog78pc0LhATFJEemIZXwHoKJvNNguFwm9r3hcHg8Gd0WjUwEJfY+K26BH54SZyQ8ztBcB7K9IzAO01Go2fAhg0NpvNB9C9Q9+hjY781bpt9y8MyBTP1CZFpC/CkJKIdrSHyMUmiKPxXBeSJvOb2mq1DiDLRbqCvFer1f7QIGzT9nuwpz/bNnZxfy6uPv0VYWvKouKZho1UfGTUkR/JOyI3uDIno2JygMEzPTHhRRJlnFH78yvglueJ78JRzEhQyFkMXbfX5Rg0p/2HWi/4K+YKq9qSWf2dymvs0cax8W1AEuesCSaHm2gGZwnfYCuszhhh1l6EMYohGJwlfANF4gt5w+qYBv+52Tg2vg2sWNowIVVll2nQNogqa3/mcDZP48/frKdiPcWqpKKkmXstfWRR+/uFg7hB9VpSpikMTPg690YmpR/834gjiI9FXh79IoEzUUibn6GUtHnG3Bslbbbb7QxIfwDjriY5r9frj0Aux7jALSnTYxGH0bXW7gDkQ9jIdaRfLFLCfEefUXA1UxapvKl6bBF1EXUZAa0sYIFYyBFt7D8QHBu/kuebyFeINXnsf65KpfIR94WXqrSO3ElMB33hDrBNh5DX/mVCf4It7ctFwntyE3kgsbXaRL/fvz8ejx8DMPR/9SbyUMT2IqLIa8mjAMWxdZB/y2QyT80/cRzQMD78lNDKOHOa84fwZbFYtCtiGJj4Noy81+uZcvkXH+aXwmK6+EsAAAAASUVORK5CYII=" alt="">
                    搜影院
                </div>
            </div>
            <div class="toptab">
                <div class="item region" >全城 <i class="iconfont icon-desc"></i> </div>
                <div class="item brand">品牌 <i class="iconfont icon-desc"></i> </div>
                <div class="item special">特色 <i class="iconfont icon-desc"></i> </div>
            </div>
        </div>
        <div class="content" ref="root">
           
                <cinema></cinema>
           
        </div>
      
    </div>
    <router-view></router-view>

</div>
</template>

<script>
import cinema from "../../components/cinema/cinemaList";
import { mapState } from "vuex";
export default {
  components: {
    cinema: cinema
  },
  computed: {
    ...mapState(["city"])
  },
  methods: {
    selectCity() {
      this.$router.push({
        path: "cinema/citylist"
      });
    },
    search() {
      this.$router.push({
        path: "cinema/search"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.my-cinmea {
  height: 100%;
  overflow: hidden;
  .nav {
    width: 100%;
    position: fixed;
    z-index: 6;
    top: 44px;
    .topbar {
      width: 100%;
      height: 1.173333rem;
      background-color: #f5f5f5;
      display: flex;
      align-items: center;
      justify-content: space-around;
      span {
        font-size: 0.4rem;
        color: #666;
        position: relative;
        i {
          position: absolute;
          top: -2px;
          left: 0.8rem;
        }
      }
      input {
        width: 7.466667rem;
        border-radius: 0.133333rem;
        border: 0.026667rem solid rgb(230, 230, 230);
        height: 0.773333rem;
        position: relative;
      }
      .search-tip {
        position: absolute;
        font-size: 0.346667rem;
        color: #b2b2b2;
        left: 4.933333rem;
        img {
          height: 0.373333rem;
          width: 0.373333rem;
          position: absolute;
          left: -0.4rem;
          top: 0.03rem;
        }
      }
    }
    .toptab {
      width: 100%;
      height: 1.066667rem;
      border-bottom: 1px solid #e8e8e8;
      display: flex;
      align-items: center;
      background-color: #fff;
      .item {
        flex: 1 1;
        text-align: center;
        color: #777;
        font-size: 0.346667rem;
        position: relative;
        i {
          position: absolute;
          top: -2px;
          left: 2rem;
        }
      }
      .brand::before,
      .special::before {
        content: "";
        display: block;
        position: absolute;
        height: 20px;
        top: 0px;
        left: 0;
        border-left: 1px solid #e8e8e8;
      }
    }
  }
  .content {
    margin-top: 1rem;
  }
}
</style>


