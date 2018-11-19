<template>
<app-content :style="{top: '88px', bottom: '49px'}"  @loadmore="loadMoreData" :canLoadMore="canLoadMore">
<div class="coming">
    <div class="expected">
        <p>最受期待的电影：</p>
        <h-scroll class="expected-list">
            <li  class="expected-item" v-for="item in expectedList" :key="item.id"> 
                <img :src="item.img | replaceWH(85, 115)"/>
               <div class="expected-info">
              <span class="wish-num"> {{item.wish}}人想看 </span>
                        <p class="movie-nm">{{item.nm}}</p>
                        <p class="show-time">{{item.comingTitle}}</p>
                        </div>
               
            </li>
        </h-scroll>
    </div>
   

     <div
        v-for = "item in comingList"
        :key = 'item.id'
        class="comming-list">
            <p v-if="changeTitle(item.comingTitle)" class="comming-list-day">{{item.comingTitle}}</p>
            <ul class="movies-list coming-list">
                <li  class="list-item" >
                    <div class="item-left">
                         <img :src = "item.img | replaceWH(85, 115)" :alt = "item.nm">
                    </div>
                    <div class="item-center">
                        <span class="movies-title">{{item.nm}}</span>
                        <span  class="movies-grade">
                            <span class="grade-num">{{item.wish }}</span>
                            人想看
                        </span>
                       
                        <span class="movies-stars">
                        主演: {{item.star}}
                        </span>
                        <span v-if="item.showInfo" class="movies-session">{{item.showInfo}}</span>
                        <span v-else class="movies-session">{{item.rt}} 上映</span>
                    </div>
                    <div class="item-right">
                        <span v-if="item.showst>=4" class="presell-ticket">预售</span>
                        <span v-else class="want-ticket">想看</span>
                    </div>
                </li>
            </ul>
        </div>

</div>
</app-content>
</template>


<script>
import "../../utils/filter";
import {
  getComingList,
  getMostExpectedData,
  getMoreComingList
} from "../../services/movieService";
export default {
  data() {
    return {
      comingMap: {},
      expectedList: [],
      comingIDS: [],
      canLoadMore: true,
      comingList: null,
      time: 0, // 请求的次数
      movieIds: ""
    };
  },
  methods: {
    loadMoreData() {
      if (this.ids.length / 10 >= this.time) {
        this.time++;
        this.$http({
          url: "/ajax/moreComingList",
          params: {
            token: "",
            ci: 30,
            limit: 10,
            movieIds: this.ids
              .slice(
                0 + (this.time * 10 + this.time),
                10 + (this.time * 10 + this.time)
              )
              .toString()
          }
        }).then(res => {
          this.comingList = this.comingList.concat(res.coming);
        });
      } else {
        if (this.instance) this.instance.close();
        this.allLoaded = true;
      }
    },
    changeTitle(_title) {
      // 当title不一样时给title重新赋值
      if (_title == this.$options.title) {
        return false;
      } else {
        this.$options.title = _title;
        return true;
      }
    }
  },
  created() {
    getComingList().then(result => {
      this.comingMap = result;
    });

    getMostExpectedData().then(result => {
      this.expectedList = result;
    });
    this.$http({
      url: "/ajax/comingList?token=",
      params: {
        ci: 30,
        limit: 10
      }
    }).then(res => {
      this.comingList = res.coming;
      this.ids = res.movieIds;
    });
  }
};
</script>

<style lang="scss" scoped>
.expected {
  padding: 10px 15px;
  border-bottom: 6px solid #e6e6e6;
  .expected-item {
    display: inline-block;
    width: 90px;
    height: 160px;
    overflow: hidden;
    position: relative;

    img {
      width: 100%;
      height: 113px;
      padding: 5px;
    }
    .expected-info {
      position: absolute;
      top: 120px;
      .wish-num {
        position: absolute;
        top: -28px;
        font-size: 10px;
        color: #faaf00;
        font-size: 11px;
        font-weight: 600;
        left: 8px;
      }
      .movie-nm {
        text-align: center;
        width: 90px;
        margin: 0 0 3px;
        font-size: 13px;
        color: #222;
        font-weight: bold;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .show-time {
        margin: 0;
        font-size: 12px;
        color: #999;
      }
    }
  }
}
.comming-list {
  .comming-list-day {
    padding: 0.32rem 0.4rem 0;
    margin: 0;
    font-size: 0.373333rem;
    color: #333;
    background: white;
  }
}
.movies-list {
  margin-top: 0px;
}
.movies-list {
  min-height: 3.04rem;
  margin-bottom: 0.293333rem;
  // margin-top: 200px;
  .list-item {
    display: flex;
    justify-content: space-between;
    padding-top: 0.32rem;
    padding-bottom: 0.32rem;
    overflow: hidden;
    border-bottom: 1px solid #f5f5f5;
    box-sizing: border-box;
    background: white;
    .item-left {
      width: 1.706667rem;
      height: 2.4rem;
      flex-shrink: 0;
      flex-grow: 0;
      margin-left: 0.4rem;
    }
    .item-center {
      width: 5.386667rem;
      height: 2.346667rem;
      display: flex;
      flex-direction: column;
      margin-left: 0.6rem;
      span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .movies-title {
        font-size: 0.453333rem;
        color: #333;
        font-weight: 700;
        padding-right: 0.133333rem;
      }
      .movies-grade {
        margin-top: 0.186667rem;
        font-size: 0.346667rem;
        color: #666;
        .grade-num {
          font-weight: 700;
          color: #faaf00;
          font-size: 0.4rem;
        }
      }
      .movies-stars,
      .movies-session {
        font-size: 0.346667rem;
        margin-top: 0.16rem;
        color: #666;
      }
    }
    .item-right {
      width: 1.6rem;
      margin-right: 0.666667rem;
      height: 2.346667rem;
      display: flex;
      justify-content: center;
      align-items: center;
      .want-ticket {
        display: block;
        width: 1.253333rem;
        height: 0.72rem;
        line-height: 0.746667rem;
        text-align: center;
        box-sizing: border-box;
        background-color: #faaf00;
        color: #fff;
        border-radius: 0.106667rem;
        white-space: nowrap;
        font-size: 0.346667rem;
        cursor: pointer;
      }
      span.buy-ticket,
      .presell-ticket {
        display: block;
        width: 1.253333rem;
        height: 0.72rem;
        line-height: 0.746667rem;
        text-align: center;
        box-sizing: border-box;
        background-color: #f03d37;
        color: #fff;
        border-radius: 0.106667rem;
        white-space: nowrap;
        font-size: 0.346667rem;
        cursor: pointer;
      }
      .presell-ticket {
        background-color: #3c9fe6;
      }
    }
  }
}
</style>