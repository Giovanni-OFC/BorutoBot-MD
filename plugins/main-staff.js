let handler = async (m, { conn, command, usedPrefix }) => {
let staff = `🚩 *EQUIPO DE AYUDANTES*
🍟 *Bot:* ${global.botname}
✨️ *Versión:* ${global.vs}

👑 *Propietario:*

• Diamond
🍟 *Rol:* Propietario
🚩 *Número:* wa.me/50242073893
✨️ *GitHub:* https://github.com/Jostin-444 

⚡  *Colaboradores:* 🌱

• KenisawaDev
🍟 *Rol:* Developer
🚩 *Número:* Wa.me/5493865860047

• Giovanni-OFC 
🍟 *Rol:* Contribuidor
🚩 *Instagram:* https://www.instagram.com/giovanni_.ofc/profilecard/?igsh=MTF1ZW1iNmEwYzJ6Zw=
`
await conn.sendFile(m.chat, icons, 'yaemori.jpg', staff.trim(), fkontak, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `🥷 Developers 👑`,
body: `🚩 Staff Oficial`,
mediaType: 1,
sourceUrl: redes,
thumbnailUrl: icono
}}
}, { mentions: m.sender })
m.react(emoji)

}
handler.help = ['staff']
handler.command = ['colaboradores', 'staff']
handler.register = true
handler.tags = ['main']

export default handler
