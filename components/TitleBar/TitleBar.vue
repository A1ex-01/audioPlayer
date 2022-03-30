<template>
  <view class="warp">
    <view class="status" :style="{ height: statusBarHeight + 'px' }"></view>
    <view class="title">
      <view class="slot-left">
        <slot name="left"></slot>
      </view>
      <view class="title-left" @click="back">
        <image
          class="img"
          src="../../static/imgs/icons/arrow-left.png"
          mode=""
        />
      </view>
      <view class="slot-mid"><slot name="mid"></slot></view>
      <view class="title-mid"><text>标题</text></view>
      <view class="title-right"></view>
    </view>
  </view>
</template>

<script>
export default {
  name: "TitleBar",
  props: ["statusBarHeight"],
  data() {
    return {};
  },
	methods:{
		back(){
			uni.navigateBack();
      console.log(this.statusBarHeight)
		}
	}
};
</script>

<style lang="scss" scoped>
.status {
  width: 100%;
}
.title {
  width: 100%;
  height: 44px;
  color: white;
  display: flex;
  &-left,
  &-right {
    height: 100%;
    width: 120rpx;
    text-align: center;
    position: relative;
    > .img {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      width: 22px;
      height: 22px;
    }
  }
  &-mid {
    flex: 1;
    width: 100%;
    text-align: center;
    line-height: 44px;
    display: none;
  }
}
.title-right{
	width: 120rpx;
	height: 100%;
}
.slot-left,
.slot-right {
  height: 100%;
	display: none;
  width: 120rpx;
  text-align: center;
  position: relative;
}
.slot-mid{
	flex: 1; 
  text-align: center;
	line-height: 44px;
}
.slot-left:empty + .title-left {
  display: block;
}
.slot-mid:empty + .title-mid {
  display: block;
}
</style>
