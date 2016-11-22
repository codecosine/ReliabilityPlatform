<template>
  <div id="app">
    <nav class="topnav navbar-dark">
      <div class="container">
        <ul class="nav">
          <li class="nav-item">
            <img src="./assets/logo_simple.png" style="width:40px">
            <router-link class="nav-link home" to="/taskList"> 多功能推理计算平台</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/taskList" v-bind:class="{ 'active': $route.fullPath === '/taskList' }">任务列表</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/addTask" v-bind:class="{ 'active': $route.fullPath === '/addTask' }">添加任务</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <router-view></router-view>
    </div>
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
  .topnav {
    margin-bottom: 3rem;
    background-color: #2F3847;
    padding: 0.6rem 1rem;
  }
  .topnav ul .nav-item{
    display: inline-block;
    margin-left: 2rem;
    padding-right: 10px;
  }
  .topnav .nav-item .nav-link {
    position: relative;
    color: rgba(255, 255, 255, 0.5);
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
  .topnav .nav-item .nav-link.active:after {
    position: absolute;
    bottom: -10px;
    left: 50%;
    width: 0;
    height: 0;
    margin-left: -.3rem;
    margin-top: -.3rem;
    vertical-align: middle;
    content: "";
    border-right: .3rem solid transparent;
    border-bottom: .3rem solid;
    border-left: .3rem solid transparent;
  }
</style>
