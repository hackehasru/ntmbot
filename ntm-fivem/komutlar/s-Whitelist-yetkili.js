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
      `❌ **Bir Rol Etiketlemen Gerekmekte \n > Örnek: __${ayarlar.prefix}Whitelist-yetkili-rol @rol__**`
    );

  database.set(`Whitelistyetkilisi.${message.guild.id}`, rol.id);
  message.channel.send(
    `✔️ **Whitelist yetkilisi başarıyla "${rol}" olarak ayarlandı.**`
  );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["Whitelist-y-rol"],
  perm: 3
};
exports.help = {
  name: "Whitelist-yetkili"
};

exports.play = {
  kullanım: "Whitelist-y-rol @rol",
  açıklama: "Whitelist Yetkili Rolünü Ayarlarsınız",
  kategori: "Whitelist"
};
