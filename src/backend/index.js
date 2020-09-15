// Criando um processo principal  
const { ipcMain } = require('electron')
const pathsToRows = require('./pathsToRows')
const prepareData = require('./prepareData')
const groupWords = require('./groupWords')


// Definindo evento que faz a comunicação com o front
ipcMain.on('process-subtitles', (event, paths) => {

     pathsToRows(paths)
         .then(rows => prepareData(rows))
         .then(words => groupWords(words))
         .then(groupedWords => event.reply('process-subtitles', groupedWords))
 })