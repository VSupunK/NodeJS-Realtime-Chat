const express = require("express");
const cors = require("cors");
const { axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put(
        'https://api.chatengine.io/users/',
        {username: username, secret: username, first_name: username},
        {headers: {"private-key": "e278f163-4826-498d-93c0-7eea677de9d9"} }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(3001);

/*
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      'https://api.chatengine.io/users/',
      { username: username, secret, secret: username, first_name: username },
      { headers: { "private-key": "e278f163-4826-498d-93c0-7eea677de9d9 "}}
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    if (e.response) {
      // If the error has a response property, meaning it's an error response from the server
      return res.status(e.response.status).json(e.response.data);
    } else {
      // If there's no response property, handle it as a general error
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
*/
