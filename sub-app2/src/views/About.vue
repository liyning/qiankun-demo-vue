<template>
  <div>
    <div>language：{{lang}}</div>
    <p>{{$t('message.hello')}}</p>
  </div>

</template>

<script>
import actions from '@/actions.js'
export default {
  data() {
    return {
      // lang:"",
    }
  },
  computed: {
    lang () {
      return this.$store.state.lang;
    }
  },
  mounted() {
    // this.lang = this.$store.state.lang;
    // actions.onGlobalStateChange((state) => { //监听全局状态
    //   this.lang = state.lang
    //   this.$store.dispatch('changeLang', { lang:this.lang });
    // }, true);
  },
  methods:{


  }
}
</script>
