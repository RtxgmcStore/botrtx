let handler = async m => m.reply(`
┏━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *Telkomsel:* [085240367954]
┣➥ *Dana, Ovo, Gopay, Dll:* [https://wa.me/p/6227124240694416/62852403679546]
┃ 「 *Chat OWNER* 」
┃ > *Ingin donasi? Wa.me/6285397907992*
┗━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
