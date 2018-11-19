<template>
<div class="detail">

<app-header :title="title" style="font-size:22px">

          <div slot="left"><i class="iconfont icon-right m-left" @click="back()"></i></div>
     </app-header>
    
        <div v-if = info  class="movie-detail">
        <div class="movie-filter"></div>
        <div  :style="{backgroundImage: 'url(' + info.img+ ')'}" class="detail-bg">
        </div>
           
            <div class="detail-content">
                <div class="item-left">
                    <img :src = "info.img | replaceWH(148, 208)" alt = "">
                </div>
                <div class="item-center">
                    <span class="movies-title">{{info.nm}}</span>
                    <span class="eng">{{info.enm}}</span>
                    <span class="movies-grade">
                        <span class="grade">7.9</span>
                        <span class="grade-num">(2.7万人评)</span>
                    </span>
                    <span class="movies-type">
                        {{info.cat}}
                    </span>
                    <span class="movies-site">{{info.src}}/100分钟</span>
                    <span class="movie-time">{{info.pubDesc}}</span>
                </div>
                <div class="item-right">
                    <span class="movie-more" @click="jump(info.id)">
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAWCAYAAAAfD8YZAAAAAXNSR0IArs4c6QAAAS5JREFUOBGVkktuwkAMhpOoJ+hhSouE2HbDgiVCNCAOVtQHnINHhbgMJ6g6/f9gR848kmDJeOzxZ3scskzEOfcKXUMLjXXZByYQhJlqMvz3PM//1E9Z7fJoEp5wXvWZoILRZQtg7xVYdhXQzuR2XoEB/NYCOSkVdKI/g441BnuBbmI7aMAE7ilgxyaboYOD4RMO9EWiTwhgJksBLtEvUNolRmGvwJG+yDNsXSB4s2aplR3M4Y80BnuGfiQ7m0Q2qP6JJvaLc/VpTKx5lPe9IfpibviMb+4lOXYXyGLRsRPgSTsSpASdW8Av+YQ3Er+NzgIuELdvZMcAZIUaBsgpCA55IZIEeV+NLSC32hskXCTAH9xFRyWkUsgSrhqAJfjpL8fch0dMMIGWMkmYEIn8Az5Wgp5LHlhmAAAAAElFTkSuQmCC">
                    </span>
                </div>
            </div>
    </div> 
    <cinemainfobox> </cinemainfobox>
 

    </div>
</template>

<script>
import "../../utils/filter";
import { getMovieDetaliList } from "../../services/movieService";
import cinemainfobox from "./../cinemaBox/cinema-info.vue";
export default {
  components: {
    cinemainfobox
  },
  data() {
    return {
      bg:
        "http://p0.meituan.net/148.208/movie/2721b55eac3ca107bad2af0e18592003431446.jpg",
      info: null,
      id: "",
      title: ""
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    jump() {
      window.location.href = `http://m.maoyan.com/movie/${
        this.id
      }?_v_=yes&channelId=4&$from=canary#`;
    }
  },
  created() {
    this.id = this.$route.params.id;
    getMovieDetaliList(this.id).then(data => {
      console.log(this.id);
      this.info = data;

      this.info.img = this.info.img.replace("w.h", "71.100");
      console.log(this.info.img);

      this.title = data.nm;
    });
  }
};
</script>

<style lang="scss" >
.detail {
  height: 100%;
  width: 100%;
  position: absolute;
  bottom: 0;
  background: #fff;
  z-index: 5;
  overflow: auto;
}
.movie-detail {
  box-sizing: border-box;
  height: 5.013333rem;
  width: 100%;
  position: relative;
  overflow: hidden;
  margin-top: 44px;
  .movie-filter {
    height: 5.013333rem;
    width: 100%;
    background-color: #333;
    position: absolute;
    left: 0;
    top: 0;
  }
  .detail-bg {
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
    filter: blur(0.2rem);
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.55;
  }
  .detail-content {
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 0;
    left: 0;
    padding: 19px 30px 19px 15px;
    box-sizing: border-box;
    height: 5.013333rem;
    align-items: center;
    width: 100%;
    span {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .item-left {
      width: 2.933333rem;
      height: 4rem;
      flex-shrink: 0;
      flex-grow: 0;
      img {
        height: 4rem;
        width: 2.933333rem;
      }
    }
    .item-center {
      color: white;
      display: flex;
      flex-direction: column;
      margin-left: 0.333333rem;
      flex-grow: 1;
      .movies-title {
        font-size: 20px;
        margin-top: 2px;
        font-weight: 700;
        overflow: hidden;
      }
      .eng {
        margin-top: 10px;
        font-size: 12px;
        color: #fff;
        opacity: 0.8;
      }
      .movies-grade {
        .grade {
          font-size: 18px;
          font-weight: 700;
          color: #fc0;
          margin-top: 11px;
        }
        .grade-num {
          margin-top: 10px;
          font-size: 12px;
          color: #fff;
          opacity: 0.8;
          font-weight: 700;
        }
      }
      .movies-type,
      .movies-site,
      .movie-time {
        font-size: 12px;
        color: white;
        margin-top: 0.16rem;
      }
    }
    .item-right {
      width: 0.266667rem;
      height: 0.4rem;
      margin-left: 0.533333rem;
      span {
        i {
          font-size: 0.533333rem;
          color: white;
        }
      }
    }
  }
}
.m-left {
  font-size: 28px;
}
</style>
