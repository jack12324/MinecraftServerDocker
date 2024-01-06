const fs = require('fs')

const HOUR = process.env.RESTART_HOUR
const MINUTE = process.env.RESTART_MINUTE

const subtractTime = (hour, minute, minus) => {

    if(minute-minus < 0){
        if(hour === 0){
            return {hour: 23, minute: 60 + (minute-minus)}
        }
        return {hour: hour-1, minute: 60 + (minute-minus)}
    }
    return{hour, minute: minute-minus}
}

const adjustRestartTime = (commands, hour, minute) => {
    const {hour: hour30, minute: minute30} = subtractTime(hour, minute, 30)
    const {hour: hour10, minute: minute10} = subtractTime(hour, minute, 10)
    const {hour: hour5, minute: minute5} = subtractTime(hour, minute, 5)
    const {hour: hour1, minute: minute1} = subtractTime(hour, minute, 1)

    commands.Restart.hours=hour
    commands.Restart.minutes=minute

    commands["Restart final warning"].hours= hour1
    commands["Restart final warning"].minutes= minute1

    commands["Restart warn 5 minutes"].hours=hour5
    commands["Restart warn 5 minutes"].minutes=minute5

    commands["Restart warn 10 minutes"].hours=hour10
    commands["Restart warn 10 minutes"].minutes=minute10

    commands["Restart warn 30 minutes"].hours=hour30
    commands["Restart warn 30 minutes"].minutes=minute30

    return commands
}
const main = async () => {

    await new Promise(r => setTimeout(r, 1000));

    const files = fs.readdirSync('db')
    const [folderName] = files.filter(folder => folder.includes('server_'))
    const path = `./db/${folderName}/widgets.json`

    let widgets
    try{
        widgets = require(path)
    } catch (e){
       console.log(`${path} not found, inserting default`)
        widgets=require("./default-widgets.json")
    }
    const listNames = widgets.list.map(item => item.id)
    const timedCommandsIndex = listNames.indexOf('rwa-timedcommands')

    widgets.list[timedCommandsIndex].storage.commands=adjustRestartTime(widgets.list[timedCommandsIndex].storage.commands, HOUR, MINUTE)

    fs.writeFile(path, JSON.stringify(widgets), (err) =>{ if(err){console.log(err)}})
}

main()
