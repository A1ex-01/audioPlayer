<template>
  <view>
    <view class="video">
      <video :src="addr.url" autoplay controls></video>
    </view>
    <view class="content">
      <view class="video-name" v-if="detail">
        <text>{{ detail.name }}</text>
        <text>{{ detail.artistName }}</text>
        <text
          >{{ detail.playCount | filterCount }} - {{ detail.publishTime }}</text
        >
      </view>
      <view class="relate-video">
        <text>推荐视频</text>
        <view class="relate-video-item" v-for="(v, i) in relate" :key="i">
          <VdItem :relate="relate[i]"></VdItem>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      addr: null,
      detail: null,
      relate: null,
    };
  },
  filters: {
    filterCount(val) {
      return (val / 10000).toFixed(2) + "万次播放";
    },
  },
  onLoad(val) {
    this.id = val.id;
    this.getMvAddr();
    this.getMvDetail();
    this.getRelated();
  },
  methods: {
    getMvAddr() {
      // const { data } = await getMvAddrById(this.id);
	  // console.log("addrinfo",data);
	  uni.request({
	  	url:"https://axplayer-node.vercel.app/mv/url?id=" + this.id,
		success: (res) => {
			// console.log("node",res)
			this.addr = res.data.data;
		}
	  })
      // this.addr = data;
    },
    async getMvDetail() {
      // const { data } = await getMvDetailById(this.id);
	  // console.log("base",data);
	  uni.request({
	  	url:"https://axplayer-node.vercel.app/mv/detail?mvid=" + this.id,
		success: (res) => {
			// console.log("node",res)
			this.detail =  res.data.data;
		}
	  })
      // this.detail = data;
    },
    async getRelated() {
      // const { data } = await getRelatedVideo(this.id);
	  // console.log("base",data)
	  uni.request({
	  	url:"https://axplayer-node.vercel.app/related/allvideo?id=" + this.id,
		success: (res) => {
			// console.log(res.data.data);
			this.relate = res.data.data;
		}
	  })
      // this.relate = data;
    },
  },
};
</script>

<style lang="scss" scoped>
.video {
  width: 100%;
  video {
    width: 100%;
  }
}
.content {
  position: fixed;
  top: 225px;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20rpx;
  overflow-y: scroll;
  box-sizing: border-box;
  .video-name {
    width: 100%;
    display: flex;
    flex-direction: column;
    text {
      width: 100%;
      font-size: 24rpx;
      color: #999;
      &:nth-child(1) {
        font-size: 32rpx;
        color: black;
      }
      &:nth-child(2) {
        margin: 10px 0;
      }
    }
  }
  .relate-video {
    margin-top: 20rpx;
  }
  .relate-video-item {
    margin-top: 20rpx;
  }
}
</style>
