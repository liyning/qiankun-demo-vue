import Vue from 'vue'
// import locale from 'element-ui/lib/locale';
import VueI18n from 'vue-i18n'
import actions from '@/actions.js'

import en from './en'
import zh from './zh'

import store from "@/store/index.js";
Vue.use(VueI18n)
let defaultLang = (store&&store.state.lang) || 'zh';
console.log(window.__POWERED_BY_QIANKUN__ ,'window.__POWERED_BY_QIANKUN__ ')
const i18n = new VueI18n({
    locale: defaultLang, // 设置地区
    messages:{
        en:{
            ...en
        },
        zh:{
            ...zh
        }
    },
})
// locale.i18n((key, value) => i18n.t(key, value)); //实现element插件的多语言切换

export default i18n
