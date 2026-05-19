const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// 🌐 测试网页
app.get("/", (req, res) => {
  res.send("API 中转站已运行 🚀");
});


// 🔥 中转接口（核心）
app.post("/chat", async (req, res) => {
  try {
    const userInput = req.body.input;

    // 👉 这里先用示例 API（后面可以换 OpenAI）
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1");

    res.json({
      success: true,
      your_input: userInput,
      data: response.data
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on " + PORT);
});
