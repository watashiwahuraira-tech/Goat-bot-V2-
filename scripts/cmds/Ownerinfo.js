module.exports = {
  config: {
    name: "ownerinfo",
    aliases: ["owner","sajibinfo","ownerinfo"],
    version: "1.1",
    author: "Watashi Sajib 💫",
    countDown: 3,
    role: 0,
    shortDescription: "Show Owner's full info with social links",
    longDescription: "Displays owner name, FB, Instagram, Age, Study, Relationship",
    category: "info",
    guide: "{p}ownerinfo"
  },

  onStart: async function ({ api, event }) {
    try {
      // Dynamic Owner Info
      const owner = {
        name: "𝚆𝚊𝚝𝚊𝚜𝚑𝚒 𝚆𝚊 𝚂𝚊𝚓𝚒𝚋",
        fb: "https://www.facebook.com/share/16WZtvPKJY/"
        insta: "https://www.instagram.com/itzsajib78?igsh=MTd6Zm1qc3BvdGM4dQ==",
        study: "𝙱𝚊𝚗𝚐𝚕𝚊𝚍𝚊𝚜𝚑 𝚘𝚙𝚎𝚗 𝚄𝚗𝚒𝚟𝚎𝚛𝚜𝚒𝚝𝚢 𝚌𝚕𝚊𝚜𝚜 10 1𝚜𝚝. 𝚈𝚎𝚊𝚛 🙂💦",
        age: "18+",
        relationship: " 𝙸𝚗 𝙰 𝚓𝚊 𝚜𝚊𝚕𝚊 𝚔𝚘𝚖𝚞 𝚗𝚑 🙂💋 "
      };

      const msg = `
🌸┏━━━━━━━━━━━━━━━┓🌸
💖 𝐎𝐰𝐧𝐞𝐫 𝐈𝐧𝐟𝐨 💖
🌸┗━━━━━━━━━━━━━━━┛🌸

🦋 Name: ${owner.name}
🔗 Facebook: ${owner.fb}
📸 Instagram: ${owner.insta}
🎓 Study: ${owner.study}
🎂 Age: ${owner.age}
💖 Relationship: ${owner.relationship}

──────────────────────
🌼 From: ${owner.name}
──────────────────────
`;

      return api.sendMessage(msg, event.threadID);
    } catch (err) {
      return api.sendMessage("❌ Unexpected Error: " + err.message, event.threadID);
    }
  }
};
