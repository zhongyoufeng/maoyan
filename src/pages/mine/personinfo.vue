<template> 
<div>
    <div class="page" id="personinfo">
        <!-- 头部 -->
        <app-header title="我的"></app-header>
        <!-- 子头部 -->
        <div class="my-center">
    <div class="header ">
        <img src="https://img.meituan.net/avatar/753c06630b28bbd8ef62a844034c49bb9830.jpg" class="head-icon">
        <div class="name"></div>
    </div>
    <div class="container">
        <div class="group">
            <div class="mb-outline-tb">
                <div class="orders">
                    <div class="title">我的订单</div>
                    <div class="mb-outline-b title-line"></div>
                    <div class="list list-two">
                    <!-- TODO 演出开发完毕后，改成下面注释内容 -->
                    <!-- <div class="list list list-three"> -->
                        <div class="order-item movie">
                            <a data-type="mip" href="/myOrder?$from=canary"><p>电影</p></a>
                        </div>
                        <!-- TODO 演出开发完毕后，改成下面注释内容 -->
                        <!--                             <div class="order-item show"><a data-link="https://m.maoyan.com/myshow/fe/movieshoworder/order-list.html?fromTag=ordercenter"><p>演出</p></a></div>
 -->
                        <div class="order-item store"><a data-link="/store/order/list?$from=canary"><p>商城</p></a></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="group">
            <div class="mb-outline-tb">
                    <div class="coupon item mb-line-b"><a data-link="/vod/order?$from=canary"><span>在线观影</span></a></div>
                    <div class="coupon item mb-line-b"><a data-link="/myCoupon?$from=canary"><span>优惠券</span></a></div>
                    <div class="membercard item mb-line-b"><a data-link="/membercard/mylist?version=4&amp;$from=canary"><span>折扣卡</span></a></div>
            </div>
        </div>
        

        
    </div>
   
</div>
       
</div>
       
</div>
</template>

<script>
</script>

<style lang="scss" scoped>
.my-center {
  min-height: 100%;
  display: -webkit-box;
  display: flex;
  flex-direction: column;
  margin-top: 44px;
}
.my-center .header {
  background-color: #f03d37;
  background-image: url(/bs/file/?f=my-canary:deploy/dpmmweb/client/dpmmweb/component/mycenter/img/bg.png);
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 100% 150px;
  height: 150px;
  overflow: hidden;
  text-align: center;
}
.my-center .header img {
  display: inline-block;
  margin-top: 30px;
  width: 60px;
  height: 60px;
  border-radius: 60px;
  border: 3px solid #fff;
}
.my-center .header .name {
  margin-top: 7px;
  font-size: 16px;
  line-height: 22.5px;
  color: #fff;
}
.container {
  -webkit-box-flex: 1;
  flex: 1;
}
.my-center .group {
  margin-top: 10px;
  background: #fff;
}

.my-center .group .orders {
  padding: 0 15px;
  position: relative;
  overflow: hidden;
  text-align: center;
  border-bottom: 13px solid #ededed;
}
.my-center .group .title {
  position: relative;
  margin: 13px 0 0;
  font-size: 15px;
  line-height: 21px;
  height: 21px;
  color: #333;
  z-index: 9;
  display: inline-block;
  width: 80px;
  background-color: #fff;
}
.my-center .group .title-line {
  position: absolute;
  top: 23px;
  left: 50%;
  margin-left: -80px;
  width: 160px;
  height: 1px;
}
.my-center .group .list {
  overflow: hidden;
}
.my-center .group .orders .list .order-item.movie {
  background-image: url(http://s0.meituan.net/bs/file/?f=my-canary:deploy/dpmmweb/client/dpmmweb/component/mycenter/img/movie.png);
}
.my-center .group .list.list-two .order-item {
  width: 50%;
}
.my-center .group .list .order-item a {
  display: block;
  height: 90px;
}
.my-center .group .list .order-item a p {
  position: relative;
  top: 53px;
  text-align: center;
  font-size: 15px;
  line-height: 21px;
  height: 21px;
  margin: 0;
  color: #333;
}
.my-center .group .orders .list .order-item.store {
  background-image: url(http://s0.meituan.net/bs/file/?f=my-canary:deploy/dpmmweb/client/dpmmweb/component/mycenter/img/store.png);
}
.my-center .group .list.list-two .order-item {
  width: 50%;
}
.my-center .group .list .order-item {
  width: 25%;
  float: left;
  height: 97px;
  background-repeat: no-repeat;
  background-position: top;
  background-size: 42px auto;
  margin-top: 18px;
}
.my-center .group .list .order-item a {
  display: block;
  height: 90px;
}
.my-center .group .list .order-item a p {
  position: relative;
  top: 53px;
  text-align: center;
  font-size: 15px;
  line-height: 21px;
  height: 21px;
  margin: 0;
  color: #333;
}

.my-center .group .item {
  position: relative;
  height: 44px;
  line-height: 44px;
  font-size: 15px;
  margin-left: 15px;
  padding-right: 15px;
}
.my-center .group .item a {
  display: block;
  color: #333;
}
.my-center .group .item {
  position: relative;
  height: 44px;
  line-height: 44px;
  font-size: 15px;
  margin-left: 15px;
  padding-right: 15px;
}
.my-center .group .item span {
  text-align: left;
}
</style>
