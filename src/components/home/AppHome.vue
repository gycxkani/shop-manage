<template>
  <el-container id="container">
    <el-aside width="250px">
      <el-container id="top">
        <img
          style="width: 25px; height: 25px; margin: auto; margin-right: 0"
          src="@/assets/logo.png"
          alt="Vue logo"
        />
        <div
          style="
            margin: auto;
            margin-left: 10px;
            color: #ffffff;
            font-size: 17px;
          "
        >
          电商管理后台
        </div>
      </el-container>
      <el-menu
        :default-active="$route.path"
        style="height: 100%"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        @select="selectItem"
      >
        <el-sub-menu index="1">
          <template #title>
            <!-- <i class="el-icon-s-order"></i> -->
            <el-icon><Document /></el-icon>
            <span>订单管理</span>
          </template>
          <el-menu-item index="/home/order/0">普通订单</el-menu-item>
          <el-menu-item index="/home/order/1">秒杀订单</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <!-- <i class="el-icon-s-shop"></i> -->
            <el-icon><Goods /></el-icon>
            <span>商品管理</span>
          </template>
          <el-menu-item index="/home/goods/0">普通商品</el-menu-item>
          <el-menu-item index="/home/goods/1">秒杀商品</el-menu-item>
          <el-menu-item index="/home/goods/2">今日推荐</el-menu-item>
          <el-menu-item index="/home/category">商品分类</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>
            <!-- <i class="el-icon-s-custom"></i> -->
            <el-icon><Avatar /></el-icon>
            <span>店长管理</span>
          </template>
          <el-menu-item index="/home/ownerlist">店长列表</el-menu-item>
          <el-menu-item index="/home/ownerreq">店长申请审批列表</el-menu-item>
          <el-menu-item index="/home/ownerorder">店长订单</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="4">
          <template #title>
            <!-- <i class="el-icon-s-ticket"></i> -->
            <el-icon><Printer /></el-icon>
            <span>财务管理</span>
          </template>
          <el-menu-item index="/home/tradeinfo">交易明细</el-menu-item>
          <el-menu-item index="/home/tradelist">财务对账单</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="5">
          <template #title>
            <!-- <i class="el-icon-s-tools"></i> -->
            <el-icon><Setting /></el-icon>
            <span>基础管理</span>
          </template>
          <el-menu-item index="/home/data">数据统计</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-aside>
    <el-main style="padding: 0">
      <!-- 添加一个通用的头部 -->
      <el-header style="margin: 0; padding: 0" height="80px">
        <el-container
          style="
            background-color: blanchedalmond;
            margin: 0;
            padding: 0;
            height: 80px;
          "
        >
          <div style="margin: auto; margin-left: 100px">
            <h1>欢迎您登录后台管理系统，管理员用户！</h1>
          </div>
          <div style="margin: auto; margin-right: 50px">
            <el-button type="primary" @click="logout">注销</el-button>
          </div>
        </el-container>
      </el-header>
      <!-- 这里用来渲染具体的功能模块 -->
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
import store from "@/store/index";
export default {
  name: "AppHome",
  methods: {
    logout() {
      store.commit("clearUserInfo");
      this.$router.push({ name: "Login" });
    },
    selectItem(index) {
      this.$router.push(index);
    },
  },
};
</script>

<style scoped>
#container {
  height: 100%;
  width: 100%;
  position: absolute;
}
#top {
  background-color: #545c64;
  margin-right: 1px;
  text-align: center;
  height: 60px;
}
</style>
