const {Client} = require('discord.js');
const Discord = require('discord.js');
const client = global.client = new Client({ fetchAllMembers: true });
const acarMessage = require('./acar/Reference/acarMessage');
const acarReply = require("./acar/Reference/acarReply");
const acar = require('./acar/Reference/acar');

// System Required
acar.sistemGereksinimleri();
acarMessage.KufurReklamEngel();
acarMessage.fotoSpotifyKoru();
acarMessage.mesajLog();
acarReply.replyFetch();
acar.komutYükle();
acar.On();

// acar(Util's)
require("./acar/Reference/acarUtils");

// acar(Moderation)
acar.Moderation();

// acar(Sistemler)
acar.sistemÇalıştır("coin");
acar.sistemÇalıştır("terfi");

client.on("userUpdate", async function(eskiii, yeniii) {
    const guildID = "858019641804849172"
    const roleID = "858020671417483264"
    const tag = "△"
    const log2 = '858039342735032320'
    const unregister = '858020700455698453'
  //⁶⁴
    const guildd22 = client.guilds.cache.get(guildID)
    const role = guildd22.roles.cache.find(roleInfo => roleInfo.id === roleID)
    const member = guildd22.members.cache.get(yeniii.id)
    const embed = new Discord.MessageEmbed().setAuthor(member.displayName, member.user.avatarURL({ dynamic: true })).setColor('RANDOM').setTimestamp().setFooter('△ Vientra Developed By CARRY');
    if (yeniii.username !== eskiii.username) {
        if (eskiii.username.includes(tag) && !yeniii.username.includes(tag)) {
            member.roles.remove(roleID)
            member.roles.remove(roleID)
            
            
            client.channels.cache.get(log2).send(embed.setDescription(`${yeniii} İsminden ``△`` Tagımızı Çıkartarak Ailemizden Ayrıldı ve Taglı <@&858020671417483264> Rolü Alındı.`))
        } else if (!eskiii.username.includes(tag) && yeniii.username.includes(tag)) {
            member.roles.add(roleID)
            member.roles.add(roleID)
            client.channels.cache.get(log2).send(embed.setDescription(` ${yeniii} İsmine ``△`` Tagımızı Alarak Ailemize Katıldı Ve Taglı <@&858020671417483264> Rolü Verildi.`))
        }
    }
  
  
  })