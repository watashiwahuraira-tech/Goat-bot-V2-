module.exports = {
  config: {
    name: "murgi4",
    version: "4.0.0",
    author: "Watashi Wa Sajib",
    countDown: 5,
    role: 2,
    category: "fun",
    guide: {
      en: "{pn} @mention"
    }
  },

  onStart: async function ({ api, event }) {

    const mention = Object.keys(event.mentions)[0];
    if (!mention) return api.sendMessage(
      "🫂 যাকে roast দিবি তাকে @mention কর 🤭",
      event.threadID,
      event.messageID
    );

    const name = event.mentions[mention];
    const tag = [{ id: mention, tag: name }];

    function send(txt, delay = 0) {
      setTimeout(() => {
        api.sendMessage(
          typeof txt === "string" ? txt : txt,
          event.threadID
        );
      }, delay);
    }

    // CLEAN FUN ROASTS (NO GALI) – 20 ROAST SET 🔥

    send({ body: `1) ${name} ভাই, তোর মুখ দেখে মনে হয় phone এর last 1% চলছে 😭`, mentions: tag }, 0);
    send({ body: `2) তুই এমন slow যে calendar-ও তোরে ছুটি দেয় 🤣`, mentions: tag }, 2500);
    send({ body: `3) ${name}, তোর intelligence দেখে গুগলও বলে: "No results found" 😭`, mentions: tag }, 5000);
    send({ body: `4) তুই এমন পোলা যে ঘুমও তোরে দেখে ঘুমায় 😹`, mentions: tag }, 7500);
    send({ body: `5) তোর face দেখে selfie camera depression খায় 😭`, mentions: tag }, 10000);
    send({ body: `6) ${name} ভাই, তোর luck এত বাজে যে coin toss-ও তোকে avoid করে 😭`, mentions: tag }, 12500);
    send({ body: `7) তুই এমন useless যে recycle bin-ও delete করে না 🤣`, mentions: tag }, 15000);
    send({ body: `8) তোর voice শুনে Siri বলছে “Bruh…” 😭`, mentions: tag }, 17500);
    send({ body: `9) ${name} ভাই, তোর কথা শুনলে airplane-ও takeoff cancel করে 😭`, mentions: tag }, 20000);
    send({ body: `10) তোর style দেখে expired shampoo মনে পড়ে 😭`, mentions: tag }, 22500);

    send({ body: `11) তুই এমন confused যে map থাকলেও পথ হারাস 😭`, mentions: tag }, 25000);
    send({ body: `12) ${name}, তোর brain RAM হয়ত 256MB 😭`, mentions: tag }, 27500);
    send({ body: `13) তোর face দেখে camera automatically “low quality” i হয়ে যায় 😹`, mentions: tag }, 30000);
    send({ body: `14) তুই এমন dry joke মারস যে cactus-ও পানি খায় 😭`, mentions: tag }, 32500);
    send({ body: `15) ${name}, তোর decision-making দেখে Windows XP-ও fast মনে হয় 😭`, mentions: tag }, 35000);
    send({ body: `16) তুই এমন lost যে Google Maps-ও তোকে চিনে না 🤣`, mentions: tag }, 37500);

    send({ body: `17) তোর face দেখে mirror update চাই 😭`, mentions: tag }, 40000);
    send({ body: `18) ${name} ভাই, তুই কথা বললেই network 1 bar নেমে যায় 😭`, mentions: tag }, 42500);
    send({ body: `19) তুই চলিস offline mode এ 😭`, mentions: tag }, 45000);
    send({ body: `20) ${name}, তুই জন্মাইছস lag এর মতো—সবকিছু late 😭🔥`, mentions: tag }, 47500);

    send("~ Roast শেষ—আর লাগলে ডাকিস 😎🔥", 50000);
  }
};
