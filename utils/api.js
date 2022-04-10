import { _request } from "./request.js"

// 获取电影列表
function getMovieList(offset) {
	return _request("/top/mv", "get", { offset, limit: 10 })
}

// 获取播放地址
function getMvAddrById(id) {
	return _request("/mv/url", "get", { id })
}

// 获取mv详细信息
function getMvDetailById(mvid) {
	return _request("/mv/detail", "get", { mvid })
}

// 获取相关视频
function getRelatedVideo(id) {
	return _request("/related/allvideo", "get", { id })
}

// 获取轮播图数据
function getBanner() {
	return _request("/banner", "get", { type: 2 })
}

// 获取推荐列表
function getrecommend(idx) {
	return _request("/top/list", "get", { idx })
}
// 获取热门歌单
function getHotList(limit) {
	return _request("/top/playlist", "get", { limit })
}
// 获取推荐歌单
function getRemmendList(limit) {
	return _request("/top/playlist", "get", { limit, cat: "华语" })
}
// 获取歌单详情
function getSongMeauDetailById(id) {
	return _request("/playlist/detail/dynamic", "get", { id })
}
// 热门搜索
function getHotSearchTag() {
	return _request("/search/hot", "get")
}
// 搜索建议
function getSearchResult(keywords) {
	return _request("/search/suggest", "get", { keywords, type: "mobile" })
}
// 搜索结果
function getSearchContent(keywords) {
	return _request("/search", "get", { keywords })
}
// 获取歌曲详细信息
function getSongDetailInfo(ids) {
	return _request("/song/detail", "get", { ids })
}
// 获取歌曲歌词
function getSongLyric(id) {
	return _request("/lyric", "get", { id })
}

// search create meau
function getSeatchMeauo(arr) {
	return _request("/song/detail?ids=" + arr.toString(), "get")
}
export {
	// getMovieList,
	// getMvAddrById,
	// getMvDetailById,
	// getRelatedVideo,
	// getBanner,
	// getrecommend,
	// getHotList,
	// getRemmendList,
	// getSongMeauDetailById,
	// getHotSearchTag,
	// getSearchResult,
	// getSearchContent,
	// getSongDetailInfo,
	// getSongLyric,
	// getSeatchMeauo
}