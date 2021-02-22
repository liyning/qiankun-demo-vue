<template>
  <div>
    <div @click.stop="save">存值</div>
    <div @click.stop="handleGet">测试storage 命名空间 取值</div>
    <div @click.stop="handleRmove">测试 storage 命名空间 清除</div>
    <div @click.stop="handleClear">测试 storage 命名空间 清空</div>
    <div @click.stop="handleGetApp">storage取第一个子应用的值</div>
    <div @click.stop="handleActionsGetApp">actions取全局变量appName值</div>
    <div @click.stop="setParam">action设置全局变量值</div>

  </div>

</template>

<script>
  import actions from '@/actions.js'
export default {
  methods: {
    save() {
      sessionStorage.setItem("a", 'b11')
    },
    handleGet() {
      alert(sessionStorage.getItem('a'))
    },
    handleRmove() {
      sessionStorage.removeItem('a')
    },
    handleClear() {
      sessionStorage.clear()
    },
    handleGetApp(){
      alert(sessionStorage.getItem("第一个子应用:a"))
    },
    handleActionsGetApp(){
      actions.onGlobalStateChange((state) => { //监听全局状态
        alert("actions获取第一个自应用的值appName:"+state.appName)
      }, true);
    },
    setParam() {
      // actions传值给父应用
      actions.setGlobalState({ appName: '来自第二个子应用'})
    },
  }
}
</script>

