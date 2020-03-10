require('dotenv').config()
const fetch = require('node-fetch')
const Telegram = require('node-telegram-bot-api')
const bot = new Telegram(process.env.TELEGRAM_TOKEN)

const main = async () => {
  
  const dataString = `You got new PR request. Please check your repository.`
  bot.sendMessage(process.env.TELEGRAM_CHAT_ID, dataString)
}

main()
