<template>
  <div class="home">
    <div @click.stop="save">测试storage 命名空间 存值{{aaa}}</div>
    <div @click.stop="handleGet">测试storage 命名空间 取值</div>
    <div @click.stop="handleRmove">测试 storage 命名空间 清除</div>
    <div @click.stop="handleClear">测试 storage 命名空间 清空</div>
    <div>
      父应用传过来的值: {{parentData}}
    </div>
    <div>父应用的方法 <button @click.stop="parentAlert">点我</button></div>
    <div>调用父应用的登出方法 <button @click.stop="parentLogout">登出</button></div>
    <div>父应用通过actions传过来的数据：{{globalState}}</div>
    <div>子应用通过actions传给父应用：<button @click.stop="setParam">actions传值</button></div>
    <router-link to="/home">测试401页面</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import actions from '@/actions.js'
import Vue from 'vue'
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
      globalState:"",
      parentData: Vue.prototype.parentData,
      aaa:{a:'aaa'}
    }
  },
  mounted() {
    // console.log(Vue.prototype, this)
    actions.onGlobalStateChange((state) => { //监听全局状态
      console.log('onGlobalStateChange----------',state)
      this.globalState = state.mainParam
    }, true);
  },
  methods: {
    parentAlert() {
      // 并传值给父应用
      Vue.prototype.parentFns.portal_alert('来自子应用的值')
    },
    setParam() {
      // actions传值给父应用
      actions.setGlobalState({ appName: '来自第一个子应用'})
    },
    parentLogout() {
      Vue.prototype.parentFns.portal_logout()
    },
    save() {
      sessionStorage.setItem("a", JSON.stringify(this.aaa))
    },
    handleGet() {
      alert(sessionStorage.getItem('a'))
    },
    handleRmove() {
      sessionStorage.removeItem('a')
    },
    handleClear() {
      sessionStorage.clear()
    }
  }
}
</script>

<style lang="less" scoped>
div {
  margin-bottom: 10px;
}
.el-button {
  background-color: red;
}
</style>
