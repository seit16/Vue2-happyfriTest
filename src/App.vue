<template>
  <div id="app">
    app
    <header>
      <item-header></item-header>
    </header>
    <router-view/>
  </div>
</template>

<script>
import itemHeader from './components/itemHeader'
// import itemBody from "./components/itemBody";

export default {
  name: 'App',
  components:{
    itemHeader,
    // itemBody
  }
}
</script>

<style lang="less">
  @import './assets/style/common.less';
</style>
