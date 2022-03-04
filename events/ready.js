const chalk = require('chalk');
const rpc = require("discordrpcgenerator");
const config = require(".././config.json")

module.exports = async(client) => {
  const small = await rpc.getRpcImage(config.applicationid, config.imagename)
  .then(large => {
    let presence = new rpc.Rpc()
    .setName(config.name)
    .setUrl('https://www.twitch.tv/ferdyry')
    .setType(config.type)
    .setApplicationId(config.applicationid)
    .setAssetsLargeImage(large.id)

.setAssetsLargeText(large.name)
    .setStartTimestamp(config.time || Date.now())
    console.log(presence.toDiscord())
    client.user.setStatus("online");
    client.user.setPresence(presence.toDiscord()).catch(console.error);
  })
  console.log(chalk.hex("#ff0000")("RPC Berhasil Di Aktifkan!"))
           }