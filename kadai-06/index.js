const fs = require("fs")
const data = fs.readFileSync("./kadai-06/data.json").toString("utf-8")
try{
    const obj = JSON.parse(data)
    obj.updateAt = Date()
    obj.count = obj.count + 1
    console.log("正常に終了しました")
    fs.writeFileSync("./kadai-06/data.json", JSON.stringify(obj))
} catch(error){
    console.log("不正なJSONフォーマットです")
    process.exit(1) 
}
