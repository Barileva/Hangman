
import { writeFileSync,readFileSync,appendFileSync, existsSync } from "fs";
export default class file{
    constructor(){
        const newFile = "HistoryOfGame.csv";
        if(!existsSync(newFile)){
            writeFileSync(newFile,"","utf-8" )
        }

    }
    createFile(userName,userScore){
        const existingData = readFileSync("HistoryOfGame.csv","utf-8")
        const newData = `username: ${userName} - user score :${userScore.toString()} play time: ${new Date()} \n`
        console.log(userName)
        console.log(userScore)
        const lastData = existingData + newData;
        writeFileSync('HistoryOfGame.csv',lastData,'utf-8' )

    }
}


