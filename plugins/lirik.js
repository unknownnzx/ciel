// Pngocok handal

let fetch = require('node-fetch')
let handler = async (m, { text }) => {
await m.reply(global.wait)
  let res = await fetch(global.API('https://some-random-api.ml', '/lyrics', {
    title: text
  }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.thumbnail.genius) throw json
  conn.sendFile(m.chat, json.thumbnail.genius, '', `
*${json.title}*
_${json.author}_\n
${json.lyrics}\n\n
${json.links.genius}
`, m)
}
handler.help = ['lirik'].map(v => v + ' <Apa>')
handler.tags = ['internet']
handler.command = /^(lirik|lyrics|lyric)$/i
handler.limit = true

module.exports = handler
