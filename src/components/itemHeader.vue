<template>
  <div class="top_tips">
    <span class="num_tip"
          v-if="this.$route.path==='/'">{{this.$store.state.level}}</span>
    <span class="num_tip"
          v-if="this.$route.path==='/item'">题目{{this.$store.state.itemNum}}</span>

    <span class="score_num" v-if="this.$route.path==='/score'">{{this.$store.state.score}}
    </span><span class="fenshu" v-if="this.$route.path==='/score'">分！</span>
    <div class="result_tip" v-if="this.$route.path==='/score'">{{this.$store.state.scoreTips}}</div>
  </div>

</template>

<script>
export default {
  name: 'itemHeader'
}
</script>

<style lang="less">
@import "../assets/style/body.less";
@import "../assets/style/score.less";
</style>