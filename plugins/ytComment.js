let handler = async (m, { conn, text }) => {
  if (!text) throw 'No Text'
  await m.reply(global.wait)
  conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/youtube-comment', {
    avatar: await conn.getProfilePicture(m.sender).catch(_ => ''),
    comment: text,
    username: conn.getName(m.sender)
  }), 'yt-comment.png', '*©Ciel*', m)
}

handler.help = ['ytcomment <comment>']
handler.tags = ['creator']
handler.command = /^(ytc(omment)?)$/i
handler.limit = true
handler.register = false
module.exports = handler 
