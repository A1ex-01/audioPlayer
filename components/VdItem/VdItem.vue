<template>
	<view class="warp">
		<view class="img">
			<image :src="relate.coverUrl" mode=""></image>
		</view>
		<view class="info">
			<view class="name">
				<text>{{relate.title}}</text>
			</view>
			<view class="author">
				<text>{{relate.creator[0].userName}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"VdItem",
		props:["relate"],
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.warp{
	width: 100%;
	height: 110rpx;
	margin-bottom: 20rpx;
	display: flex;
	justify-content: space-between;
	>.img{
		width: 35%;
		height: 110rpx;
		margin-right: 16rpx;
		border-radius: 16rpx;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
		image{
			width: 100%;
			height: 100rpx;
		}
	}
	>.info{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		>.name{
			width: 100%;
			font-size: 32rpx;
		}
		>.author{
			font-size: 24rpx;
			color: #999;
		}
	}
}
</style>
