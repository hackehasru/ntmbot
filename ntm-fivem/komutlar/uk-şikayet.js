const Discord = require('discord.js')

    exports.run = async(client, message, args) => {
        let sikayetmesaj = args.slice(0).join('954304859308433458')
        
        if(!sikayetmesaj){
            const cmfhata = new Discord.MessageEmbed()
            .setDescription(`**�ikayetini Girmen Gerekiyor**`)
            .setColor('#ff0000')
            return message.channel.send(cmfhata)
        }

        // Zaman
        var zaman = new Date(); 
        var codemarefizaman = zaman.getDate() + "/"+ (zaman.getMonth()+1)  + "/" + zaman.getFullYear() + " - " + zaman.getHours() + ":" + zaman.getMinutes() + ":" + zaman.getSeconds();

        // Sunucunun �nvitesi ��in
        if(sikayetmesaj){
            message.channel.createInvite().then(inv => {
                const codemarefisikayet = new Discord.MessageEmbed()
                .setDescription(`
                    **${message.guild.name}** Adl� Sunucudan ${message.author} Ki�isi Bot Hakk�nda �ikayette Bulundu, Edilen �ikayet - **${sikayetmesaj}**\n
                    Sunucunun Davet Linki: ${inv.url}
                `)
                .setColor('RANDOM')
                .setTitle(`**�ikayet Var**`)
                .setFooter(codemarefizaman)
                client.channels.cache.get('LOG KANAL �D').send(codemarefisikayet)
            })

        }
    }


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['�ikayet','Report','��KAYET','REPORT','report'],
    permLevel: 0
}

exports.help = {
    name: '�ikayet'
}