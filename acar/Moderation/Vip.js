const { Client, Message, MessageEmbed, Guild } = require("discord.js");
module.exports = {
    Isim: "vip",
    Komut: ["vıp"],
    Kullanim: "vip @Carry/ID",
    Aciklama: "Etiketlenen kişiye VIP rolü verir.",
    Kategori: "Yönetim",
    TekSunucu: true,
  /**
   * @param {Client} client 
   */
  onLoad: function (client) {

  },
  /**
   * @param {Client} client 
   * @param {Message} message 
   * @param {Array<String>} args 
   * @param {Guild} guild
   */
  onRequest: async function (client, message, args, guild) {
  
    var rolid = roller.vipRolü
    let uye = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if(!roller.kurucuRolleri.some(oku => message.member.roles.cache.has(oku)) && !roller.yönetimRolleri.some(oku => message.member.roles.cache.has(oku)) && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.wsend(cevaplar.noyt); 
    if (!uye) return message.channel.wsend(`Hata: <@&858020671958024233> rolü verebilmem için lütfen bir üyeyi etiketle __Örn:__ \`${sistem.prefix}${module.exports.Isim} @Carry /ID\`!`).then(x => x.delete({timeout: 5000}));
      uye.roles.cache.has(rolid) ? uye.roles.remove(rolid) : uye.roles.add(rolid);
      if(!uye.roles.cache.has(rolid)) {
        message.channel.wsend(`${message.guild.emojiGöster(emojiler.Onay)} Başarıyla ${uye}, isimli kişiye <@&858020671958024233> rolü verildi.`).catch().then(x => x.delete({timeout: 7000}));
        message.react(emojiler.Onay)
      } else {
        message.channel.wsend(`${message.guild.emojiGöster(emojiler.Onay)} Başarıyla ${uye}, isimli kişinin <@&858020671958024233> rolü geri alındı.`).catch().then(x => x.delete({timeout: 7000}));
        message.react(emojiler.Onay)
      };
    }
};