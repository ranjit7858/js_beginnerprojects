function helpFn(){
    console.log(`
    List of Command :
    node main.js help
    node main.js organize "dirPath"
    node main.js tree "dirPath"
    `)
}
module.exports = {
    helpkey: helpFn
}