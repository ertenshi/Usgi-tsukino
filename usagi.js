const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'hello!') {
    msg.reply('hellooo');
  }
});

client.login('MzcxODMxNzc0MzIzNjcxMDUy.DM9xbw.6DbXxc94SiToVzCb-iyFL-qoDrM');
