import fs from 'fs'
import dataVar from './data.js'

dataVar.forEach((item) => {
    console.log(item)

    fs.writeFile('./createdText' + '.text' , item.id + '-'+ item.title + '\n'+ + '\n' + item.description + '\n',{flag: 'a+'},(err) => {
        if(err) console.error(err)
    })
})