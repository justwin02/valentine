import express from "express"
import path from "path"

const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/index.html"));
});

app.get("/our-story", (req, res) => {
    res.sendFile(path.resolve("public/ourstory.html"));
});

app.get("/our-story", (req, res) => {
    res.sendFile(path.resolve("public/our-story.html"))
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})
