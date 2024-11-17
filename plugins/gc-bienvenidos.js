import fs from 'fs';
import path from 'path';

let handler = async (m, { conn }) => {
    let fakegif = {
        key: { 
            participant: `0@s.whatsapp.net`,
            ...(m.chat ? { remoteJid: m.chat } : {}) 
        },
        message: {
            videoMessage: { 
                title: 'boruto', 
                h: `Hmm`,
                seconds: '99999', 
                gifPlayback: true, 
                caption: '⚘݄-ム 𝐉𝐎𝐒𝐓𝐈𝐍-444 ㋰', 
                jpegThumbnail: logo5
            }
        }
    };

    let groupMetadata = await conn.groupMetadata(m.chat);
    let str = `݄ㅤ໑   ֺ  ╭ְ┅─⃛┅꯭۪─ְ─ֺ╮ ᰨ⭐ᰵ╭ֺ─݄─꯭┅─⃛┅ְ╮  ֺ   ໑\n    ׅ  ♥︎   ࣪   𝖻ienvenido   ࣪ al grupo   ׅ   ﾛﾛ \n             ${groupMetadata.subject}\n ׅ                  lee   ׅ  ✷👑 ࣪  las   ࣪  reglas   ׅ   ❦\n ݄ㅤ໑   ֺ  ╰݄┅─⃛┅꯭۪─ְ─ֺ╯ ᰨ🌇ᰵ╰ֺ─݄─꯭┅─⃛┅ְ╯  ֺ   ໑ㅤְ\n\n> ©᪲ㅤֺㅤ𑁀⭐ܼܶㅤ𝚋𝚘𝚛𝚞𝚝𝚘 𝚋𝚘𝚝 𝙼𝙳ㅤִㅤｵｵ`.trim();

    if (m.isGroup) {
        let pp = 'https://telegra.ph/file/c62071be335ec9e97a0cf.mp4';
        const videos = [pp];
        const video = videos[Math.floor(Math.random() * videos.length)];

        const mentionedJid = groupMetadata.participants.map(v => v.id);

        await conn.sendMessage(m.chat, {
            video: { url: video },
            caption: str,
            gifPlayback: true,
            mentions: mentionedJid
        }, { quoted: fakegif });
    }
};

handler.help = ['bienvenido'];
handler.group = true;
handler.admin = true;
handler.tags = ['grupo'];
handler.command = ['bienvenidos','nuevos'];

export default handler;
