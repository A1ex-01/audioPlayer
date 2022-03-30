<template>
  <view class="music">
    <view class="search" @click="goSearch">
      <u-search
        disabled
        shape="square"
        placeholder="搜索您喜欢的歌曲"
      ></u-search>
    </view>
    <view class="swip">
      <swiper class="swiper" :indicator-dots="true" :autoplay="true">
        <swiper-item v-for="(item, index) in swiperList" :key="index">
          <image :src="item.pic" mode="" style="width: 100%; height: 250rpx" />
        </swiper-item>
      </swiper>
    </view>
    <view class="recommend">
      <Recommend :recommendList="recommendList" />
    </view>
    <view class="hotlist">
      <HotList :hotList="hotList"></HotList>
    </view>
    <view class="recomendsong">
      <Recommendsong :recommends="recommends"></Recommendsong>
    </view>
    <text class="tit">巅峰榜</text>
    <view :class="{band:true, isPlayer:src}">
      <BandCard :list="newList" :idx="0"></BandCard>
      <BandCard :list="createrList" :idx="3"></BandCard>
      <BandCard :list="upperList" :idx="2"></BandCard>
    </view>
    <view class="player" v-if="src" @click="goMusic">
      <view class="img">
        <image :src="songInfo.al.picUrl" class="img-head" mode="" />
      </view>
      <view class="name">{{ songInfo.name }}</view>
      <view class="state" @click.stop="changeStatus">
        <img
          v-if="isPlayer"
          class="player-status"
          src="../../static/imgs/music/pause_icon.png"
          alt=""
        />
        <img
          v-else
          class="player-status"
          src="../../static/imgs/music/play_icon.png"
          alt=""
        />
      </view>
    </view>
  </view>
</template>

<script>
import Recommend from "../../components/Recommend/Recommend.vue";
import store from "../../store";
import {
  getBanner,
  getrecommend,
  getHotList,
  getRemmendList,
} from "../../utils/api";
export default {
  components: { Recommend },
  data() {
    return {
      swiperList: null,
      swiperHeight: "120",
      recommendList: null,
      hotList: null,
      recommends: null,
      newList: null,
      createrList: null,
      upperList: null,
    };
  },
  computed: {
    src: () => {
      if (store.state.ids) {
        return `https://music.163.com/song/media/outer/url?id=${store.state.ids}.mp3`;
      } else {
        return null;
      }
    },
    songInfo: () => store.state.songInfo,
    isPlayer: () => store.state.isPlayer,
  },
  onLoad() {
    this.getMyBanner();
    this.getCommendList();
    this.getMyHotList();
    this.getMyRemmendList();
    this.getNewList();
    this.getCreaterList();
    this.getUpperList();
  },
  methods: {
    async getMyBanner() {
      const data = await getBanner();
      this.swiperList = data.banners;
    },
    async getCommendList() {
      const { playlist } = await getrecommend(2);
      this.recommendList = playlist.tracks.slice(0, 6);
    },
    async getMyHotList() {
      const { playlists } = await getHotList(10);
      this.hotList = playlists;
    },
    async getMyRemmendList() {
      const { playlists } = await getRemmendList(10);
      this.recommends = playlists;
    },
    async getNewList() {
      const { playlist } = await getrecommend(0);
      this.newList = playlist;
    },
    async getCreaterList() {
      const { playlist } = await getrecommend(3);
      this.createrList = playlist;
    },
    async getUpperList() {
      const { playlist } = await getrecommend(2);
      this.upperList = playlist;
    },
    goSearch() {
      uni.navigateTo({
        url: "/pages/music-search/music-search",
      });
    },
    changeStatus() {
      console.log(1);
      store.commit("changeIsPlayer", !this.isPlayer);
      !this.isPlayer ? store.commit("pause") : store.commit("start");
    },
    goMusic(){
            uni.navigateTo({
        url: "/pages/music-player/music-player",
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.isPlayer {
  padding-bottom: 100rpx;
}
.music {
  background-color: #fff;
  padding: 0 20rpx;
  box-sizing: border-box;
  .player {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100rpx;
    display: flex;
    align-items: center;
    background-color: white;
    box-shadow: 0 -1px 3px rgba($color: #000000, $alpha: 0.2);
    > .img {
      width: 100rpx;
      height: 100rpx;
      > .img-head {
        width: 100rpx;
        height: 100rpx;
      }
    }
    > .state {
      width: 100rpx;
      height: 100rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      > .player-status {
        width: 60rpx;
        height: 60rpx;
      }
    }
    > .name {
      flex: 1;
      margin-left: 24rpx;
    }
  }
}
.swip {
  width: 100%;
  margin: 20rpx 0;
  border-radius: 10px;
  overflow: hidden;
  transform: translateY(0);
  > swiper {
    width: 100%;
    height: 250rpx;
    > swiper-item {
      width: 100%;
      height: 250rpx;
      > image {
        width: 100%;
      }
    }
  }
}
::v-deep .van-search {
  padding: 10px 0;
}
.recommend,
.hotlist,
.recomendsong,
.band {
  width: 100%;
  margin: 20rpx 0;
}
.tit {
  font-weight: bold;
}
</style>
