let database = require("quick.db");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;


exports.run = async (client, message) => {
  if (!message.member.hasPermission(`ADMINISTRATOR`))
    return message.channel.send(
      `❌ Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`
    );

  let log = message.mentions.channels.first();
  if (!log)
    return message.channel.send(
      `> **Bir Kanal Etiketlemen Gerekmekte \n > Örnek __${ayarlar.prefix}Whitelistlog #kanal__**`
    );

  database.set(`Whitelistlog.${message.guild.id}`, log.id);
  message.channel.send(
    ` **Whitelist kanalı başarıyla "${log}" olarak ayarlandı.**`
  );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["Whitelist-log"],
  perm: 3
};
exports.help = {
  name: "Whitelistlog"
};

exports.play = {
  kullanım: "Whitelistlog #kanal",
  açıklama: "Whitelist Logunu Ayarlarsınız",
  kategori: "Whitelist"
};
