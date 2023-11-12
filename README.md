# Discord Auto Bump Selfbot
[<img src="https://img.shields.io/github/license/appu1232/Discord-Selfbot.svg">](https://github.com/MonkoTubeYT/Disboard-Auto-Bump-Selfbot/blob/main/LICENSE)

A selfbot that automatically bumps on Disboard.
# WARNING
Selfbots are against Discord's Terms of Service.
Which can be found at https://discord.com/guidelines and https://discord.com/terms

This code is strictly educational.

I am not liable for any accounts that get moderated by Discord due to the use of this selfbot.

# Setup
Open **.env**:
```
TOKEN=
BUMP_CHANNEL=
```
Paste your alt-account token to the end of **TOKEN=**

Paste the ID of the channel that you want the bot to send **/bump** in to the end of **BUMP_CHANNEL=**

# How to get user token
1. Open Discord
2. Press `CTRL+SHIFT+I` to open the Developer Console
3. Copy and paste the code below into the console to automatically copy your user token to the clipboard.
```js
window.webpackChunkdiscord_app.push([
  [Math.random()],
  {},
  req => {
    for (const m of Object.keys(req.c)
      .map(x => req.c[x].exports)
      .filter(x => x)) {
      if (m.default && m.default.getToken !== undefined) {
        return copy(m.default.getToken());
      }
      if (m.getToken !== undefined) {
        return copy(m.getToken());
      }
    }
  },
]);
console.log('%cWorked!', 'font-size: 50px');
console.log(`%cYou now have your token in the clipboard!`, 'font-size: 16px');
```
