<template>
  <view class="movie-item">
    <view class="img">
      <image :src="mvList.cover" mode=""></image>
      <view class="mask">
        <view class="left">
          <image src="../../static/imgs/icons/play_icon.png" />
          <text>{{ mvList.playCount | filterCount }}</text>
        </view>
        <view class="right">
          <text>{{ mvList.mv.videos[0].duration | filterTime }}</text>
        </view>
      </view>
    </view>
    <view class="title">
      <text style="height:5%">{{ mvList.name }}</text>
    </view>
  </view>
</template>

<script>
export default {
  name: "MvItem",
  filters: {
    // 过滤播放量
    filterCount(val) {
      return (val / 10000).toFixed(2) + "万";
    },
    // 过滤歌曲时长
    filterTime(val) {
      const min = parseInt(val / 1000 / 60);
      const sec =
        (val / 1000) % 60 < 10 ? "0" + ((val / 1000) % 60) : (val / 1000) % 60;
      return min + " : " + sec;
    },
  },
  props: ["mvList"],
  mounted() {},
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.movie-item {
  width: 100%;
  height: 100%;
  .img {
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    > image {
      width: 100%;
      height: 200rpx;
      transform: translateY(0);
    }
    > .mask {
      position: absolute;
      padding: 0 10rpx;
      box-sizing: border-box;
      font-size: 26rpx;
      bottom: 10rpx;
      left: 0;
      width: 100%;
      display: flex;
      justify-content: space-between;
      color: #fff;
      > .left {
        display: flex;
        position: relative;
        padding-left: 34rpx;
        > image {
          position: absolute;
          left: 0;
          top: 8rpx;
          height: 24rpx;
          width: 30rpx;
          vertical-align: sub;
        }
      }
    }
  }
  .title {
    width: 100%;
    height: 70rpx;
    font-size: 22rpx;
  }
}
</style>
