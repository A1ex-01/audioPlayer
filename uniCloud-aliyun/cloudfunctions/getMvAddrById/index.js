'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	const collection = await db.collection("AX_movieList");
	const {page} = event;
	const {data} = await collection.skip((page -1) *10).limit(10).get();
	
	//返回数据给客户端
	return {
		status:200,
		data
	}
};
