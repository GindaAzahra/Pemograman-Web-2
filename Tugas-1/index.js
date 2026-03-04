import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

// Route "/"
app.get("/", (req, res) => {
  res.send(`
    <h1>Home Page</h1>
    <p>Selamat datang di Web Programming 2</p>
  `);
});

// Route "/AboutMe"
app.get("/AboutMe", (req, res) => {
  res.send(`
    <h1>About Me</h1>
    <p>Nama: Ginda Azahra</p>
    <p>Jurusan: Teknik Informatika</p>
  `);
});

// Endpoint user
app.get("/user/Ginda", (req, res) => {
  res.status(200).json({ message: "GET user Ginda" });
});

app.post("/user/Ginda", (req, res) => {
  res.status(200).json({ message: "POST user Ginda" });
});

app.put("/user/Ginda", (req, res) => {
  res.status(200).json({ message: "PUT user Ginda" });
});

app.patch("/user/Ginda", (req, res) => {
  res.status(200).json({ message: "PATCH user Ginda" });
});

app.delete("/user/Ginda", (req, res) => {
  res.status(200).json({ message: "DELETE user Ginda" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});