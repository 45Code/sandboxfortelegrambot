const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '404579100:AAFWNmpYqZ0-73sRXikLIIEWdj2D4UPCz9o';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

bot.on('message', function (msg) {
    var id = msg.chat.id;
    bot.sendMessage(id, msg.text);
    // console.log(msg);
});