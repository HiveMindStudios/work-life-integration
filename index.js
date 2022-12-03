const express = require("express")
const app = express()
app.use(express.json())
app.post("/data",(req, res)=>{
    res.send({
        "data":[
            {
                "from":"ILikeTurles",
                "content":"Stop using plastic straws",
                "timestamp": 1670064320,
                "platform": "Slack"
            },
            {
                "from":"squareCircle",
                "content":"Wait what?",
                "timestamp": 1670064355,
                "platform": "Discord"
            },
            {
                "from":"flaskIsBroken",
                "content":"Why would you use it?",
                "timestamp": 1670064398,
                "platform": "Telegram"
            },
            {
                "from":"sampleName",
                "content":"So original",
                "timestamp": 1670064334,
                "platform": "Slack"
            },
            {
                "from":"hex2dec",
                "content":"0xDEADBEEF",
                "timestamp": 1670064453,
                "platform": "Slack"
            },
            {
                "from":"hermes",
                "content":"I am speed",
                "timestamp": 1670064380,
                "platform": "Discord"
            },
            {
                "from":"%random%",
                "content":"I lost my mind",
                "timestamp": 1670064320,
                "platform": "Discord"
            },
            {
                "from":"noone",
                "content":"Why am I still here",
                "timestamp": 1670064520,
                "platform": "Telegram"
            },
            {
                "from":"backupsForTheWin",
                "content":"You might need them",
                "timestamp": 1670064720,
                "platform": "Telegram"
            }
        ]
    })
})
app.listen(3000)