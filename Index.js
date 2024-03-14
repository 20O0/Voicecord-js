const express = require("express");
const app = express();
app.listen(() => console.log("Server Started"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});

const { Client } = require('discord.js-selfbot-v13');
const client = new Client();
client.on('ready', async () => {
  console.log(`${client.user.username} is ready!                   Lucifer`);
})
const { joinVoiceChannel } = require('@discordjs/voice');
client.on('ready', () => {
//Lucifer
client.user.setActivity("Bloodie Up", { type: "STREAMING", url: "https://www.twitch.tv/Lucifer" })
  setInterval(async () => {
    client.channels.fetch("") //id vc dane
      .then((channel) => {
        const VoiceConnection = joinVoiceChannel({
          channelId: channel.id,
          guildId: channel.guild.id,
          adapterCreator: channel.guild.voiceAdapterCreator
        });
      }).catch((error) => { return; });
  }, 1000)
});
client.login(process.env.token);
