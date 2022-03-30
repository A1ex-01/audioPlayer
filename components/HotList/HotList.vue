<template>
  <view>
    <view class="title">
      <TitleCard isMeau="hot"><text>热门歌单</text></TitleCard>
    </view>
    <view class="hot-show">
      <scroll-view class="scroll-view" scroll-x enable-flex>
        <view class="hot-show-item" v-for="(item, index) in hotList" :key="index">
          <HotCard :hotList="item"></HotCard>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<script>
export default {
  name: "HotList",
	props:["hotList"],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.hot-show {
  width: 700rpx;
  height: 250rpx;
	margin-top: 16rpx;
	.scroll-view{
		display: flex;
		height: 270rpx;
	}
	&-item{
		flex-shrink: 0;
		width: 200rpx;
		height: 270rpx;
		font-size: 26rpx;
		margin-right: 16rpx;
	}
}
</style>
