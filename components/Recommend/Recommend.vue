<template>
  <view class="warp">
    <view>
      <TitleCard :idx="1">
        <text>推荐歌曲</text>
      </TitleCard>
    </view>
    <view class="cont">
      <template v-for="(item, index) in recommendList">
        <SongCard
          @click.native="goPlayer(item.id, index)"
          :recommendList="item"
          :key="index"
        ></SongCard>
      </template>
    </view>
  </view>
</template>

<script>
import store from "../../store/index";
export default {
  name: "Recommend",
  props: ["recommendList"],
  data() {
    return {};
  },
  computed: {
    playMeauList: () => store.state.playMeauList,
    playMeauIndex: () => store.state.playMeauIndex,
  },
  methods: {
    goPlayer(i, v) {
      store.commit("getPlayMeauList", { list: this.recommendList, index: v });
      uni.navigateTo({
        url: `/pages/music-player/music-player?ids=${i}&index=${v}`,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.warp {
  width: 100%;
  background-color: white;
}
.cont {
  margin-top: 30rpx;
}
</style>
