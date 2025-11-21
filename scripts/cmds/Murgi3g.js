module.exports = {
  config: {
    name: "murgi3girl",
    version: "3.0.0",
    author: "Watashi Wa Sajib",
    countDown: 5,
    role: 2,
    category: "fun",
    guide: { en: "{pn} @mention" }
  },

  onStart: async function ({ api, event }) {

    const mention = Object.keys(event.mentions)[0];
    if (!mention) return api.sendMessage(
      "🫂 যাকে roast দিবি তাকে @mention কর আপা 😘",
      event.threadID,
      event.messageID
    );

    const name = event.mentions[mention];
    const tag = [{ id: mention, tag: name }];

    function send(txt, delay = 0) {
      setTimeout(() => {
        api.sendMessage(txt, event.threadID);
      }, delay);
    }

    // GIRL VERSION ROASTS 💅🔥

    send({ body: `1) ${name} আপা, আপনাকে দেখলে মনে হয় লো ব্যাটারি পাওয়ার ব্যাংক 😭`, mentions: tag }, 0);
    send({ body: `2) আপা আপনি এত slow যে ঘুমও আপনার আগে আসে 😭`, mentions: tag }, 2500);
    send({ body: `3) ${name} আপা, আপনার ব্রেইনটা বোধহয় free trial এ চলছে 😹`, mentions: tag }, 5000);
    send({ body: `4) আপনার confidence টা wifi র মতো… দরজার বাইরে গেলেই উধাও 😭`, mentions: tag }, 7500);
    send({ body: `5) আপনি হাসলে মানুষ ভাবে নতুন bug বের হয়েছে 😭`, mentions: tag }, 10000);
    send({ body: `6) ${name} আপা, আপনার luck এত খারাপ যে ওড়না পরলেও হাওয়া নিয়ে যায় 😭`, mentions: tag }, 12500);
    send({ body: `7) আপনার face দেখে গুগল বলে: “Did you mean disaster?” 🤣`, mentions: tag }, 15000);
    send({ body: `8) আপনি এত useless যে সেলফি নিলেও blurry আসে 😹`, mentions: tag }, 17500);
    send({ body: `9) ${name} আপা, আপনার logic দেখে calculator হাই তুলে 😭`, mentions: tag }, 20000);
    send({ body: `10) আপনার স্টাইল দেখে মনে হয় poverty mode ON 😭`, mentions: tag }, 22500);

    send({ body: `11) আপনি এত slow যে loading bar-ও দেখে হাসে 🤣`, mentions: tag }, 25000);
    send({ body: `12) ${name} আপা, আপনার style expired milk এর মতো 😭`, mentions: tag }, 27500);
    send({ body: `13) আপনার মুখ দেখে camera auto blur করে দেয় 😹`, mentions: tag }, 30000);
    send({ body: `14) আপনি এমন মাইয়া যে mirror-ও uninstall হতে চায় 😭`, mentions: tag }, 32500);
    send({ body: `15) ${name} আপা, আপনার হাসি দেখে earthquake alert আসে 😭`, mentions: tag }, 35000);
    send({ body: `16) আপনি এত cheap যে দোকানদারও দাম বলতে গিয়ে হেসে ফেলে 🤣`, mentions: tag }, 37500);

    send({ body: `17) আপনার brain এত empty যে echo ফিরে আসে 😭`, mentions: tag }, 40000);
    send({ body: `18) ${name} আপা, আপনি কথা বললেই autocorrect পালাইতে চায় 😭`, mentions: tag }, 42500);
    send({ body: `19) আপনি এমন মাইয়া যে যেখানেই যান network 0 😭`, mentions: tag }, 45000);
    send({ body: `20) আপনি জন্মাইছেন lag এর মতো—সবকিছু late 😭`, mentions: tag }, 47500);

    send("~ আপা আর roast লাগলে ডাক দিবেন 😌🔥", 50000);
  }
};
