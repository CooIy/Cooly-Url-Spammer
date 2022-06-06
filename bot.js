const Discord = require("discord.js")
const client = new Discord.Client() 
const request = require('request')
const config = require("./config.json")

//----Cooly#0001----\\


    client.on("ready", () => {
        client.user.setPresence({ activity:{ name: config.durum }, status: "dnd" });
         const guild = client.guilds.cache.get(config.sunucu)
           console.log(`${guild.name} sunucusu için "${config.vanity}" urlsi spamlanmaya başladı.`)

    setInterval(() => {           //----Cooly#0001----\\          
        let log = guild.channels.cache.get(config.urllog)//EĞER ÇOK MESAJ ATARSA VİRGÜLÜ VE SAYIYI SİLİN
        log.send(`**${guild.name}** Sunucusuna **${config.vanity}** urlsini almaya çalışıyorum...`)},3000)

    setInterval(async () => {     //----Cooly#0001----\\
            if(guild.vanityURLCode == config.vanity) {
            let kanal = await guild.channels.cache.get(config.urllog)
            await kanal.send(`**${config.vanity}** Url'si başarıyla servis edildi. ||@everyone||`)


    console.log(`${guild.name} = "${guild.vanityURLCode}" Durum: ✔`) 
        console.log(`Bottan Çıkış Yapıldı.`)
            process.exit()
                } else {
                    cooly(config.vanity, config.guild, config.token)
                         }}, 1*500)})

    async function cooly(vanity, token) {
        const spammer = {
            url: `https://discord.com/api/v8/guilds/${config.sunucu}/vanity-url`,
                body: {
                    code: `${vanity}`},
    json: true,
        method: 'PATCH',
            headers: {
                "Authorization": `Bot ${config.token}`
                    }
                        };

    request(spammer, (err, res, body) => {
        if (err) {
            return console.log(err)}})}

//----Cooly#0001----\\
client.login(config.token).catch(err => { console.log("Token Hatalı !")})



