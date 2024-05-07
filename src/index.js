const express = require("express");
const path = require("path");
const Report = require("./cloudflare");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

const CF = {
  submitter: {
    name: process.env.CFAPI_SUBMITTER,
    email: process.env.CFAPI_SUBMITTER_EMAIL,
    company: process.env.CFAPI_SUBMITTER_COMPANY,
  },
  password: process.env.CFAPI_PASSWORD,
};

app.post("/report", async (req, res) => {
  try {
    if (req.body.password !== CF.password) {
      return res.send(":(");
    }

    const { url, justification } = req.body;
    if (url.length <= 5 || justification.length <= 5) {
      return res.status(400).send("Invalid input");
    }

    const R = new Report(url, CF.submitter, justification);
    const response = await R.report();
    console.log("steamphishingreporting", url);
    console.log(response);

    res.json({ message: "Report submitted successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Very basic web UI for making the request to the API
// from a "human-friendly" (?) interface that you can
// self-host or whatever, for your friends and family.
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "web/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
