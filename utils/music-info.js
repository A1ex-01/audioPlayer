let lyric = null;
let currIndex = 0;
let songInfo = null;
function setSongInfo(val){
  songInfo = val
}
function getSongInfo(){
  return songInfo
}
function getLyric(){
  return lyric;
}
function setLyric(val){
  lyric = val;
}
function getCurrIndex(){
  return currIndex;
}
function setCurrIndex(val){
  currIndex = val;
}
export  {
  currIndex,
  setSongInfo,
  getSongInfo,
  getLyric,
  setLyric,
  getCurrIndex,
  setCurrIndex
}