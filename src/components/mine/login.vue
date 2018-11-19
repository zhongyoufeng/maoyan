<template>
    <div>
        <form class="account-form" action="" @submit.prevent="subMsg" autoconplete= off >
            <div class="input msg-input">
                <input type="text" v-model="msg" placeholder="账户名/手机号/Email" autocomplete='new-text' ref="user">
            </div>
            <div class="input password-input">
                <input type="password" v-model="password" placeholder="请输入您的密码" autocomplete='new-password' ref="pwd">
            </div>
            <div class="btn-wrap">
                <button class="account-login" @click="login()"> 登录 </button>
            </div>
            <div class="tips">
                <span class="tip-item">立即注册</span>
                <span class="tip-item">找回密码</span>
            </div>
            <p class="foot">@猫眼电影 客服电话：<span class="number">400-670-5335</span> </p>
        </form>
    </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
      password: ""
    };
  },
  methods: {
    subMsg() {
      console.log("ok");
    },
    login() {
      var user = this.$refs.user.value;
      var pwd = this.$refs.pwd.value;
      if (user == "" || pwd == "") {
        alert("请填写完成手机号及密码！");
      } else {
        localStorage.setItem("token", user);
        this.$router.push({
          path: "/personinfo"
        });
      }
    }
  }
};
</script>

<style lang="scss">
input,
input:active {
  border: none;
  outline: none;
}
.account-form {
  .input {
    width: 100%;
    height: 1.173333rem;
    padding-left: 0.266667rem;
    line-height: 1.173333rem;
    border-bottom: 1px solid #e6e6e6;
    background: white;
    input {
      width: 9.466667rem;
      height: 0.8rem;
      line-height: 0.8rem;
      border-radius: 0.06rem;
      padding-left: 0.133333rem;
      font-size: 0.426667rem;
    }
    input:focus {
      background: #e6e6e6;
    }
    border-bottom: 1px solid #e6e6e6;
  }
  .btn-wrap {
    width: 9.466667rem;
    height: 1.253333rem;
    margin: auto;
    margin-top: 0.373333rem;
    margin-bottom: 0.373333rem;
    button.account-login {
      width: 9.466667rem;
      height: 1.253333rem;
      border: none;
      background: #df2d2d;
      text-align: center;
      font-size: 0.533333rem;
      color: white;
      line-height: 1.253333rem;
      border-radius: 0.06rem;
    }
  }
  .tips {
    display: flex;
    justify-content: space-between;
    padding-left: 0.266667rem;
    padding-right: 0.266667rem;
    .tip-item {
      color: #df2d2d;
      font-size: 0.373333rem;
    }
  }
  .foot {
    margin-top: 0.373333rem;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 0.373333rem;
    text-align: center;
    line-height: 1;
    color: #333;
    .number {
      color: #df2d2d;
    }
  }
}
</style>
