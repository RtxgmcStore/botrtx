let handler = async (m, { conn, text }) => {

    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
    else who = m.chat
    if (!who) throw `Siapa Yang Mau Di Jadiin Premium Om? :v`
    if (global.prems.includes(who.split`@`[0])) throw 'dia udah premium om'
    global.prems.push(`${who.split`@`[0]}`)
    conn.reply(m.chat, `@${who.split`@`[0]} Selamat om lu udah premium 😎 oh iya jangan sering² pake fitur hack ajg`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    })

}
handler.help = ['addprem [@user]']
handler.tags = ['owner']
handler.command = /^(add|tambah|\+)prem$/i

handler.rowner = true

module.exports = handler
