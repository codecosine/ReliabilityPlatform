<template>
  <div id="app">
    <nav class="topnav navbar-dark">
      <div class="container">
        <ul class="nav float-xs-left">
          <li class="nav-item">
            <img src="./assets/logo_simple.png" style="width:40px">
            <router-link class="nav-link home" to="/"> 多功能推理计算平台</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/taskList" v-bind:class="{ 'active': $route.fullPath === '/taskList' }">数据导入</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/predeal" v-bind:class="{ 'active': $route.fullPath === '/predeal' }">数据预处理</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/addTask" v-bind:class="{ 'active': $route.fullPath === '/addTask' }">任务添加</router-link>
          </li>
        </ul>
        <ul class="nav float-xs-right">
          <li class="nav-item">
            <router-link class="nav-link" to="/taskList" v-bind:class="{ 'active': $route.fullPath === '/taskList' }">任务列表</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/taskList" v-bind:class="{ 'active': $route.fullPath === '/taskList' }">工具</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div>
      <router-view></router-view>
    </div>
    <footer class="footer">
      <div class="container">
        <img src="./assets/logo_simple.png" style="width:25px">
        <p>广东工业大学</p>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'app',
};
</script>
<style>
  body{
    font-family: PingFangSC-Light,'helvetica neue','hiragino sans gb',tahoma,'microsoft yahei ui','microsoft yahei',simsun,sans-serif;
    color: #555;
  }
  .footer{
    padding-top: 40px;
    padding-bottom: 40px;
    margin-top: 130px;
    color: #767676;
    text-align: center;
  }
  .app-main {
    margin-top: 5rem;
  }
  .topnav {
    margin-bottom: 3rem;
    background-color: #222;
    padding: 0.4rem 1rem;
    position: fixed;
    top:0;
    width: 100%;
    z-index: 10;
  }
  .topnav ul .nav-item{
    display: inline-block;
    margin-left: 2rem;
    padding-right: 10px;
  }
  .topnav .nav-item .nav-link {
    position: relative;
    color: rgba(255, 255, 255, 0.7);
    font-size: 1rem;
    padding-top: .425rem;
    padding-bottom: .425rem;
  }
  .topnav .nav-item .home{
    color: #fff;
  }
  .topnav .nav-item .nav-link.active {
    color: #fff;
  }

</style>
