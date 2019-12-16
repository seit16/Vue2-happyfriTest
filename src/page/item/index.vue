<template>
  <div>
    <itemBody father-component="item"> </itemBody>
  </div>
</template>
<script>
import itemBody from '../../components/itemBody'

export default {
  name:'item',
  components:{
    itemBody
  },
  created() {
    this.$store.commit("REMBER_TIME")
  },
}
</script>