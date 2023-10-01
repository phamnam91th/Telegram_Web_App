const { Telegraf } = require("telegraf");
const TOKEN = "6383083746:AAH47MMcL2GbLXSWWxFzNzsu5KxTr2X2XTk";
const bot = new Telegraf(TOKEN);

const web_link = "https://celebrated-torte-184681.netlify.app/";

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
