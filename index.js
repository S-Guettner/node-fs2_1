import fs from 'fs'
import dataVar from './data.js'

dataVar.forEach((item) => {
    console.log(item)
    if(item){
        fs.writeFileSync('./createdText' + '.text' , item?.id + '-'+ item?.title + '\n' + item?.description + '\n \n',{flag: 'a+'},(err) => {
            if(err) console.error(err)
        })

    }
})