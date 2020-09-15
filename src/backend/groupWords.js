module.exports = words => {
    return new Promise((resolver, reject) => {
        try {
            //Retorna as palavras
            const groupedWords = words.reduce((obj, word) => {
                if(obj[word]){
                    obj[word] = obj[word] + 1
                }else {
                    obj[word] = 1
                }
                return obj
            },{})
            const grouoedWordsArray = Object
                .keys(groupedWords) 
                .map(key => ({name:key, amount: groupedWords[key]} ))
                .sort((w1, w2) => w2.amount - w1.amount)

                resolver(grouoedWordsArray)
            } catch(e) {
                reject(e)
            }
        })
    }
