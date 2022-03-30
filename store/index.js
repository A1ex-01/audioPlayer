import Vue from 'vue'
import Vuex from 'vuex'
import audio from "../utils/store"
import { getSongLyric, getSongDetailInfo } from "../utils/api"
import parseLyric from "../utils/parse-lyric"
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        ids: null,
        songInfo: null,
        songLyric: null,
        currTime: null,
        currIndex: 0,
        allTime: 0,
        isPlayer: false,
        status: "order",
        playMeauList: null,
        playMeauIndex: null
    },
    mutations: {
        getIds(state, payload) {
            // if (state.ids == payload) {
            //     return
            // }
            state.ids = payload.ids;
            state.playMeauIndex = payload.index;
            state.isPlayer = true;
            // 先停止播放 再赋值并开启播放
            audio.stop();
            audio.src = `https://music.163.com/song/media/outer/url?id=${state.ids}.mp3`;
            setTimeout(() => {
                audio.title = state.songInfo.name;
            }, 500);
            audio.autoplay = true;
            audio.onCanplay(() => {
                audio.play();
            })
            // 播放
            audio.onTimeUpdate(() => {
                this.commit("getCurrTime", audio.currentTime);
                for (let k in state.songLyric) {
                    if (
                        state.currTime * 1000 >
                        state.songLyric[state.songLyric.length - 1].time
                    ) {
                        this.commit("getCurrIndex", state.songLyric.length - 1);
                        break;
                    }
                    if (state.currTime * 1000 < state.songLyric[k].time) {
                        this.commit("getCurrIndex", k - 1);
                        break;
                    }
                }
            });
            audio.onEnded(() => {
                state.isPlayer = false;
                if (state.status == "order") {
                    state.isPlayer = true
                    if (state.playMeauList.length == (state.playMeauIndex - 1)) {
                        this.commit("getMeauIndex", 0);
                    } else {
                        this.commit("getMeauIndex", parseInt(state.playMeauIndex) + 1);
                    }
                    this.commit("getIds", { ids: state.playMeauList[state.playMeauIndex].id, index: state.playMeauIndex });
                    store.dispatch("updateAllInfo", state.playMeauList[state.playMeauIndex].id);
                } else if (state.status == "repeat") {
                    this.commit("getIds", { ids: state.playMeauList[state.playMeauIndex].id, index: state.playMeauIndex });
                    store.dispatch("updateAllInfo", state.playMeauList[state.playMeauIndex].id);
                } else {
                    const random = Math.floor(Math.random() * (state.playMeauList.length - 1));
                    state.playMeauIndex = random;
                    this.commit("getIds", { ids: state.playMeauList[state.playMeauIndex].id, index: state.playMeauIndex });
                    store.dispatch("updateAllInfo", state.playMeauList[state.playMeauIndex].id);
                }
            });
            audio.onPause(() => {
                state.isPlayer = false;
            })
            audio.onPlay(() => {
                state.isPlayer = true;
            })
            // audio.onStop(() => {
            //     state.isPlayer = false;
            // })
        },
        getSongInfo(state, payload) {
            state.songInfo = payload;
        },
        getSongLyric(state, payload) {
            state.songLyric = payload;
        },
        getCurrTime(state, payload) {
            state.currTime = payload;
        },
        getCurrIndex(state, payload) {
            state.currIndex = payload;
        },
        getAllTime(state, payload) {
            state.allTime = payload;
        },
        start(state) {
            state.isPlayer = true;
            audio.play();
        },
        pause(state) {
            state.isPlayer = false;
            audio.pause();
        },
        seekTime(state, payload) {
            // audio.pause();
            audio.seek(payload);
        },
        changeStatus(start, payload) {
            start.status = payload
        },
        getPlayMeauList(state, payload) {
            state.playMeauList = payload.list;
            state.playMeauIndex = payload.index;
        },
        getMeauIndex(state, payload) {
            state.playMeauIndex = payload
        },
        changeIsPlayer(state, payload) {
            state.isPlayer = payload
        }
    },
    actions: {
        async updateAllInfo({ commit }, payload) {
            const { songs } = await getSongDetailInfo(payload);
            commit("getSongInfo", songs[0]);
            const { lrc } = await getSongLyric(payload);
            commit("getSongLyric", parseLyric(lrc.lyric));

        }
    }
})
export default store