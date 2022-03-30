<template>
  <view class="video">
    <scroll-view scroll-y="true" @scrolltolower="scrolltolower">
      <view class="movie">
        <view
          class="item"
          v-for="(item, index) in mvList"
          :key="item.id"
          @click="goVideoDetail(item.id)"
        >
          <MvItem :mvList="mvList[index]"></MvItem>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
import { getMovieList } from "../../utils/api.js";
export default {
  data() {
    return {
      mvList: null,
      page: 1,
      allowPull: true,
    };
  },
  onLoad() {
    this.getInitList();
  },
  methods: {
    // 初始化列表
    async getInitList() {
      const { data } = await getMovieList(0);
      this.mvList = data;
      console.log(this.mvList);
    },

    // 下拉获取列表
    async getListByPage() {
      if (this.allowPull) {
        const { data, hasMore } = await getMovieList((this.page - 1) * 10);
        if (!hasMore) {
          this.allowPull = false;
          return;
        }
        this.mvList = this.mvList.concat(data);
      }
    },

    // 触底行为
    scrolltolower() {
      this.page++;
      this.getListByPage();
    },

    // 跳转至视屏详情页
    goVideoDetail(val) {
      console.log(val);
      uni.navigateTo({
        url: "../video-detail/video-detail?id=" + val,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.video {
  position: fixed;
  top: 0;
  bottom: 0rpx;
  left: 0;
  right: 0;
  padding: 10rpx;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
	>scroll-view{
		width: 100%;
		height: 100%;
	}
  .movie {
    width: 100%;
    height: 1170rpx;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    > .item {
      width: 350rpx;
			margin-bottom: 5%;
      // height: 300rpx;
    }
  }
}
</style>
