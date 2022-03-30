<template>
  <view class="warp">
    <view class="left">
      <image class="image" :src="recommendList.al.picUrl" mode="" />
    </view>
    <view class="mid">
      <text class="mid-title">{{ recommendList.al.name }}</text>
      <text class="mid-name"
        >{{ recommendList.ar[0].name }} - {{ recommendList.al.name }}</text
      >
    </view>
    <view class="right">
      <image
        class="image"
        src="../../static/imgs/icons/arrow-right.png"
        mode=""
      />
    </view>
  </view>
</template>

<script>
export default {
  name: "SongCard",
  props: ["recommendList"]
};
</script>

<style lang="scss" scoped>
.warp {
  width: 100%;
  height: 100rpx;
  margin-bottom: 30rpx;
  display: flex;
  .left {
    width: 100rpx;
    height: 100rpx;
    > .image {
      width: 100rpx;
      height: 100rpx;
      border-radius: 10%;
    }
  }
  .mid {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 6rpx 0;
    box-sizing: border-box;
    margin-left: 22rpx;
    &-title {
      font-size: 32rpx;
    }
    &-name {
      font-size: 22rpx;
      color: #999;
    }
  }
  .right {
    width: 100rpx;
    height: 100rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    > .image {
      width: 50rpx;
      height: 50rpx;
    }
  }
}
</style>
