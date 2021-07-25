let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
┏ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇                 *「 Tutorial Buat Bot WA 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇       *「 Termux User 」*
┃
┃ ❖ pkg install git
┃ ❖ pkg install nodejs
┃ ❖ pkg install ffmpeg
┃ ❖ pkg install imagemagick
┃
┇       Untuk Githubnya
┃
┃ ❖ git clone https://unknownnzx/ciel
┃ ❖ ls
┃ ❖ cd ciel
┃
┇  Terakhir Penginstalannya Cuy
┃
┃ ❖ npm i
┃ ❖ node . [ session name is optional ]
┃
┃
┃ ❖ Kunjungi Github unx21 untuk mencoba Bot dengan banyak fitur lainnya
┃
┃   atau bisa di cek di https://youtube.com/channel/UCeBQibDq0-d5vji8_RBDiVw
┃
┗ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
`.trim(), m)
}
handler.help = ['tutorial']
handler.tags = ['info']
handler.command = /^(tutorial)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
