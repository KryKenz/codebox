("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
// ╔⧉༻ [ KryKenz Multi Module Api ]
// ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
// ║
// ║ This API was made for fun purpose and to make group management easier.
// ║ Also, Forks won't be entertained.
// ║ If you fork this repo and edit plugins, it's your concern for further updates.
// ║ Forking Repo is fine. But if you edit something we will not provide any help.
// ║ In short, Fork At Your Own Risk.
// ╚════════════╝
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
var fs = require("fs");
var qs = require("qs");
var got = require("got");
var axios = require("axios");
var nhen = require("akaneko");
var shrink = require("tinyurl");
var request = require("request");
var cheerio = require("cheerio");
var { JSDOM } = require("jsdom");
var express = require("express");
var { load } = require("cheerio");
var fetch = require("node-fetch");
var FormData = require("form-data");
var FFmpeg = require("fluent-ffmpeg");
const { v4: uuidv4 } = require("uuid");
var malScraper = require("mal-scraper");
var bodyParser = require("body-parser");
var animation = require("anime-actions");
var { fromBuffer } = require("file-type");
var YouTube_Scrape = require("krytek-yts");
var кяукєηz = express();
var router = кяукєηz.Router();
var Spinnies = require("spinnies");
var spinnies = new Spinnies();
var { YTAudio, YTVideo } = require("../src/y2mate");
var YouTube_Downloader = require("../src/YouTube_Downloader");
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
router.get("/", (req, resp) => {
  return resp.send("[ YOUTUBE-DOWNLOADER ]: Usage /ytdownload/song+name");
});

router.get("/:ytdownload", async (req, resp) => {
  var raw = await YouTube_Scrape(
    req.params.ytdownload.split(" ").join("+").toLowerCase()
  );
  var ions = raw.videos.slice(0, 1);
  ions.forEach(async function (cobra) {
    postmanaud = await YTAudio(cobra.url, "256");
    postmanvid = await YTVideo(cobra.url, "480");
    resp.send({
      _id: uuidv4(),
      ID: cobra.videoId,
      TITLE: cobra.title,
      AUTHOR_NAME: cobra.author.name,
      AUTHOR_CHANNEL: cobra.author.url,
      LINK: cobra.url,
      DESCRIPTION: cobra.description,
      UPLOADED: cobra.ago,
      VIEWS: cobra.views,
      TIMESTAMP: cobra.timestamp,
      THUMB: cobra.thumbnail,
      DURATION_SECONDS: cobra.duration.seconds,
      DURATION_STRING: cobra.duration.timestamp,
      TINY_DIRECT_AUDIO: await shrink(postmanaud[0].link),
      TINY_DIRECT_VIDEO: await shrink(postmanvid[0].link),
      DIRECT_AUDIO: postmanaud[0].link,
      DIRECT_VIDEO: postmanvid[0].link,
    });
  });
});

module.exports = router;
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву router ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
// ╔⧉༻ [ KryKenz Multi Module Api ]
// ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
// ║
// ║ This API was made for fun purpose and to make group management easier.
// ║ Also, Forks won't be entertained.
// ║ If you fork this repo and edit plugins, it's your concern for further updates.
// ║ Forking Repo is fine. But if you edit something we will not provide any help.
// ║ In short, Fork At Your Own Risk.
// ╚════════════╝
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву router ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
