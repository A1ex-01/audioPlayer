<template>
  <view class="warp">
    <view class="song-player">
      <view class="song-img">
        <image class="img" :src="songInfo.al.picUrl" mode="aspectFit" />
      </view>
      <view class="song-title" v-if="songInfo">
        <text style="font-size: 32rpx; font-weight: bold">{{
          songInfo.name
        }}</text>
        <text style="font-size: 28rpx; margin: 14rpx 0">{{
          songInfo.ar[0].name
        }}</text>
        <text style="font-size: 28rpx"
          >专辑：{{ songInfo.alia | filterAlia }}</text
        >
      </view>
      <view class="song-short-word">{{ songLyric[currIndex].text }}</view>
      <view class="song-process">
        <text style="font-size: 24rpx">{{
          Math.floor(currTime) | filteColck
        }}</text>
        <view style="width: calc(100% - 180rpx)" v-if="songInfo && allTime">
          <u-slider
            @change="change"
            v-model="currTime"
            :max="allTime"
          ></u-slider>
        </view>
        <text style="font-size: 24rpx" v-if="songInfo">{{
          songInfo.dt | filteTime
        }}</text>
      </view>
      <view class="song-player-ui">
        <image
          class="status"
          @click="changeMode('repeat')"
          v-if="status === 'order'"
          src="../../static/imgs/player/play_order.png"
          mode=""
        />
        <image
          class="status"
          @click="changeMode('random')"
          v-if="status === 'repeat'"
          src="../../static/imgs/player/play_repeat.png"
          mode=""
        />
        <image
          class="status"
          v-if="status === 'random'"
          @click="changeMode('order')"
          src="../../static/imgs/player/play_random.png"
          mode=""
        />
        <image
          @click="prevClick"
          class="prev"
          src="../../static/imgs/player/play_prev.png"
          mode=""
        />
        <image
          @click="statusClick"
          v-if="!isPlayer"
          class="player-status"
          src="../../static/imgs/player/play_resume.png"
          mode=""
        />
        <image
          @click="statusClick"
          v-else
          class="player-status"
          src="../../static/imgs/player/play_pause.png"
          mode=""
        />
        <image
          @click="nextBtn"
          class="next"
          src="../../static/imgs/player/play_next.png"
          mode=""
        />
        <image
          @click="show = !show"
          class="meau"
          src="../../static/imgs/player/play_music.png"
          mode=""
        /> </view
    ></view>
    <u-overlay :show="show" @click="show = false">
      <view class="warp">
        <view class="content">
          <view
            class="rect"
            @click.stop="meauItemClick(index)"
            v-for="(item, index) in playMeauList"
            :key="index"
          >
            <SongCard v-if="index < 20" :recommendList="item"></SongCard>
          </view>
        </view>
      </view>
    </u-overlay>
  </view>
</template>

