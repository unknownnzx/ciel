let handler = async (m, { conn }) => {
  await m.reply(global.wait)
  let res = `https://recoders-area.caliph.repl.co/api/loli`
  conn.sendFile(m.chat, res, 'loli.jpg', `wangy wangy wangy`, m)
}
handler.help = ['loli'].map(v => v + ' ')
handler.tags = ['weebs']
handler.command = /^(loli)$/i
handler.premium = true
handler.register = false
handler.limit = true
module.exports = handler