'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	// const collection = await db.collection("AX_movieList");
	const {type} = event;
	let info = null;
	// const {data} = await collection.skip((page -1) *10).limit(10).get();
	if(type == 0) {
		const collection = await db.collection("creatSongRank");
		const data = await collection.get();
		info = data;
	}else if(type == 1) {
		const collection = await db.collection("newSongRank");
		const data = await collection.get();
		info = data;
	}else if(type == 2) {
		const collection = await db.collection("topSongRank");
		const data = await collection.get();
		info = data;

	}else if(type == 3) {
		const collection = await db.collection("hotSongRank");
		const data = await collection.get();
		info = data;
	}
	//返回数据给客户端
	return {
		status:200,
		data: info
	}
};
