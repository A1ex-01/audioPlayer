<template>
  <view class="warp" v-if="playList">
    <view class="left">{{ index }}</view>
    <view class="right">
      <view class="right-top">{{ playList.name }}</view>
      <view class="right-bottom"
        ><image
          class="image"
          src="../../static/imgs/icons/sq_icon.png"
          mode=""
        />{{ playList.ar[0].name || playList.artists[0].name }}
        <text style="margin: 0 10rpx" v-if="playList.alia[0]">·</text
        ><text v-if="playList.alia[0]">{{ playList.alia[0] }}</text></view
      >
    </view>
  </view>
</template>

<script>
export default {
  name: "SimpleSongCard",
  props: ["playList", "index"],
};
</script>
<style lang="scss" scoped>
.warp {
  width: 100%;
  height: 80rpx;
  display: flex;
  margin-bottom: 22rpx;
  .left {
    height: 100%;
    width: 65rpx;
    line-height: 80rpx;
    text-align: center;
  }
  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 28rpx;
    margin-left: 12rpx;
    &-bottom {
      font-size: 22rpx;
      color: #666;
      .image {
        height: 26rpx;
        width: 40rpx;
        vertical-align: middle;
        margin-right: 10rpx;
      }
    }
  }
}
</style>
