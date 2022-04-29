const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (bot, msg, args) => {
  const embed = new Discord.MessageEmbed()
    .setAuthor(`Sahip Yardım|${ayarlar.isim}`)
    .setColor("#00ff00")
    .addField(
      `**__restart__**`,
      `👑 \`${prefix}restart\` \n Yetkili kişiler kullanabilir`,
      true
    )
    .addField(
        `**__kayıt__**`,
        `👑 \`${prefix}kayıt\` NTM Yetkili ekibini çağırsın`,
        true
      )
      .addField(
        `**__destek__**`,
        `👑 \`${prefix}destek\`NTM Yetkili ekibini çağırsın`,
        true
      )

  msg.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["uk-help","uk-yardım"],
  permLevel: 3
};
exports.help = {
  name: "uk-Yardım",
  description: "uk Komutlarını Gösterir.",
  usage: "uk-yardım"
};