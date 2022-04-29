let database = require("quick.db");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (client, message) => {
  if (!message.member.hasPermission(`ADMINISTRATOR`))
    return message.channel.send(
      `Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`
    );

  let rol = message.mentions.roles.first();
  if (!rol)
    return message.channel.send(
      `>💲 **Bir Rol Etiketlemen Gerekmekte \n > Örnek: __${ayarlar.prefix}Whitelistrol @rol__**`
    );

  database.set(`Whitelistrol.${message.guild.id}`, rol.id);
  message.channel.send(
    `✔️ **Whitelist rolü başarıyla "${rol}" olarak ayarlandı.**`
  );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["Whitelist-rol"],
  perm: 3
};
exports.help = {
  name: "Whitelistrol"
};

exports.play = {
  kullanım: "Whitelistrol @rol",
  açıklama: "Whitelist Rolünü Ayarlarsınız",
  kategori: "Whitelist"
};
