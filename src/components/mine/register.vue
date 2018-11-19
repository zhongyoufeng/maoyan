<template>
    <div>
        <form class="account-form" @submit.prevent="subMsg" action="">
            <div class="input msg-input">
                <input class="phone-num" v-model="phoneNum" type="text" placeholder='请输入手机号' autocomplete='new-text'>
                <span   class="send-code" :class="isSend?className.code:''">{{(isSend || !addClass)?text:time+'s'}}</span>
            </div>
            <div class="input password-input">
                <input type="password" v-model="code" placeholder="请输入短信验证码" autocomplete='new-password'>
            </div>
            <div class="btn-wrap">
                <button :class="addClass?className.btn:''"> 登录 </button>
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
      phoneNum: "",
      code: "",
      addClass: false,
      className: {
        btn: "btn-active",
        code: "send-code-active"
      },
      time: 60,
      isSend: false,
      text: "请发送验证码",
      isFinish: true
    };
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

    .send-code {
      display: inline-block;
      background-color: #dcdcdc;
      color: #999;
      width: 2.666667rem;
      height: 0.8rem;
      line-height: 0.8rem;
      padding-left: 0.266667rem;
      margin-left: 0.346667rem;
      text-align: center;
    }
    .send-code-active {
      color: #df2d2d;
      border: 1px solid #df2d2d;
      background: white;
    }
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
    button {
      width: 9.466667rem;
      height: 1.253333rem;
      border: none;
      text-align: center;
      font-size: 0.533333rem;
      color: white;
      line-height: 1.253333rem;
      border-radius: 0.06rem;
      background: #dcdcdc;
    }
    .btn-active {
      background: #df2d2d;
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
