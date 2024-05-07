const axios = require("axios");

class Report {
  constructor(url, submitter, justification) {
    this.url = url;
    this.form = "https://www.cloudflare.com/api/v2/abuse/phishing";

    this.submitter = submitter.name;
    this.submitter_email = submitter.email;
    this.submitter_company = submitter.company;
    this.justification = justification;
  }

  async _token() {
    const response = await axios.post(this.form);
    console.log("token", response.data.response.security_token);
    return response.data.response.security_token;
  }

  async report() {
    const token = await this._token();

    try {
      const response = await axios.post(
        this.form,
        new URLSearchParams({
          act: "abuse_phishing",
          email: this.submitter_email,
          email2: this.submitter_email,
          title: "",
          name: this.submitter,
          company: this.submitter_company,
          justification: this.justification,
          agree: "1",
          urls: this.url,
          security_token: token,
          host_notification: "send",
          owner_notification: "send",
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        },
      );
      console.log("report", response.data);
      return response.data;
    } catch (error) {
      console.error("Error:", error.response.data);
      throw error;
    }
  }
}

module.exports = Report;
