<template>
  <div class="app">
    <div v-if="account.id">
      <div>안녕하세요? {{account.name}}님!</div>
      <div style="margin-top: 20px;">
        <button class="btn-login" @click="logout()">로그아웃</button>
      </div>
  </div>
    <div class="div-login-card" v-else>
      <div style="margin-top: 20px;">
        <div class="div-login-label">아이디</div>
        <input type="text" class="input-login" v-model="form.loginId">
      </div>
      <div style="margin-top: 20px;">
        <div class="div-login-label">비밀번호</div>
        <input type="password" class="input-login" v-model="form.loginPw">
      </div>
      <div style="text-align: center;margin-top: 90px;">
        <button class="btn-login" @click="login()">로그인</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      account: {
        id: null,
        name: null
      },
      form: {
        loginId: null,
        loginPw: null
      }
    }
  },
  methods: {
    async init() {
      console.log("init...");
      const res = await axios.get("/api/account");
      console.log(res.data);

      this.account = res.data;
    },
    async login() {
      if(!this.checkForm()) return;

      const res = await axios.post("/api/account", this.form);
      const resData = res.data;
      console.log(resData);

      if(resData.rescode === 2) {
        alert('로그인 아이디나 비밀번호가 맞지 않습니다.');
        this.clearForm();
      }
      else if(resData.rescode === 3) {
        alert('로그인 아이디나 비밀번호가 맞지 않습니다.');
        this.clearForm();
      }
      else if(resData.rescode === 1) {
        this.account = resData;
      }
      else {
        alert('로그인 정보를 확인하세요.');
        this.clearForm();
      }
    },
    checkForm() {
      if(!this.form.loginId) {
        alert('로그인 아이디를 넣으세요');
        return false;
      }
      else if(!this.form.loginPw) {
        alert('비밀번호를 넣으세요');
        return false;
      }
      return true;
    },
    clearForm()  {
      this.form.loginId = null;
      this.form.loginPw = null;
    },
    async logout() {
      await axios.delete("/api/account");
      alert('로그아웃하였습니다.');
      this.clearForm();
      this.account.id = null;
      this.account.name = null;
    }
  },
  created() {
    this.init();
  }
}
</script>

<style>
.div-login-card {
  width: 300px;
  height: 250px;
  margin: auto;
  margin-top: 100px;
  padding: 20px;
  border: 1px solid #666666;
  background-color: white;
  border-radius: 10px 10px 10px 10px;
}
.div-login-label {
  display: inline-block;
  width: 60px;
  font-size: 14px;
}
.input-login {
  display: inline-block;
  width: 200px;
  height: 30px;
}
.btn-login {
  width: 250px;
  height: 40px;
  text-align: center;
  background-color: #6699CC;
  color: white;
  font-size: 14px;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
}
</style>