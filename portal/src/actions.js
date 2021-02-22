import { initGlobalState } from "qiankun";
import store from "./store";

const initialState = {
    //这里写初始化数据
    appName:""
};

// 初始化 state
const actions = initGlobalState(initialState);
actions.onGlobalStateChange((state, prev) => {//监听公共状态的变化
    console.log("主应用: 变更前");
    console.log(prev);
    console.log("主应用: 变更后");
    console.log(state);
    // store.commit('setProject',state);//这里我把公共状态存到主应用的vuex里了
});

export default actions;


