module.exports = {
  config: {
    name: "murgi2_girl",
    version: "2.0.1",
    author: "Watashi Wa Sajib",
    countDown: 5,
    role: 2,
    category: "fun",
    guide: { en: "{pn} @mention" }
  },

  onStart: async function ({ api, event }) {

    const mention = Object.keys(event.mentions)[0];
    if (!mention) return api.sendMessage(
      "🫂 যাকে থুক্কু দিবি তাকে @mention কর মাইয়া ভার্সনে 😘",
      event.threadID,
      event.messageID
    );

    const name = event.mentions[mention];
    const tag = [{ id: mention, tag: name }];

    function send(txt, delay = 0) {
      setTimeout(() => api.sendMessage(txt, event.threadID), delay);
    }

    // Start Girl Version Roast 💋🔥
    send({ body: `🐓 মুরগির ডিম থেকে জন্মাইসস নাকি রে মাইয়া? ${name}`, mentions: tag }, 0);
    send({ body: `💀 তোর মা–বাবার WiFi দিয়ে নাটক দেখি, তুই mute হয়ে থাক ${name}`, mentions: tag }, 3000);
    send({ body: `🔥 খাংকির মাইয়া তোর ইনবক্সে Discord server বানাইতেছি ${name}`, mentions: tag }, 6000);
    send({ body: `🥵 তোর বান্ধবীর ফোনে VPN লাগাইয়া দিলাম—lag free ড্রামা চলবে ${name}`, mentions: tag }, 9000);
    send({ body: `🤡 তুই জন্মাইছস Lag এর মতো—চেষ্টা করলেও smooth হস না ${name}`, mentions: tag }, 12000);
    send({ body: `💔 তোর drama দেখে Google বলছে “Too much headache” ${name}`, mentions: tag }, 15000);
    send({ body: `🖕 তোর crush এর মাথায় “Loading...” লিখা আছে, match হবে না ${name}`, mentions: tag }, 18000);
    send({ body: `😹 তোর বান্ধবীর ইনবক্সে হাই স্পিড gossip চলছে ${name}`, mentions: tag }, 21000);

    // — safe roast versions —
    send({ body: `🐶 তোরে কুত্তা না, বিড়ালই ভয় পাইতেছে—মাইয়া তুই আসলে কী? ${name}`, mentions: tag }, 24000);
    send({ body: `🌾 পাটখেতে ফালাইয়া দিলে শিয়ালও বলবে “No thanks” ${name}`, mentions: tag }, 27000);
    send({ body: `🐘 হাতির হাঁচির হাওয়ায়ই তুই ১০০ ফিট উড়াইয়া যাবি ${name}`, mentions: tag }, 30000);

    send({ body: `🚀 তোরা মাইয়াদের attitude NASA রকেটেও ধরা যায় না ${name}`, mentions: tag }, 33000);
    send({ body: `🍼 drama queen তোর জন্ম accident না—director error ${name}`, mentions: tag }, 36000);
    send({ body: `🤖 আমি সজীব, তোর সবার legend—মাথায় রাখ ${name}`, mentions: tag }, 39000);

    send("~ আর roast লাগলে বল বেবি মাইয়া ভার্সন আছে 💋", 42000);
  }
};
