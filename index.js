const Telegraf = require("telegraf")
const config = require("./config.json")
const TOKEN = config.token
const bot = new Telegraf.Telegraf(TOKEN)
bot.start((ctx) => ctx.reply("Welcome to Meo meo assistant"))
bot.help((ctx) => ctx.reply("How can i help you?"))
bot.on("sticker", (ctx) => {ctx.reply("🐶")})
bot.on("message", (ctx) => {
    const mess = ctx.update.message.text
    if (mess.match(/hello/)) {
        ctx.reply("Xin chao ban toi la nguoi Viet Nam")
    } else if (mess.match(/love/)) {
        ctx.reply("Toi cung yeu ban")
    } else {
        ctx.reply("Sorry I dont understand")
    }
})
bot.launch()