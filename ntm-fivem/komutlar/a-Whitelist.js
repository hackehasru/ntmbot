const Discord = require("discord.js");
const database = require("quick.db");

exports.run = async (client, message, args) => {
  let Whitelistyetkilisi = await database.fetch(
    `Whitelistyetkilisi.${message.guild.id}`
  );
  let Whitelistlog = await database.fetch(`Whitelistlog.${message.guild.id}`);
  let Whitelistrol = await database.fetch(`Whitelistrol.${message.guild.id}`);
  let Whitelistkisi = message.guild.member(
    message.mentions.users.first() || message.guild.members.cache.get(args[0])
  );
  if (!Whitelistrol)
    return message.channel.send(
      `❌ **__Whitelist rolü ayarlanmamış!__**`
    );
  if (!Whitelistlog)
    return message.channel.send(
      `❌ **__Whitelist log kanalı ayarlanmamış!__**`
    );
  if (!Whitelistyetkilisi)
    return message.channel.send(
      `❌ **__Whitelist yetkili rolü ayarlanmamış!__**`
    );
  let user = message.mentions.users.first();
  if (!message.member.roles.cache.has(Whitelistyetkilisi))
    return message.channel.send(
      `Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`
    );

  if (!message.mentions.users.first())
    return message.channel.send(`Bir Üye Etiketle!`);

  await Whitelistkisi.roles.add(Whitelistrol);
  const embed = new Discord.MessageEmbed()
    .setTitle(`✅ Whitelist Rolü Verildi!`)
    .addField(
      ` Adlı Kullanıcıya Başarıyla Rol Verildi!:`,
      `<@${message.author.id}>`,
      true
    )
    .addField(
      ` Whitelist Rolünü Veren Yetkili:`,
      `${user}`,
      true
    )

       .setColor("#00ff00")
  message.guild.channels.cache.get(Whitelistlog).send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["Whitelist"],
  perm: 2
};
exports.help = {
  name: "w"
};

exports.play = {
  kullanım: "Whitelist @rol",
  açıklama: "Whitelist Yetkili Rolünü Ayarlarsınız",
  kategori: "Whitelist"
};


