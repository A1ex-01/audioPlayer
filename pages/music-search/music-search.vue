<template>
  <view class="warp">
    <view class="search">
      <u-search
        v-model="searchValue"
        shape="square"
        placeholder="搜索您喜欢的歌曲"
        @change="valueChange"
        @blur="confirm"
        ref="search"
      ></u-search>
    </view>
    <view class="hot" v-if="!searchValue && !resultShow">
      <view class="hot-title">热门搜索</view>
      <view class="tag">
        <text
          class="tag-item"
          v-for="(item, index) in tag"
          :key="index"
          @click="hotClick(item.first)"
          >{{ item.first }}</text
        >
      </view>
    </view>
    <view class="advice" v-if="searchValue && !resultShow">
      <view class="advice-title active"
        ><text class="text" style="font-weight: bold"
          >搜索“{{ searchValue }}”</text
        ></view
      >
      <view class="list" v-for="(item, index) in list" :key="index">
        <image
          style="width: 80rpx; height: 80rpx"
          src="../../static/imgs/icons/search_icon.png"
          mode=""
        />
        <view class="list-item" @click="choose(index)">
          <rich-text :nodes="checkSongNodes(index)"></rich-text>
        </view>
      </view>
    </view>
    <view class="result" v-if="resultShow">
      <view
        class="title active"
        style="margin: 20rpx 0; font-size: 32rpx; font-weight: bold"
        >最佳匹配</view
      >
      <view class="result-list">
        <SimpleSongCard
          v-for="(item, index) in resultSong"
          :key="index"
          @click.native="confirmExec(item.id, index)"
          :playList="resultSong[index]"
          :index="index + 1"
        ></SimpleSongCard>
      </view>
    </view>
  </view>
</template>

<script>
import {
  getHotSearchTag,
  getSearchResult,
  getSearchContent,
} from "../../utils/api";
import store from "../../store";
import { getSeatchMeauo } from "../../utils/api";
export default {
  data() {
    return {
      tag: null,
      searchValue: "",
      p1: null,
      list: null,
      SongNodes: null,
      resultSong: null,
      resultShow: false,
    };
  },
  onLoad() {
    this.getSeatchTag();
  },
  onUnload() {
    if (this.p1) {
      clearTimeout(this.p1);
      this.p1 = null;
    }
  },
  methods: {
    async confirmExec(v, i) {
      let arr = [];
      for (let i in this.resultSong) {
        arr.push(this.resultSong[i].id);
      }
      const { songs } = await getSeatchMeauo(arr);
      store.commit("getPlayMeauList", {
        list: songs,
        index: i,
      });
      uni.navigateTo({
        url: `/pages/music-player/music-player?ids=${v}&index=${i}`,
      });
    },
    async getSeatchTag() {
      const { result } = await getHotSearchTag();
      this.tag = result.hots;
    },
    valueChange(e) {
      console.log(e);
      this.resultShow = false;
      clearTimeout(this.p1);
      this.searchValue = e;
      if (this.searchValue) {
        this.p1 = setTimeout(async () => {
          const { result } = await getSearchResult(e);
          this.list = result.allMatch;
          this.SongNodes = result.allMatch;
        }, 500);
      } else {
        this.p1 = null;
        this.list = null;
      }
    },
    checkSongNodes(i) {
      const nodes = [];
      let key1, key2;
      if (this.SongNodes[i].keyword.startsWith(this.searchValue)) {
        key1 = this.SongNodes[i].keyword.slice(0, this.searchValue.length);
        key2 = this.SongNodes[i].keyword.slice(this.searchValue.length);
        nodes.push({
          name: "span",
          attrs: {
            style: "color:#42b983",
          },
          children: [{ type: "text", text: key1 }],
        });
        nodes.push({
          name: "span",
          attrs: {},
          children: [{ type: "text", text: key2 }],
        });
      } else if (this.SongNodes[i].keyword.endsWith(this.searchValue)) {
        key2 = this.SongNodes[i].keyword.slice(
          0,
          this.SongNodes[i].keyword.length - this.searchValue.length
        );
        key1 = this.SongNodes[i].keyword.slice(
          this.SongNodes[i].keyword.length - this.searchValue.length,
          this.SongNodes[i].keyword.length
        );
        nodes.push({
          name: "span",
          attrs: {},
          children: [{ type: "text", text: key2 }],
        });
        nodes.push({
          name: "span",
          attrs: {
            style: "color:#42b983",
          },
          children: [{ type: "text", text: key1 }],
        });
      } else {
        const pos = this.SongNodes[i].keyword.indexOf(this.searchValue);
        if (pos != -1) {
          let first = this.SongNodes[i].keyword.slice(0, pos);
          let second = this.searchValue;
          let third = this.SongNodes[i].keyword.slice(
            pos + this.searchValue.length
          );
          nodes.push({
            name: "span",
            attrs: {},
            children: [{ type: "text", text: first }],
          });
          nodes.push({
            name: "span",
            attrs: {
              style: "color:#42b983",
            },
            children: [{ type: "text", text: second }],
          });
          nodes.push({
            name: "span",
            attrs: {},
            children: [{ type: "text", text: third }],
          });
        } else {
          nodes.push({
            name: "span",
            attrs: {},
            children: [
              {
                type: "text",
                text: this.SongNodes[i].keyword,
              },
            ],
          });
        }
      }
      return nodes;
    },
    async choose(i) {
      this.searchValue = this.list[i].keyword;
      // this.valueChange({ detail: this.searchValue });
      const { result } = await getSearchContent(this.searchValue);
      this.resultSong = result.songs;
      this.resultShow = true;
    },
    async hotClick(i) {
      this.searchValue = i;
      // this.valueChange({ detail: this.searchValue });
      // this.status = true
      const { result } = await getSearchContent(this.searchValue);
      this.resultSong = result.songs;
      this.resultShow = true;
    },
    async confirm() {
      if (this.searchValue) {
        const { result } = await getSearchContent(this.searchValue);
        this.resultSong = result.songs;
        this.resultShow = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.warp {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #fafafa;
}
.search {
  width: 100%;
}
.hot {
  padding: 10rpx 30rpx;
  box-sizing: border-box;
  width: 100%;
  &-title {
    margin: 20rpx 0;
    font-size: 32rpx;
    font-weight: bold;
  }
  .tag {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    &-item {
      padding: 8rpx 12rpx;
      background-color: white;
      margin-right: 20rpx;
      font-size: 24rpx;
      &:first-child {
        color: #42b983;
      }
    }
  }
}
.advice {
  width: calc(100% - 60rpx);
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  .advice-title {
    font-size: 34rpx;
    > .text {
      font-weight: bold;
    }
  }
}
.active {
  color: #42b983;
}
.list {
  width: calc(100% - 60rpx);
  margin: 0 auto;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e4e4e4;
  &-item {
    width: 100%;
    height: 80rpx;
    display: flex;
    line-height: 80rpx;
    &:first-child {
      border-top: 2px solid #ccc;
    }
  }
}
.result {
  width: 100%;
  padding: 10rpx 30rpx;
  box-sizing: border-box;
  position: fixed;
  top: 80rpx;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: scroll;
}
</style>
