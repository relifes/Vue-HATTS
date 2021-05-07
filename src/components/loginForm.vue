<template>
  <el-form
    status-icon
    ref="loginForm"
    :model="loginUser"
    :rules="loginRules"
    label-width="100px"
    class="loginForm sign-in-form"
  >
    <el-form-item label="邮箱" prop="email">
      <el-input
        v-model="loginUser.email"
        placeholder="Enter Email..."
      ></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        v-model="loginUser.password"
        type="password"
        placeholder="Enter PassWord..."
      ></el-input>
    </el-form-item>

    <el-form-item>
      <el-button
        type="primary"
        @click="handleLogin('loginForm')"
        class="submit-btn"
        >登录</el-button
      >
    </el-form-item>
    <!-- 找回密码 -->
    <div class="tiparea">
      <p>忘记密码？ <a href="/">立即找回</a></p>
    </div>
  </el-form>
</template>
<script lang="ts">
import { getCurrentInstance } from "vue";
import { loginUser, loginRules } from "@/utils/loginVailDator";

export default {
  props: {
    loginUser: {
      type: Object,
      required: true,
    },
    loginRules: {
      type: Object,
      required: true,
    },
  },
  setup() {
    // @ts-ignore
    const { ctx } = getCurrentInstance();
    // 登录方法
    const handleLogin = (formName: string) => {
      // console.log(ctx)
      ctx.$refs[formName].validate((valid: boolean) => {
        if (valid) {
          
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    };
    return {
      handleLogin,
      loginUser,
      loginRules
    };
  },
};
</script>
<style scoped>
/* form */
.LoginForm {
  position: relative;
  margin-top: 20%;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
}
.submit-btn {
  width: 100%;
}
.tiparea {
  text-align: right;
  font-size: 12px;
  color: #333;
}
.tiparea p a {
  color: #409eff;
}
</style>