<template>
  <div>
    
    <div v-if="fatherComponent == 'home'" class="home_logo item_container_style">
      <router-link to="/item"  class="start button_style"></router-link>
    </div>
    <div v-if="fatherComponent == 'item'" >
    		<div class="item_back item_container_style">
    			<div class="item_list_container" v-if="itemDetail.length > 0">
    				<header class="item_title">{{itemDetail[itemNum-1].topic_name}}</header>
    				<ul>
    					<li  v-for="(item, index) in itemDetail[itemNum-1].topic_answer" :key='index' @click="choosed(index, item.topic_answer_id)" class="item_list">
    						<span class="option_style" v-bind:class="{'has_choosed':choosedNum==index}">{{choosedType(index)}}</span>
    						<span class="option_detail">{{item.answer_name}}</span>
    					</li>
    				</ul>
    			</div>
    		</div>
    		<span class="next_item button_style" @click="nextItem" v-if="itemNum < itemDetail.length"></span>
    		<span class="submit_item button_style" v-else @click="submitAnswer"></span>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
  name:'itemBody',
  data: () =>{
    return{
      itemId: null,//题目ID
      choosedNum: null, //选中答案索引
      choosedId: null //选中答案id
    }
  },
  props: ['fatherComponent'],
  computed: mapState([
	  	'itemNum', //第几题
  		'level', //第几周
  		'itemDetail', //题目详情
  		'timer', //计时器
	]),
  methods:{
    ...mapActions({
      addNum: 'addNum',
      initializeData: 'initializeData'
    }),

    // [
  	// 		'addNum', 'initializeData',
  	// ]


    nextItem (){
      if (this.choosedNum !== null) {
        this.choosedNum=null
        //保存答案, 题目索引加一，跳到下一题
        // console.log(this)
        // console .log(typeof(this.addNum))
        // console .log(typeof(this.itemNum))
        // console .log(typeof(this.nextItem))
        this.addNum(this.choosedId)
      } else {
        alert('还没选择答案')
      }
    },

    choosedType: type =>{
      switch (type) {
        case 0:
          return 'A';
        case 1:
          return 'B';
        case 2:
          return 'C';
        case 3:
          return 'A';
      }
    },

    choosed(type,id){
      this.choosedNum=type
      this.choosedId=id
    },
    //提交答案
    submitAnswer(){
      if (this.choosedNum != null) {
        this.choosedNum=null
        this.addNum(this.choosedId)
        clearInterval(this.timer)
        this.$router.push('score')
      } else {
        alert('还没选择答案')
      }
    }
  },
  created () {
    //初始化
    if(this.fatherComponent == 'home') {
      this.initializeData()
      // console.log(this)
      // document.body.style.backgroundImage='url(./static/img/1-1.jpg)';
    }
  }
}
</script>

<style lang="less">
  @import "../assets/style/body.less";
  @import "../assets/style/score.less";
</style>