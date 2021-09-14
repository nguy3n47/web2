const fetch = require("node-fetch");
const Parser = require("rss-parser");
const User = require("../models/user");
const News = require("../models/news");
const sendEmail = require("./email");

async function checkNews() {
  // getAllEmail
  let listEmail = [];
  await User.findAll({ attribute: ["email"] }).then((users) => {
    users.forEach((user) => {
      listEmail.push(user.email);
    });
  });

  //parser .ress
  const parser = new Parser();
  const feed = await parser.parseURL(
    "https://vnexpress.net/rss/tin-moi-nhat.rss"
  );

  //check content 'covid-19'
  const result = feed.items.filter((x) =>
    x.content.toLowerCase().includes("covid-19")
  );

  result.forEach(async (item) => {
    //check exists link
    const existsLink = await News.findOne({ where: { link: item.link } });
    if (!existsLink) {
      let obj = {
        title: item.title,
        link: item.link,
        content: item.content,
        description: item.contentSnippet,
        pubDate: item.pubDate,
      };
      //push data to database
      await News.create(obj);

      //send email news feed to all User
      setTimeout(() => {
        sendEmail.send(
          listEmail,
          "News - " + item.title,
          item.title,
          item.content
        );
      }, 5000);
    }
  });
}

//cron job
setInterval(function () {
  checkNews().catch(console.error);
}, 10000);
