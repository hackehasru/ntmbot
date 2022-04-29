const Discord = require('discord.js')

    exports.run = async(client, message, args) => {
        let sikayetmesaj = args.slice(0).join('954304859308433458')
        
        if(!sikayetmesaj){
            const cmfhata = new Discord.MessageEmbed()
            .setDescription(`**Þikayetini Girmen Gerekiyor**`)
            .setColor('#ff0000')
            return message.channel.send(cmfhata)
        }

        // Zaman
        var zaman = new Date(); 
        var codemarefizaman = zaman.getDate() + "/"+ (zaman.getMonth()+1)  + "/" + zaman.getFullYear() + " - " + zaman.getHours() + ":" + zaman.getMinutes() + ":" + zaman.getSeconds();

        // Sunucunun Ýnvitesi Ýçin
        if(sikayetmesaj){
            message.channel.createInvite().then(inv => {
                const codemarefisikayet = new Discord.MessageEmbed()
                .setDescription(`
                    **${message.guild.name}** Adlý Sunucudan ${message.author} Kiþisi Bot Hakkýnda Þikayette Bulundu, Edilen Þikayet - **${sikayetmesaj}**\n
                    Sunucunun Davet Linki: ${inv.url}
                `)
                .setColor('RANDOM')
                .setTitle(`**Þikayet Var**`)
                .setFooter(codemarefizaman)
                client.channels.cache.get('LOG KANAL ÝD').send(codemarefisikayet)
            })

        }
    }


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['Þikayet','Report','ÞÝKAYET','REPORT','report'],
    permLevel: 0
}

exports.help = {
    name: 'þikayet'
}