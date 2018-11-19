<template>
<app-content :style="{top: '88px', bottom: '49px'}" @loadmore="loadMoreData" :canLoadMore="canLoadMore">

    <li class="cinema-item"  v-for="cinema in cinemaList" :key="cinema.id" @click="enter(cinema.id,cinema.nm,cinema.addr)">
        <div class="title">
            <span>{{cinema.nm}}</span>
            <span class="price-block">
                <span class="price">{{cinema.sellPrice}}</span><span class="q">元起</span>
            </span>
        </div>
        <div class="location-block">
            <div class="flex line-ellipsis">{{cinema.addr}}</div>
            <div class="distance">{{cinema.distance}}</div>
        </div>
        <div class="label-block">
            <div class="endorse" v-if="cinema.endorse == 1">改签</div>
            <div class="snack" v-if="cinema.tag.snack == 1">小吃</div>
            <div class="vipTag" v-if="cinema.tag.vipTag">{{cinema.tag.vipTag}}</div>
            <div class="hallType" v-for="(halltype,i) in cinema.tag.hallTypeVOList" :key="i">{{halltype.name}}</div> 
        </div>
        <div class="preference" v-if="cinema.promotion.cardPromotionTag">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg==" alt="">
            {{cinema.promotion.cardPromotionTag}}
        </div>
    </li>
</app-content>
</template>

<script>
import "../../utils/filter";
import { getCinemaList } from "../../services/cinemaService";
import { mapState } from "vuex";
export default {
  data() {
    return {
      cinemaList: [],
      cinemaIDS: "",
      canLoadMore: true,
      offset: 0
    };
  },
  created() {
    this.init();
  },
  computed: {
    ...mapState(["cityID"])
  },
  //监测数据的变化，重新渲染数据
  watch: {
    cityID() {
      //重新请求数据;
      this.init();
      this.loadMoreData();
    }
  },

  methods: {
    //加载更多数据
    loadMoreData() {
      this.offset += 20;
      getCinemaList(this.offset, this.cityID).then(({ data, ids }) => {
        this.cinemaList = [...this.cinemaList, ...data];
        if (this.offset == 200) {
          this.canLoadMore = false;
        }
      });
    },
    init() {
      this.offset = 0;
      getCinemaList(this.offset, this.cityID).then(({ data, ids }) => {
        this.cinemaList = data;
        this.cinemaIDS = ids;
      });
    },
    enter(id, nm, addr) {
      console.log(id, nm, addr);
      this.$router.push({
        path: "/cinemaDetail",
        query: { cinemaId: id, title: nm, addr: addr }
      });
    }
  }
};
</script>
<style lang="scss" >
.line-ellipsis {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.cinema-item {
  // height: 3.306667rem;
  border-bottom: 1px solid #e8e8e8;
  margin: 0 0.4rem;
  padding: 0.346667rem 0.186667rem;

  .title {
    height: 23px;
    line-height: 23px;
    font-size: 16px;
    color: #000;
    .price-block {
      padding-top: 9px;
      padding-left: 3px;
      line-height: 1.5;
      color: #f03d37;
      .price {
        font-size: 0.48rem;
      }
    }
  }
  .location-block {
    display: flex;
    justify-content: space-between;
    margin-top: 0.16rem;
    font-size: 0.346667rem;
    color: #666;
  }
  .label-block {
    height: 0.453333rem;
    line-height: 0.453333rem;
    margin: 0.106667rem 0;
    overflow: hidden;
    display: flex;
    font-size: 12px;
    .snack,
    .vipTag {
      color: #f90;
      border: 1px solid #f90;
    }
    .hallType,
    .endorse {
      color: #589daf;
      border: 1px solid #589daf;
    }
    div {
      position: relative;
      display: inline-block;
      padding: 0 0.08rem;
      height: 0.453333rem;
      line-height: 0.4rem;
      border-radius: 0.053333rem;
      margin: 0 0.053333rem;
    }
  }
  .preference {
    text-indent: 1em;
    margin-top: 0.16rem;
    img {
      height: 0.373333rem;
      width: 0.4rem;
      vertical-align: text-top;
      position: absolute;
    }
    font-size: 0.293333rem;
    color: #999;
  }
}
</style>