<script>
import store from "../../store/index";
export default {
  name: "music-ui",
  data() {
    return {
      show: false,
    };
  },
  computed: {
    songInfo: () => store.state.songInfo,
    songLyric: () => store.state.songLyric,
    currIndex: () => store.state.currIndex,
    allTime: () => store.state.allTime,
    currTime: {
      get: () => {
        return store.state.currTime;
      },
      set: (newValue) => {
        store.state.currTime = newValue;
      },
    },
    isPlayer: () => store.state.isPlayer,
    playMeauList: () => store.state.playMeauList,
    playMeauIndex: () => store.state.playMeauIndex,
    status: () => store.state.status,
  },
  filters: {
    filteTime(val) {
      return (
        "0" +
        parseInt(val / 1000 / 60) +
        ":" +
        (parseInt(val / 1000) % 60 >= 10
          ? parseInt(val / 1000) % 60
          : "0" + (parseInt(val / 1000) % 60))
      );
    },
    filteColck(val) {
      const min = parseInt(val / 60);
      const sec = val % 60;
      return (
        (min >= 10 ? min : "0" + min) + ":" + (sec >= 10 ? sec : "0" + sec)
      );
    },
    filterAlia(val) {
      if (val[0]) {
        return val[0];
      }
      return "无";
    },
  },
  watch: {
    songInfo() {
      store.commit("getAllTime", parseInt(this.songInfo.dt / 1000));
    },
  },
  methods: {
    statusClick() {
      // 获取总时间
      if (!this.isPlayer) {
        store.commit("start");
      } else {
        store.commit("pause");
      }
    },
    change(val) {
      store.commit("seekTime", val);
    },
    changeMode(val) {
      store.commit("changeStatus", val);
    },
    nextBtn() {
      if (this.status === "order") {
        if (this.playMeauList.length == this.playMeauIndex + 1) {
          store.commit("getMeauIndex", 0);
          store.commit("getIds", {
            ids: this.playMeauList[0].id,
            index: this.playMeauIndex,
          });
          store.dispatch("updateAllInfo", this.playMeauList[0].id);
        } else {
          store.commit("getMeauIndex", parseInt(this.playMeauIndex) + 1);
          store.dispatch(
            "updateAllInfo",
            this.playMeauList[this.playMeauIndex].id
          );
          store.commit("getIds", {
            ids: this.playMeauList[this.playMeauIndex].id,
            index: this.playMeauIndex,
          });
        }
      } else if (this.status === "repeat") {
        store.commit("getMeauIndex", this.playMeauIndex);
        store.commit("getIds", {
          ids: this.playMeauList[this.playMeauIndex].id,
          index: this.playMeauIndex,
        });
        store.dispatch(
          "updateAllInfo",
          this.playMeauList[this.playMeauIndex].id
        );
      } else {
        const random = Math.floor(
          Math.random() * (this.playMeauList.length - 1)
        );
        store.commit("getMeauIndex", random);
        store.commit("getIds", {
          ids: this.playMeauList[random].id,
          index: random,
        });
        store.dispatch("updateAllInfo", this.playMeauList[random].id);
      }
    },
    meauItemClick(v) {
      store.commit("getMeauIndex", v);
      store.dispatch("updateAllInfo", this.playMeauList[v].id);
      store.commit("getIds", {
        ids: this.playMeauList[v].id,
        index: v,
      });
      this.show = false;
    },
    prevClick() {
      if (this.status === "order") {
        if (0 == this.playMeauIndex) {
          store.commit("getMeauIndex", this.playMeauList.length - 1);
          store.commit("getIds", {
            ids: this.playMeauList[this.playMeauList.length - 1].id,
            index: this.playMeauList.length - 1,
          });
          store.dispatch(
            "updateAllInfo",
            this.playMeauList[this.playMeauList.length - 1].id
          );
        } else {
          store.commit("getMeauIndex", parseInt(this.playMeauIndex) - 1);
          store.dispatch(
            "updateAllInfo",
            this.playMeauList[this.playMeauIndex].id
          );
          store.commit("getIds", {
            ids: this.playMeauList[this.playMeauIndex].id,
            index: this.playMeauIndex,
          });
        }
      } else if (this.status === "repeat") {
        store.commit("getMeauIndex", this.playMeauIndex);
        store.commit("getIds", {
          ids: this.playMeauList[this.playMeauIndex].id,
          index: this.playMeauIndex,
        });
        store.dispatch(
          "updateAllInfo",
          this.playMeauList[this.playMeauIndex].id
        );
      } else {
        const random = Math.floor(
          Math.random() * (this.playMeauList.length - 1)
        );
        store.commit("getMeauIndex", random);
        store.commit("getIds", {
          ids: this.playMeauList[random].id,
          index: random,
        });
        store.dispatch("updateAllInfo", this.playMeauList[random].id);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.warp {
  width: 100%;
}
.song-player {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 14px 30px;
  box-sizing: border-box;
  color: white;
  display: flex;
  flex-direction: column;
  .song-short-word {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #42b983;
    width: 100%;
  }
  .song-img {
    width: 650rpx;
    margin: 0 auto;
    flex: 5;
    > .img {
      width: 100%;
      border-radius: 20rpx;
      height: 100%;
    }
  }
  .song-title {
    margin: 20rpx 0;
    display: flex;
    flex-direction: column;
  }
  .song-short-word {
    width: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .song-process {
    width: 100%;
    padding: 30rpx 0;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .song-player-ui {
    width: 100%;
    height: 200rpx;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .status {
      width: 90rpx;
      height: 90rpx;
    }
    .prev,
    .next {
      width: 70rpx;
      height: 70rpx;
    }
    .player-status {
      width: 140rpx;
      height: 140rpx;
    }
    .meau {
      width: 80rpx;
      height: 80rpx;
    }
  }
}
.warp {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
}
.content {
  width: 100%;
  height: 61.8%;
  padding: 20px;
  box-sizing: border-box;
  background-color: #fff;
  overflow-y: scroll;
}
.rect {
  width: 100%;
  box-sizing: border-box;
}
</style>
