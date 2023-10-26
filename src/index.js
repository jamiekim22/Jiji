require("dotenv").config();
const { Client, IntentsBitField } = require("discord.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("ready", (c) => {
  console.log(`${c.user.tag} is online.`);
});

// Ping Pong
// Responds to user with pong when ping is typed
client.on("messageCreate", (message) => {
  if (message.author.bot) {
    return;
  }

  if (message.content === "ping") {
    message.reply("pong");
  }
});

client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName == 'hey') {
    interaction.reply("hey!")
  }
  console.log(interaction.commandName);
});

client.login(process.env.TOKEN);
