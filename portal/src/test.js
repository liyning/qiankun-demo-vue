// import { initGlobalState } from "qiankun";
import store from './store'
console.log('---test-------',store)
// import Cookies from "js-cookie";
// const initialGlobalState = {
//     //这里写初始化数据
//     appName:"",
//     // lang:store.getters.lang
//     lang:Cookies.get('lang') || 'zh'
// };
//
// // 初始化 state
// const actions = initGlobalState(initialGlobalState);
// actions.onGlobalStateChange((state, prev) => {//监听公共状态的变化
//     console.log("store----lang",store.getters.lang)
//     console.log("主应用: 变更前");
//     console.log(prev);
//     console.log("主应用: 变更后");
//     console.log(state);
//     // store.commit('setProject',state);//这里我把公共状态存到主应用的vuex里了
// });

// export default actions;


