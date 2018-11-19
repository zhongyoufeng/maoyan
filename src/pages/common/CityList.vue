<template>
<div id="city-list" class="page subpage">
     <mt-index-list>

<div class="left-city">
<div
        class="citys-crosswise">
            <p class="crosswise-class">定位城市</p>
            <ul class="crosswise-list">
                <li class="crosswise-item">
               无法定位
                </li> 
            </ul>    
        </div>
        <div
        class="citys-crosswise">
            <p class="crosswise-class">热门城市</p>
            <ul class="crosswise-list">
                <li 
                v-for="city in hotCitys" :key="city.id"  @click="selectCityAction(city.id,city.nm)" class="crosswise-item">
                {{city.nm}}
                </li> 
            </ul>    
        </div>

 <mt-index-section
        v-for = "cityMap in data"
        :key  = "cityMap.key"
        :index= "cityMap.key"
        >
            <mt-cell
            v-for = "item in cityMap.value"
            :key  = "item.id"
            :title= "item.nm" 
            @click.native="selectCityAction(item.id,item.nm)"
            ></mt-cell>
        </mt-index-section>
        </div>
    

    </mt-index-list>  
</div>

</template>

<script>
import { getCityListData } from "../../services/appService";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      data: [],
      keys: [],
      hotCitys: [
        { id: 10, nm: "上海" },
        { id: 1, nm: "北京" },
        { id: 20, nm: "广州" },
        { id: 30, nm: "深圳" },
        { id: 57, nm: "武汉" },
        { id: 40, nm: "天津" },
        { id: 42, nm: "西安" },
        { id: 55, nm: "南京" },
        { id: 50, nm: "杭州" },
        { id: 59, nm: "成都" },
        { id: 45, nm: "重庆" }
      ]
    };
  },
  methods: {
    ...mapActions(["selectCity"]),
    selectCityAction(id, nm) {
      //将选中的城市保存，保存到全局数据中
      this.selectCity({
        city: nm,
        id: id
      });

      // 返回上一页
      this.$router.back();
    }
  },
  created() {
    // 去本地存储数据，如果没有就请求，如果有就直接使用
    getCityListData().then(({ data, keys }) => {
      // 本地存储数据，以便下次使用
      this.data = data;
      this.keys = keys;
    });
  }
};
</script>

<style lang="scss" scoped>
#city-list {
  background: #ebebeb;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 10;
}

.citys-crosswise {
  .crosswise-class {
    padding-left: 0.4rem;
    line-height: 0.8rem;
    background: #ebebeb;
  }
  .crosswise-list {
    background-color: #ebebeb;
    padding-bottom: 0.213333rem;
    display: flex;
    flex-wrap: wrap;
    // margin-right: .266667rem;
    .crosswise-item {
      width: auto;
      min-width: 26%;
      height: 0.88rem;
      line-height: 0.88rem;
      width: auto;
      margin-top: 0.4rem;
      margin-left: 0.4rem;
      padding: 0 0.533333rem;
      border: 1px solid #e6e6e6;
      text-align: center;
      border-radius: 0.08rem;
      background: white;
    }
  }
}
.mint-indexlist {
  height: 100%;
}
.mint-indexlist-content {
  height: 100%;
}
.mint-indexlist-nav {
  background: #ebebeb !important;
  border: none;
  color: #333;
  font-size: 0.213333rem;
}
.mint-indexsection-index {
  background: #ebebeb;
}
.mint-cell {
  border-bottom: 0.026667rem solid #c8c7cc;
  background: #f5f5f5;
  padding-left: 0.266667rem;
}
</style>

