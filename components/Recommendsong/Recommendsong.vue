<template>
	<view>
		<view class="title">
			<TitleCard isMeau="relate"><text>推荐歌单</text></TitleCard>
		</view>
    <view class="rec-show">
      <scroll-view class="scroll-view" scroll-x enable-flex>
        <view class="rec-show-item" v-for="(item, index) in recommends" :key="index">
          <HotCard :hotList="recommends[index]"></HotCard>
        </view>
      </scroll-view>
    </view>
	</view>
</template>

<script>
	export default {
		name:"Recommendsong",
		props:["recommends"],
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.rec-show {
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
