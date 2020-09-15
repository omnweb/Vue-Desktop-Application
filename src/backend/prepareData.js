module.exports = rows => {
    return new Promise((resolver, reject) => {
        try {
            //Retorna as palavras
            const words = rows
                .filter(filterValidRow) // Encadeando a chamada de funções
                .map(removePunctuation)
                .map(removeTags)
                .reduce(mergeRows)
                .split(' ') // Criando um novo array com as palavras
                .map(word => word.toLowerCase()) //Padronizando para letra minúscula
                .map(word => word.replace('"', ''))

                resolver(words)
            } catch(e) {
                reject(e)
            }
        })
    }
// FUnção para filtrar linhas em branco e linhas com detahes de reprodução e paginação. 
function filterValidRow(row) {
    const notNumber = !parseInt(row.trim()) //Se o parseInt der errado, não é um número
    const notEmpty = !!row.trim() //Expressão tira espaços em branco, e retorna falso caso esteja vazio
    const notInterval = !row.includes('-->') // Excluindo linhas que tem essa seta
    return notNumber && notEmpty && notInterval
}

const removePunctuation = row => row.replace(/[,?!.-]/g, '')  //Removendo ,?!.- do texto e susbstituindo por '' espaço em branco
const removeTags = row => row.replace(/(<[^>]+)>/ig,'').trim() // Regex para pegar uma tag
const mergeRows = (fullText, row) => `${fullText} ${row}`
