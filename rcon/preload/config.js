let config = {}
const port = process.env.RCON_WEB_PORT
if(port){
  console.log(`Overriding default rcon port 4326 with ${port}`)
  config.port = parseInt(port)
}
module.exports=config

