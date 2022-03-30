<template>
  <view class="warp">
    <scroll-view scroll-y class="lyric-show">
      <view
        v-for="(item, index) in songLyric"
        :class="{ item:true,active: index === currIndex }"
        :style="{transform: `translateY(${-currIndex * 70+screenHeight - 250}rpx)`}"
        :key="index"
        >{{ item.text }}</view
      >
    </scroll-view>
  </view>
</template>

<script>
import store from "../../store";
export default {
  name: "MusicChapter",
  data() {
    return {
      p1: null,
    };
  },
  computed: {
    songInfo: () => store.state.songInfo,
    currIndex: () => store.state.currIndex,
    songLyric: () => store.state.songLyric,
    screenHeight:() => uni.getSystemInfoSync().screenHeight
  },
};
</script>

<style lang="scss" scoped>
.warp {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .lyric-show {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    color: white;
  }
}
.item{
  height: 70rpx;
  text-align: center;
  transition: all .5s;
}
.active {
  color: #42b983;
  font-size: 34rpx;
}
</style>
