const login = require("fca-unofficial");
const fs = require("fs");

module.exports.config = {
  name: "clone",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "rudra", // ❌ Don't Change This Or Bot Will Crash
  description: "Generate appstate.json from FB credentials",
  commandCategory: "system",
  usages: "[princerajput+1145@zohomail.in] [123456]",
  cooldowns: 5,
};

module.exports.run = async function({ api, event, args }) {
  // Anti-Credit-Change Lock
  if (module.exports.config.credits !== "rudra") {
    return api.sendMessage("❌ Credit chhedne ki koshish mat kar bhai… Command block ho chuki hai!", event.threadID, event.messageID);
  }

  const [email, password] = args;
  if (!email || !password) {
    return api.sendMessage("⚠️ Usage: clone your_email your_password", event.threadID, event.messageID);
  }

  api.sendMessage("⏳ Logging in, please wait...", event.threadID, event.messageID);

  login({ email, password }, (err, apiLogin) => {
    if (err) {
      switch (err.error) {
        case 'login-approval':
          return api.sendMessage("⚠️ 2FA detected! Ye command 2FA supported nahi hai abhi.", event.threadID, event.messageID);
        default:
          return api.sendMessage(`❌ Login failed: ${err.error}`, event.threadID, event.messageID);
      }
    }

    // Save appstate
    fs.writeFileSync("appstate.json", JSON.stringify(apiLogin.getAppState(), null, 2));
    return api.sendMessage("✅ Login successful!\nAppstate saved as `appstate.json`. Paste it in bot root folder.", event.threadID, event.messageID);
  });
};
