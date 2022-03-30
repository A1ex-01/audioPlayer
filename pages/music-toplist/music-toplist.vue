<template>
  <view class="warp">
    <view class="title" v-if="idx">{{ playList.name }}</view>
    <view class="meau-card" v-if="meauId">
      <image class="img" :src="playList.coverImgUrl" mode="" />
      <view class="mask"></view>
      <view class="content">
        <view class="top">
          <view class="top-img">
            <image class="image" :src="playList.coverImgUrl" mode="" />
          </view>
          <view class="top-detail">
            <text class="song-title">{{ playList.name }}</text>
            <view class="song-author">
              <image
                class="author-img"
                :src="playList.creator.avatarUrl"
                mode=""
              />
              <text class="nickname">{{ playList.creator.nickname }}</text>
            </view>
            <view class="song-desc"> 简介：{{ playList.description }} </view>
          </view>
        </view>
        <view class="bottom">
          <view class="star">
            <image
              class="iconimg"
              src="../../static/imgs/icons/favor_icon.png"
              mode=""
            />
            <template v-if="playList">
              <text class="text">{{ filterCount(playList.playCount) }}</text>
            </template>
          </view>
          <view class="share">
            <image
              class="iconimg"
              src="../../static/imgs/icons/share_icon.png"
              mode=""
            />
            <text class="text">分享</text>
          </view>
        </view>
      </view>
    </view>
    <view class="list">
      <SimpleSongCard
        v-for="(item, index) in playList.tracks"
        @click.native="goMusicPlayer(item.id, index)"
        :key="index"
        :playList="item"
        :index="index + 1"
      />
    </view>
  </view>
</template>

<script>
import { getrecommend, getSongMeauDetailById } from "../../utils/api";
import store from "../../store/index";
export default {
  data() {
    return {
      idx: null,
      playList: null,
      meauId: null,
    };
  },
  onLoad(options) {
    console.log(options);
    if (options.idx) {
      this.idx = options.idx;
      this.getPageList();
    }
    if (options.meauId) {
      this.meauId = options.meauId;
      this.getSongMeauList();
    }
    setTimeout(() => {
      console.log("playlist", this.playList.tracks);
    }, 1000);
  },
  methods: {
    async getPageList() {
      const { playlist } = await getrecommend(this.idx);
      this.playList = playlist;
    },
    async getSongMeauList() {
      const { playlist } = await getSongMeauDetailById(this.meauId);
      this.playList = playlist;
    },
    filterCount(val) {
      return val;
    },
    goMusicPlayer(v, i) {
      store.commit("getPlayMeauList", { list: this.playList.tracks, index: i });
      console.log(v, i)
      uni.navigateTo({
        url: `/pages/music-player/music-player?ids=${v}&index=${i}`,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.warp {
  padding-bottom: 24rpx;
  .meau-card {
    width: 100%;
    height: 440rpx;
    overflow: hidden;
    position: relative;
    > .img {
      width: 100%;
      height: 760rpx;
      transform: translateY(-170rpx);
    }
    > .mask {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba($color: #000000, $alpha: 0.4);
      backdrop-filter: blur(10px);
    }
    > .content {
      position: absolute;
      color: white;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      padding: 20rpx;
      box-sizing: border-box;
      > .top {
        width: 100%;
        height: 280rpx;
        display: flex;
        .top-img {
          width: 260rpx;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 20rpx;
          > .image {
            width: 200rpx;
            height: 200rpx;
          }
        }
        .top-detail {
          flex: 1;
          width: 280rpx;
          display: flex;
          padding: 50rpx 0;
          box-sizing: border-box;
          flex-direction: column;
          justify-content: space-between;
          .song-title {
            width: 100%;
            font-size: 32rpx;
          }
          .song-author {
            width: 100%;
            display: flex;
            align-items: center;
            > .author-img {
              width: 40rpx;
              height: 40rpx;
              border-radius: 50%;
              margin-right: 6rpx;
              flex-shrink: 0;
            }
            > .nickname {
              width: 100%;
              font-size: 22rpx;
            }
          }
          .song-desc {
            font-size: 22rpx;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
  .title {
    width: 100%;
    padding: 0 18rpx;
    font-weight: bold;
    font-size: 38rpx;
  }
  .list {
    margin-top: 26rpx;
  }
}
.bottom {
  width: 100%;
  height: 140rpx;
  display: flex;
  > .star,
  .share {
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 35rpx;
    box-sizing: border-box;
    > image {
      width: 40rpx;
      height: 40rpx;
      margin-right: 10rpx;
    }
  }
}
</style>
