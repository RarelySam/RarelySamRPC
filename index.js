var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Developing",
assets : {
large_image : "robloxstudio",
large_text : "Roblox Studio"
},
buttons : [
    {label : "My youtube channel", url : "https://www.youtube.com/channel/UC1wILdEoOdZojXD63lgp3Hg"},
    {label : "My Scripting Portfolio", url : "https://www.roblox.com/games/6443638550/Sams-CV"}]
}
})
})
client.login({ clientId : "814542983571570718" }).catch(console.error);