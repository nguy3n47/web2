const nodemailer = require("nodemailer");
require("dotenv").config();

exports.send = async function (to, subject, text, content) {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const info = await transporter.sendMail({
      from: `Nguyen Dev 👨‍💻 <${process.env.EMAIL}>`,
      to,
      subject,
      text,
      html: content,
    });
    console.log(info);
  } catch (error) {
    console.log(error);
  }
};
