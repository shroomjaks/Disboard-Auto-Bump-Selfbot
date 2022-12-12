const { Client } = require('discord.js-selfbot-v13')
const client = new Client()

require('dotenv').config()

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

async function bump() {
    const channel = await client.channels.fetch(process.env.bumpChannel)
    await channel.sendSlash('302050872383242240', 'bump')
    console.count('Bumped!')
}

(function loop() {
    // send bump message every 2-3 hours, to prevent detection.
    var randomNum = Math.round(Math.random() * (9000000 - 7200000 + 1)) + 7200000
    setTimeout(function () {
        bump()
        loop()
    }, randomNum)
}())

client.login(process.env.token)
