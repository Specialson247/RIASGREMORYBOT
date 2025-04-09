//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "obidikechikadibia@gmail.com";
global.location = "Ondo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://tkm:Aqi6tqwyv5IwDHncTtVi5XtMGZvfndDJ@dpg-cqahogtds78s739sl81g-a.oregon-postgres.render.com/takudzwa";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Toxic1239/RIASGREMORYBOT";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c21ae479aab857b4f8006.jpg";
global.devs = "2349169868945";
global.sudo = process.env.SUDO || "2349169868945";
global.owner = process.env.OWNER_NUMBER || "2349169868945";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/84a935261759d92084744.mp4";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://riasgremorybot-xcqv.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUNDRGNmYjRpRjBzRU1mTzI1aVlqdGlKbStpVXBXd0VDUmc0NjRzdkJrMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0dWNnpqek82dGRvQWRjWDRSeGI2M3ZISWdQVmlkdStrOWVBSUZ0VFdCaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyTE9tL2RqeFpucjh2cW96UHRNTFY1clAreXZ4eHBFMERaSWxUMTNIRjA4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzSzY1bnk1bjcxY29XeVpZazZCTElRU0ZuNXdRVHBBWjhPcG5FV1ZyaFJzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9KNEorYXJSU042VXUyY0N1MUZ1T1lWU3ZlMC9rK3BGbHlBRmZidEQ0bjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRwSllnTk5rSkxxMUNmVGMvL0w1YXhXendFRDlweDNsL1hTRXFsaFhpd009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkl2bzdzVVZCYlhxamxON0FjR2JqcVJOaGpsbC94b3VSVlY5Z3ZoREcxND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiajlFNHEvNGNVbWJtTitHbzFRamw2TWtqbGdRMmQ4VU5Xa0UxRjRpNGZYZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iis0MkllTjdUZG5XTUNxbXNmdGZ3YjNWSFlLaXorVTl5M2JLWU9XNjZ0NjZwclhtdjVNOGJLanFoZlV3UVBITmZvWDlDYks5VVpjUE03YjI3WW1PeGhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjUsImFkdlNlY3JldEtleSI6Iis3L1JOYzJnSlZmTG4zeU1zQ09FYWJDT1dQYm5WTjJhZDlPUzJ3V0dpQ0U9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODEwMTQ2ODE3OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJCMkUzNUQ2RDBFMEQwNEUzREExQUM0NEI4RjJEMDBFOCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ0MTQxNzU1fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ4MTAxNDY4MTc4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkQ2MjRFMTNCQTlGNUZCQzVGNjUzQTZFMDNCQzhCN0NFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDQxNDE3NTV9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik5kbjI5cDFDU04tSXZXZGxoOGp1cFEiLCJwaG9uZUlkIjoiMDY2MmNjYWQtMzg2Mi00MjU4LTg2NDMtN2NjMjlhODcyYzBjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9YdG9iRFhqdytEMDRNRHNJQXNCT25SU3NyQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2UkNTU3B4QUlQTGF2YnVpN0xUODZwZDlBdEU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTFJQQUNXQ0IiLCJtZSI6eyJpZCI6IjIzNDgxMDE0NjgxNzg6MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJHb2Rzb24gRmF2b3VyIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQV0lqYW9GRUtyNzFiOEdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJaZEFTWDl4NHJwQmhmUjJnMy9RRDBlMnJkYWNDZzd1NGlqSVBGQ3JvNmtnPSIsImFjY291bnRTaWduYXR1cmUiOiJ3NkRnZE5OdjFGUHd4QmNhVnZMWGhiOUFhcXQzQlFUTy9kVkwweGR3V1ZRNGFjUnc4Qi9nVHpFYWJ2eW02R2V6TlhUR1hmNXpkWGx6T250SHFBVXZEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQW1jekM1TmpTUm1UVnZuck5TK1IrMU5zcWhzZy9PWkJ5U2pId21rbXVuSU84SEdZTzNoWHpPQTMrN3k4ZENVQTg5WTNxVDZtYU9JTERmYng3K1NhaXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTAxNDY4MTc4OjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV1hRRWwvY2VLNlFZWDBkb04vMEE5SHRxM1duQW9PN3VJb3lEeFFxNk9wSSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0NDE0MTc1MywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFDZG0ifQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗧𝗢𝗫𝗫𝗜𝗖 𝗕𝗢𝗬",
  author: process.env.PACK_AUTHER || "ᴛᴏxxɪᴄ ᴍᴅ",
  packname: process.env.PACK_NAME || "𝗥𝗜𝗔𝗦 𝗠𝗗",
  botname: process.env.BOT_NAME || "𝗥𝗜𝗔𝗦 𝗚𝗥𝗘𝗠𝗢𝗥𝗬",
  ownername: process.env.OWNER_NAME || "ᴛᴏxxɪᴄ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-pBksWDImP6VuvvJTvqDsT3BlbkFJ2E8GhbpzjyRFkFaBI9Aj",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2fc4d785-535b-4113-8291-84c5d3d6d2c3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "toxicmd12",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RIAS").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
