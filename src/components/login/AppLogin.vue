<template>
  <div id="container">
    <div id="title">
      <h1>电商后台管理系统</h1>
    </div>
    <div class="input">
      <el-input
        v-model="name"
        prefix-icon="user"
        placeholder="请输入用户名"
      ></el-input>
    </div>
    <div class="input">
      <el-input
        v-model="password"
        prefix-icon="lock"
        placeholder="请输入密码"
        show-password
      ></el-input>
    </div>
    <div class="input">
      <el-button
        type="primary"
        @click="login"
        style="width: 500px"
        :disabled="disabled"
        >登录</el-button
      >
    </div>
  </div>
</template>

<script>
import store from "@/store/index";
import { ElMessage } from "element-plus";
export default {
  name: "AppLogin",
  data() {
    return {
      name: "",
      password: "",
      // disabled: false
    };
  },
  computed: {
    disabled() {
      return this.name.length === 0 || this.password.length === 0;
    },
  },
  methods: {
    login() {
      store.commit("registUserInfo", {
        name: this.name,
        password: this.password,
      });
      ElMessage({
        message: "登录成功",
        type: "success",
        duration: 1000,
      });
      setTimeout(() => {
        this.$router.push("/home");
      }, 1000);
    },
  },
};
</script>

<style scoped>
#container {
  background: #595959;
  background-image: url("@/assets/login_bg.jpg");
  height: 100%;
  width: 100%;
  position: absolute;
}
#title {
  text-align: center;
  color: azure;
  margin-top: 200px;
}
.input {
  margin: 20px auto;
  width: 500px;
}
</style>
