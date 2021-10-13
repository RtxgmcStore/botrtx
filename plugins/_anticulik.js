let handler = m => handler.all = async function (m, { isAdmin, isBotAdmin }) {
  if (m.mtype == 'groupInviteMessage') {
idnya = await this.reply(m.chat, `「 Donasi • Pulsa 」

• *All Donate (gopay, dana, dll) :* https://wa.me/p/6227124240694416/62852403679546
• *Telkomsel:* 085240367954

Donasi semampunya untuk mendukung bot ini tetap hidup untuk kalian^_^
Kalau gak mampu yang di atas bisa juga *follow ig* https://instagram.com/rtxgmc_

Kontak pemilik saya⬇️⬇️
`, m)
this.sendContact(m.chat, '6285397907992', 'Pemilik saya', idnya)
  }
  return true
}

module.exports = handler