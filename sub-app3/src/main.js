import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './public-path'

Vue.config.productionTip = false

let instance = null
function render (props = {}) {
  const { container } = props;
  instance = new Vue({
    router,
    store,
    render: h => h(App)
  // }).$mount('#app')
    }).$mount(container ? container.querySelector('#app') : '#app')
}
// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}
export async function bootstrap (props = {}) {
  // eslint-disable-next-line no-console
  // console.log('子应用 加载中')
  // 父应用传递的值 挂载vue原型上
  Vue.prototype.parentData = {...props.data}
  // 父应用传递的 方法 挂载原型上
  Vue.prototype.parentFns = props.fns
}
export async function mount (props) {
  // eslint-disable-next-line no-console
  // console.log('子应用 加载完毕')
  render(props)
}
export async function unmount () {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
}
