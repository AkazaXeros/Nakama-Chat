const express = require('express');
const cors = require('cors');
const { default: axios } = require('axios');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors({ origin: true }));

app.post('/authenticate', async (req, res) => {
  const { username, password } = req.body;

  try {
    const r = await axios.put(
      process.env.CHAT_ENGINE_USER_URL,
      { username: username, secret: password, first_name: username },
      { headers: { 'private-key': process.env.CHAT_ENGINE_PK } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

console.log(`Server is listening on: http://localhost:${process.env.PORT}`);

app.listen(process.env.PORT);
