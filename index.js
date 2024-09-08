const express = require("express");
const cors = require("cors");
const axios = require("axios")

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

    try{
        const r = await axios.put("https://api.chatengine.io/users/", {username, secret: username, first_name: username}, {headers: {"private-key":"f5eaf7b4-aeed-4cc1-9b1f-8a04c3c514a0"}})
        
        return res.status(r.status).json(r.data)
    }catch(err){
        console.log(err);

        return res.status(err.response.status).json(err.response.data)
    }

});

app.listen(3001);