<template>
  <view class="warp" v-if="list" @click="goSongTopList">
    <view class="left">
      <text class="title">{{ list.name }}</text>
      <view class="rank">
        <text
          class="item"
          v-for="(item, index) in list.tracks.slice(0, 3)"
          :key="index"
          >{{ index + 1 }}.{{ item.name }}-<text style="color: #999">{{
            item.ar[0].name
          }}</text></text
        >
      </view>
    </view>
    <view class="right">
      <image class="img" :src="list.coverImgUrl" alt="" />
    </view>
    <view class="mask">{{ list.playCount | filterCount }}</view>
  </view>
</template>

<script>
export default {
  name: "BandCard",
  props: ["list", "idx"],
  data() {
    return {};
  },
  filters: {
    filterCount(val) {
      return (val / 10000 / 10000).toFixed(1) + "亿";
    },
  },
  methods: {
    goSongTopList() {
      uni.navigateTo({
        url: "/pages/music-toplist/music-toplist?idx=" + this.idx,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.warp {
  width: 100%;
  height: 180rpx;
  display: flex;
  margin-bottom: 20rpx;
  background-color: #f4f4f4;
  border-radius: 16rpx;
  overflow: hidden;
  position: relative;
  .mask {
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 6rpx 8rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 16rpx;
    color: white;
    font-size: 22rpx;
    background-color: rgba($color: #000000, $alpha: 0.3);
  }
  .left {
    width: 75%;
    height: 100%;
    padding: 16rpx;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    > .title {
      font-weight: bold;
      font-size: 32rpx;
    }
    > .rank {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      > .item {
        font-size: 24rpx;
      }
    }
  }
  .right {
    width: 25%;
    height: 100%;
    > .img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
