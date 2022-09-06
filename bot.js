const Discord = require('discord.js-selfbot');
const client = new Discord.Client();
const config = require('./config.json');
 
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

function bump() {
  client.channels.cache.get(config.bumpChannel).send('!d bump');
  console.count('Bumped!');
};

(function loop() {
  var randomNum = Math.round(Math.random() * (9000000 - 7200000  + 1)) + 7200000;
  setTimeout(function() {
    bump();
    loop();  
  }, randomNum);
}());

client.login(config.token);
