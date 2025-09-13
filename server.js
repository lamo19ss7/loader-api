const express = require("express");
const app = express();

app.use(express.json());

const validKeys = ["ABC123", "XYZ789", "LOADER-2025"];

app.post("/verify", (req, res) => {
  const { key } = req.body;

  if (validKeys.includes(key)) {
    res.json({ valid: true, message: "✅ Key is valid!" });
  } else {
    res.json({ valid: false, message: "❌ Invalid key." });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
