import express from "express"
import path from "path"

const app = express()
const PORT = 3000

app.use(express.static("public"))

app.get("/", (req, res) => {
  res.sendFile(path.resolve("public/index.html"))
})

app.get("/valentine", (req, res) => {
  res.sendFile(path.resolve("public/valentine.html"))
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
