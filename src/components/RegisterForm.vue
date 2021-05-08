<template>
  <el-form
    status-icon
    ref="registerForm"
    :model="registerUser"
    :rules="registerRules"
    label-width="100px"
    class="registerForm sign-up-form"
  >
    <el-form-item label="用户名" prop="name">
      <el-input
        v-model="registerUser.name"
        placeholder="Enter UserName..."
      ></el-input>
    </el-form-item>
    <el-form-item label="邮箱" prop="email">
      <el-input
        v-model="registerUser.email"
        placeholder="Enter Email..."
      ></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        v-model="registerUser.password"
        type="password"
        placeholder="Enter Password..."
      ></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="password2">
      <el-input
        v-model="registerUser.password2"
        type="password"
        placeholder="Enter Password..."
      ></el-input>
    </el-form-item>

    <el-form-item>
      <el-button
        @click="handleRegister('registerForm')"
        type="primary"
        class="submit-btn"
        >注册</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { getCurrentInstance } from "vue";
import { registerUser, registerRules } from "../utils/registerValidators";
import axios from "../http";
import { useRouter } from "vue-router";

export default {
  props: {
    registerUser: {
      type: Object,
      required: true,
    },
    registerRules: {
      type: Object,
      required: true,
    },
  },
  setup() {
    // @ts-ignore
    const { ctx } = getCurrentInstance();
    const routers = useRouter();

    const handleRegister = (formName: string) => {
      ctx.$refs[formName].validate((valid: boolean) => {
        if (valid) {
          console.log(registerUser.value);
          const api = "/api/auth/register";
          let param = new URLSearchParams();
          param.append("name", registerUser.value.name);
          param.append("email", registerUser.value.email);
          param.append("password", registerUser.value.password);

          ctx
            .$axios({
              method: "post",
              url: api,
              data: param,
            })
            .then((res: any) => {
              // 注册成功
              ctx.$message({
                message: "Register Success",
              });
              // 路由跳转
              routers.push("/");
            });
          // ctx.$axios.post(api, props.registerUser)
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    };

    return { handleRegister, registerUser, registerRules };
  },
};
</script>
<style scoped>
.registerForm {
  position: relative;
  margin-top: -30%;
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