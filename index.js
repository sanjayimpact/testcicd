const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello CI/CD ✅"));
app.get("/health", (req, res) => res.json({ ok: true }));
app.get("/new",(req,res)=>{
    res.send("New route");
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server listening on " + PORT));
