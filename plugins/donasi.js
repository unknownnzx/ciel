let handler = async m => m.reply(`
┏ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇       *「 DONASI 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ❖ Pulsa [0887436568613]  (Owner I)
┃ ❖ Pulsa [6285780372455]  (Owner II)
┗ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━

Terimakasih sudah berdonasi 😁
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i
handler.register = false

module.exports = handler