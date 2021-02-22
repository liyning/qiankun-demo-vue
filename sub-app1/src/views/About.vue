<template>
  <div class="about">
    <div>about</div>
    <router-link to="/about/index/sub">去下一级</router-link>
    <br>
    <div @click.stop="routerGo('/sub-app2/bbb')">去第二个子应用</div>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    methods:{
      routerGo(href = '/', title = null, stateObj = {}) {
        alert(8888888888)
        window.history.pushState({param:"子应用间跳转传参"}, "第二个子应用-二级菜单", href);
        // window.history.pushState(stateObj, title, href);
      }
    }
  }
</script>
