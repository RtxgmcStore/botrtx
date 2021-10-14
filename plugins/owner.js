function handler(m) {
  // Ini cuma contoh, jgn di uncomment -_-
  // F this.sendContact(m.chat, '6285397907992', 'Rtxgmc', m)
stc = conn.sendContact(m.chat, '62852403679546', 'RtxgmcStore', m)
  conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*Developer ZeroBot *', 'status@broadcast')
}
handler.command = ['owner']

module.exports = handler
