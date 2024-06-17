require('dotenv').config()
const { Client } = require('discord.js-selfbot-v13')
const client = new Client()

client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`)

    const channelIds = process.env.BUMP_CHANNELS.split(',')

    async function bump(channelId) {
        const channel = await client.channels.fetch(channelId)
        await channel.sendSlash('302050872383242240', 'bump')
        console.log(`Bumped in channel ${channelId}!`)
    }

    function loop() {
        var randomNum = Math.round(Math.random() * (9000000 - 7200000 + 1)) + 7200000
        setTimeout(async function () {
            for (const channelId of channelIds) {
                await bump(channelId)
            }
            loop()
        }, randomNum)
    }
    
    for (const channelId of channelIds) {
        bump(channelId)
    }
    loop()
})

client.login(process.env.TOKEN)
