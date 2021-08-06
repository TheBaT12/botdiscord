const Discord = require('discord.js');
const bot = new Discord.Client();
const token = require("./token.json")

bot.login(token.token);