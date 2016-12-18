<template lang="html">
  <div>
    <div class="site-main">
      <div class="banner banner-inverse">
        <div class="container">
          <div class="row">
            <div class="col-sm-8">

            </div>
            <div class="col-sm-4">
              <form role="form" class="center-block auth-modal auth-modal-inner">
                <div class="form-group">
                  <label for="Rusername">用户名/邮箱</label>
                  <input id="Rusername" type="text" placeholder="输入你的用户名/邮箱" v-model="registerUser.username" class="form-control">
                </div>
                <div class="form-group">
                  <label for="Rpassword">密码</label>
                  <input type="password" class="form-control" placeholder="创建你的密码" v-model="registerUser.password" id="Rpassword">
                 </div>
                 <div class="form-group action-group">
                   <button type="submit" class="btn btn-block btn-danger">注册并登录</button>
                 </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <h3>数据导入</h3>
          <p>提供了多种数据源导入支持，导入直观迅速。 </p>
        </div>
        <div class="col-sm-4">
          <h3>数据预处理</h3>
          <p>过滤掉不需要的数据，同时能清除各种特殊数据，为你的操作扫除障碍。</p>
        </div>
        <div class="col-sm-4">
          <h3>任务列表</h3>
          <p>计算是否完成，处于什么状态，一键即可完全查看。计算结果在线查看</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      registerUser: {
        username: '',
        password: '',
      },
    };
  },
};
</script>

<style lang="css">
.banner {
  background-image: url(../assets/pexels-photo.jpg);
  background-size: cover;
  height: 500px;
  margin-bottom: 50px;
  padding: 100px 0px;
}
.banner-text {
  color: #fff;
}
.banner::before {
  position: absolute;
  height: 500px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  content: "";
  background-color: rgba(0,0,0,0.1);
}
.hand{
  cursor:pointer;
}
.action-group{
  margin-top: 30px;
}
.action-group button{
  height: 40px;
}
.auth-modal-inner{
  font-size: 14px;
  background-color: #fff;
  border: 1px solid #d8dee2;
  border-radius: 5px;
}
.auth-modal{
  width: 350px;
  padding: 20px;
  margin-top: 10px;
}
.logo {
  padding: 100px 0px;
  width:150px;
  height:150px;
}
.create-account-callout {
  margin-top: 15px;
  padding: 15px 20px;
  text-align: center;
  border: 1px solid #d8dee2;
  border-radius: 5px;
}
</style>
