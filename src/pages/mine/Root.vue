<template>
<div class="page auth" id="mine">
     <app-header title="猫眼电影">
          <div slot="left"><i class="iconfont icon-zuojiantou m-left" @click="back()"></i></div>
     </app-header>
      <div class='auth-top'>
            <nav class="select-type">
                <div   v-for="info in infos" :key='info.id' class="type"
                active-class="active"
                @click = changeShow(info.path)
                >
                    {{info.title}}
                </div>
            </nav>
            <div v-if = "isShow" class="border-bottom-left"></div>
            <div v-else class="border-bottom-right"></div>
        </div>
        <router-view></router-view>
</div>
</template>

<script>
import login from "../../components/mine/login";
import register from "../../components/mine/register";
export default {
  data() {
    return {
      infos: [
        { id: 1, title: "美团账号登录", path: "/mine/login" },
        { id: 2, title: "手机验证登录", path: "/mine/register" }
      ],
      type: "/mine/login",
      isShow: true
    };
  },
  methods: {
    changeShow(path) {
      this.$router.push(path);
      if (path == this.type) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    },
    back() {
      this.$router.back();
    }
  }
};
</script>

<style lang="scss">
#mine {
  width: 100%;
  height: 100%;
  z-index: 5;
  background: #fff;
  position: absolute;
  bottom: 0;
}
.auth-top {
  position: relative;
  background: white;
  margin-top: 44px;
}
.select-type {
  overflow: hidden;
  width: 100%;
  height: 1.12rem;
  display: flex;
  align-items: center;
  line-height: 1.12rem;
  border-bottom: 0.106667rem solid #d6d6d6;
  justify-content: space-around;
  background: white;
  .type {
    width: 4.733333rem;
    height: 1.013333rem;
    text-align: center;
  }
  .active {
    border-bottom-color: #e54847;
    color: #e54847;
  }
}
.border-bottom-left {
  position: absolute;
  left: 10px;
  bottom: 0;
  z-index: 999;
  width: 4.64rem;
  border-bottom: 4px solid red;
}
.border-bottom-right {
  position: absolute;
  bottom: 0;
  right: 10px;
  z-index: 999;
  width: 4.64rem;
  border-bottom: 4px solid red;
}
.m-left {
  font-size: 35px;
  font-weight: normal;
}
</style>
