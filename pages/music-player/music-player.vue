<template>
  <view class="warp">
    <view class="bg">
      <image class="bg-image" :src="songInfo.al.picUrl" mode="aspectFill" />
    </view>
    <view class="bg-cover"> </view>
    <view class="title-bar">
      <TitleBar :statusBarHeight="statusHeight">
        <template #mid
          ><text :class="{ active: currPage === 0 }" @click="currPage = 0"
            >歌曲</text
          ><text style="margin: 0 10rpx">|</text
          ><text :class="{ active: currPage === 1 }" @click="currPage = 1"
            >歌词</text
          >
        </template>
      </TitleBar>
    </view>
    <view class="show-content">
      <swiper :current="currPage" class="swiper" @change="pageChange">
        <swiper-item class="swiper-item">
          <music-ui></music-ui>
        </swiper-item>
        <swiper-item class="swiper-item">
          <MusicChapter></MusicChapter>
        </swiper-item>
      </swiper>
    </view>
  </view>
</template>

<script>
import musicUi from "../../components/music-ui/music-ui.vue";
import { getSongDetailInfo, getSongLyric } from "../../utils/api";
import store from "../../store/index.js";
import parseLyric from "../../utils/parse-lyric";
export default {
  components: { musicUi },
  data() {
    return {
      statusHeight: "",
      currPage: 0,
    };
  },
  onLoad(options) {
    if (options.ids) {
      store.commit("getIds", { ids: options.ids, index: options.index });
      this.getPageInfo();
      this.statusHeight = uni.getSystemInfoSync().statusBarHeight;
      this.getLyric();
    }
  },
  computed: {
    songInfo: () => store.state.songInfo,
    songLyric: () => store.state.songLyric,
    ids: () => store.state.ids,
  },
  methods: {
    async getPageInfo() {
      const { songs } = await getSongDetailInfo(this.ids);
      store.commit("getSongInfo", songs[0]);
    },
    pageChange(e) {
      this.currPage = e.detail.current;
    },
    async getLyric() {
      const { lrc } = await getSongLyric(this.ids);
      store.commit("getSongLyric", parseLyric(lrc.lyric));
    },
  },
};
</script>

<style lang="scss" scoped>
.warp {
  width: 100%;
}
.bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
.bg-cover {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba($color: #000000, $alpha: 0.3);
  backdrop-filter: blur(30rpx);
  z-index: -1;
}
.bg-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
.show-content {
  width: 100%;
  position: fixed;
  top: 64px;
  bottom: 0;
  left: 0;
  right: 0;
  .swiper {
    width: 100%;
    height: 100%;
    &-item {
      width: 100%;
      height: 100%;
    }
  }
}
.active {
  color: #42b983;
}
</style>
