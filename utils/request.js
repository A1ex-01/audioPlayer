// 基地址
const baseURL = "http://123.207.32.32:9001"
export const _request = (url, method, params=null) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url:baseURL + url,
			method:method,
			data:params,
			success:(res) =>{
				resolve(res.data);
			},
			fail:reject
		})
	})
}