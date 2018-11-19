<template>
<app-content :style="{top: '88px', bottom: '49px'}" @loadmore="loadMoreData" :canLoadMore="canLoadMore">

 <ul  class="movies-list">
        <li  class="list-item"  
        @click = go(item.id,item.nm)
        v-for = "item in playingList"
        :key = 'item.id'
        >
            <div class="item-left">
                <img :src = "item.img " :alt = "item.nm">
            </div>
            <div class="item-center">
                <span class="movies-title">{{item.nm}}</span>
                <span  class="movies-grade" v-if="item.globalReleased">
                    观众评
                    <span class="grade-num">{{item.sc }}</span>
                </span>
                 <span  class="movies-grade" v-else style="font-size:0.4rem;color:#faaf00">
                    {{item.wish}}
                    <span class="grade-num" style="color:#666;font-size:0.35rem;font-weight:200">人想看</span>
                </span>
                <span class="movies-stars">
                主演: {{item.star}}
                </span>
                <span class="movies-session">{{item.showInfo}}</span>
            </div>
            <div class="item-right">
                <span v-if="item.globalReleased" :class="{ticket: item.globalReleased==true}">购票</span>
                <span v-else :class="{presell: item.globalReleased==false}">预售</span>
            </div>
        </li>
    </ul>
</app-content>
</template>

<script>
import {
  getPlayingList,
  getMorePlayingList
} from "../../services/movieService";
export default {
  data() {
    return {
      playingList: [],
      playingIDS: [],
      canLoadMore: true
    };
  },
  methods: {
    //加载更多数据
    loadMoreData() {
      console.log("执行加载更多");
      //取出ids
      let ids = [...this.playingIDS];
      ids = ids.splice(this.playingList.length, 10);
      //组装ids
      let movieIds = ids.join(",");
      // 发送请求
      this.canLoadMore = false;
      getMorePlayingList(movieIds).then(result => {
        // this.playingList = this.playingList.concat(result);
        console.log(this.playingList);
        this.playingList = [...this.playingList, ...result];
        //判断是否可以继续加载更多
        if (this.playingList.length >= this.playingIDS.length) {
          //加载完毕
          this.canLoadMore = false;
        } else {
          //还可以继续加载
          this.canLoadMore = true;
        }
      });
    },
    go(id, nm) {
      console.log(id, nm);
      this.$router.push({ name: "detail", params: { id: id, title: nm } });
    }
  },
  created() {
    //初始化请求数据
    getPlayingList().then(({ data, ids }) => {
      this.playingList = data;
      this.playingIDS = ids;
    });
  }
};
</script>

<style lang="scss" scoped>
.movies-warp {
  margin-top: 1.066667rem;
}
#movie-list {
  height: 14.133333rem;
}
.movies-list {
  min-height: 3.04rem;
  margin-bottom: 1.293333rem;
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
      img {
        width: 60px;
        height: 90px;
      }
    }
    .item-center {
      width: 5.386667rem;
      height: 2.346667rem;
      display: flex;
      flex-direction: column;
      margin-left: 0.266667rem;
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
      .presell {
        background: #3c9fe6 !important;
      }
      span.ticket,
      .presell {
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

