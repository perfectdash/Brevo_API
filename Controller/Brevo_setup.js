var SibApiV3Sdk = require("sib-api-v3-sdk");
var defaultClient = SibApiV3Sdk.ApiClient.instance;
require('../.env').config;
// Configure API key authorization: api-key

var apiKey = defaultClient.authentications[api_key];
apiKey.apiKey = process.env.YOUR_API_KEY;


var apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
var sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail(); // SendSmtpEmail | Values to send a transactional email

sendSmtpEmail = {
  to: [
    {
      email: "sandeep.chaubey.che21@itbhu.ac.in",
      name: "Perfect_dash",
    },
  ],
  templateId: 1,
  params: {
    name: "Sandeep",
    surname: "Chaubey",
  },
  headers: {
    "X-Mailin-custom":
      "custom_header_1:custom_value_1|custom_header_2:custom_value_2",
  },
};

const Mail = async(req, res) => {
    await apiInstance.sendTransacEmail(sendSmtpEmail).then(
    function (data) {
      console.log("API called successfully. Returned data: " + data);
    },
    function (error) {
      console.error("Sorry Failed to Send your Mail");
    }
  );

  res.send("successfully done with your email");
};

module.exports = Mail;
