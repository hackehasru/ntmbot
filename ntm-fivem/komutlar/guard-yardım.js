const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (bot, msg, args) => {
  const embed = new Discord.MessageEmbed()
  .setAuthor(`Guard Yardım|${ayarlar.isim}`)
    .setColor("#00ff00")
    .addField(
      `**__kanal-koruma__**`,
      `⚙️ \`${prefix}kanal-koruma aç/kapat\` \n Discord sunucuzda kanal-koruma açar/kapatır.`,
      true
    )
    .addField(
      `**__küfür-engel__**`,
      `⚙️ \`${prefix}Küfür-engel aç/kapat\` \n Discord sunucumuzda küfür-engel açar/kapatır.`,
      true
    )
    .addField(
        `**__mod-log__**`,
        `⚙️ \`${prefix}mod-log [kanal id]\` \n Discord sunucumuzda Mod-Log açar/kapatır.`,
        true
      )
      .addField(
        `**__reklam-engel__**`,
        `⚙️ \`${prefix}reklam-engel aç/kapat\` \n Discord sunucumuzda reklam-engel açar/kapatır.`,
        true
      )
      .addField(
        `**__rol-koruma__**`,
        `⚙️ \`${prefix}rol-koruma aç/kapat\` \n Discord sunucumuzda rol-koruma açar/kapatır.`,
        true
      );
  msg.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["guard-help","guard-help"],
  permLevel: 3
};
exports.help = {
  name: "Guard-Yardım",
  description: "Guard Sistem Gösterir.",
  usage: "guard-yardım"
};