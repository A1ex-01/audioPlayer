<template>
  <view class="title">
    <slot></slot>
    <view class="more">
      <text style="margin-left: 10rpx" @click="goSongTopList">更多</text>
      <image
        style="width: 30rpx; height: 30rpx"
        src="../../static/imgs/icons/arrow-right.png"
      />
    </view>
  </view>
</template>

<script>
export default {
  name: "TitleCard",
  props: ["idx", "isMeau"],
  data() {
    return {};
  },
  methods: {
    goSongTopList() {
      if (this.idx) {
        uni.navigateTo({
          url: "/pages/music-toplist/music-toplist?idx=" + this.idx,
        });
      } else {
        console.log(this.isMeau)
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 32rpx;
  vertical-align: middle;
  font-weight: bold;
  > .more {
    font-size: 24rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #999;
    font-weight: 400;
  }
}
</style>
