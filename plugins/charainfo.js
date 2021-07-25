let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
await m.reply(global.wait)
  if (!text) throw `Masukkan query!`
  let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/character', { q: text }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let { name, alternative_names, url, image_url } = json.results[0]
let charaingfo = `*Name:* ${name}
*Nickname:* ${alternative_names}
*Link*: ${url}`
  conn.sendFile(m.chat, image_url, '', charaingfo, m)
}
handler.help = ['character <nama>']
handler.tags = ['weebs']
handler.command = /^(chara|character)$/i
handler.register = false
handler.limit = true
//kyaa jangan biarkan wabot-aq terbengkalai sampai nurutomo kembali
module.exports = handler
