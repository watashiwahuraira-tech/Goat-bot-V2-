const axios = require("axios");
const fs = require("fs-extra");

module.exports = {
  config: {
    name: "slap",
    aliases: ["batslap"],
    version: "1.0",
    author: "Arafat Da",
    countDown: 5,
    role: 0,
    shortDescription: "Slap someone 😵",
    longDescription: "Generates a slap/batslap image between you and tagged user",
    category: "image",
    guide: "{pn} @tag"
  },

  onStart: async function ({ event, message, args }) {
    const mention = Object.keys(event.mentions)[0];
    if (!mention) return message.reply("Tag someone to slap!");

    try {
      // Get avatar URLs
      const avatar1 = await global.utils.getAvatarUrl(event.senderID);
      const avatar2 = await global.utils.getAvatarUrl(mention);

      // API link
      const api = `https://some-random-api.com/canvas/slap?avatar1=${avatar1}&avatar2=${avatar2}`;

      const path = `${process.cwd()}/cache/slap_${Date.now()}.png`;

      const res = await axios.get(api, { responseType: "arraybuffer" });
      fs.writeFileSync(path, res.data);

      message.reply(
        {
          body: "Booommm! 😵‍💫🔥",
          attachment: fs.createReadStream(path)
        },
        () => fs.unlinkSync(path)
      );
    } catch (e) {
      console.log(e);
      message.reply("❌ Error generating slap image.");
    }
  }
};
