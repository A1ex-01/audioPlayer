const timeRegExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/
function parseLyric(lyric) {
  lyric = lyric.split("\n");
  const paseArr = []
  for (let k in lyric) {
    const timeResult = timeRegExp.exec(lyric[k])
    if (timeResult) {
      const min = timeResult[1] * 60 * 1000;
      const sec = timeResult[2] * 1000;
      const mm = timeResult[3].length == 2 ? timeResult[3] * 10 : timeResult[3] * 1;
      const time = min + sec + mm;
      const lyricText = lyric[k].replace(timeRegExp, "")
      paseArr.push({ time, text: lyricText })
    }
  }
  return paseArr
}
export default parseLyric