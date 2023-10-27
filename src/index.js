require("dotenv").config();
const { Client, IntentsBitField, EmbedBuilder } = require("discord.js");

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

  // Add function
  if (interaction.commandName == "add") {
    const num1 = interaction.options.get("first-number").value;
    const num2 = interaction.options.get("second-number").value;

    interaction.reply(`The sum is ${num1 + num2}`);
  }

  // Embed function
  if (interaction.commandName == "embed") {
    const embed = new EmbedBuilder()
      .setTitle("Embed title")
      .setDescription("This is an embed title")
      .setColor(0xffffff)
      .addFields({
        name: "Field title",
        value: "Some random value",
        inline: true,
      }, {
        name: "Field title",
        value: "Some random value",
        inline: true,
      });

    interaction.reply({ embeds: [embed] });
  }

  console.log(interaction.commandName);
});

client.login(process.env.TOKEN);
