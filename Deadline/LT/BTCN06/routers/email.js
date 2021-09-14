const nodemailer = require("nodemailer");

exports.send = async function (to, subject, content) {
  const transporter = nodemailer.createTransport({
    pool: true,
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // use TLS
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const info = await transporter.sendMail({
    from: process.env.EMAIL,
    to,
    subject,
    text: content,
  });
  console.log(info);
};
