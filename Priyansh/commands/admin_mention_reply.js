module.exports.config = {
  name: "auto_reply",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝐀𝐒𝐈𝐅 𝐱𝟔𝟗",
  description: "BOT Send Reply If Admin Mentioned",
  commandCategory: "Extra - Files",
  usePrefix: "False - ❎",
  usages: "Mention Admin",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !==
"100001749311229","100092192215832") {
    var aid = ["100001749311229","100092192215832"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Abby Champe Mery Owner ko tag matt kar 😈", "Ek Bar Samjh Ni ati Tag naa kro Owner ko😒","Tuje Dikh Nhin Rha Prince Bussy hai 🧐😈","Ary Hamare Boss sore he usKo tag krke tang mat kro 😈" ,"Please Mery owner ko tag kr k tang mtt kro 😈","Haan Janu Main idhr hun" , "Ja Bey Mere boss ko Mat bula So rha 🐧🎧"  ,"Abey Prince sorha hai tang na kr use mat bula 🐧🎧✨" ,"Prince Busy hai 🎧🤍" ,"Yes Bolo Kya Bolna Hai Prince Ko 😛🤍" ,"Abey Nikal Yahn se Prince Ko Mat Bula 😈","owner ko Pher sy tag kr diya ullo ka pattha😈"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
        }
