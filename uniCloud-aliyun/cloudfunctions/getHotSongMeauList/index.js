'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	const collection = await db.collection("hotSongMeau");
	const {data} = await collection.get();
	
	//返回数据给客户端
	return {
		status:200,
		data
	}
};
