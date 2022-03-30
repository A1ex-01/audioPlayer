<template>
  <view class="warp" @click="goSongMeau(hotList.id)">
    <view class="img">
      <image class="image" :src="hotList.coverImgUrl" mode="" />
    </view>
    <text class="name">{{ hotList.name }}</text>
  </view>
</template>

<script>
export default {
  name: "HotCard",
  props: ["hotList"],
  data() {
    return {};
  },
  methods: {
    goSongMeau(val) {
      uni.navigateTo({                            
        url: "/pages/music-toplist/music-toplist?meauId=" + val,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.warp {
  width: 100%;
  height: 270rpx;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  .img {
    width: 200rpx;
    height: 200rpx;
    .image {
      width: 200rpx;
      height: 200rpx;
      border-radius: 6%;
    }
  }
  .name {
    width: 200rpx;
    font-size: 22rpx;
    height: 60rpx;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
}
</style>
