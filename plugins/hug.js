let fetch = require("node-fetch")
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn}) => {
await m.reply(global.wait)
  try {
  let res = await fetch('https://some-random-api.ml/animu/hug')
  let json = await res.json()
  let { 
link
} = json
let stiker = await sticker(null, link, 'Hug', 'Ciel')
  conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
 } catch (e) {
  }
}
handler.help = ['hug']
handler.tags = ['expression']
handler.command = /^hug/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler
