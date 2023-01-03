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
var spinnies = new Spinnies();
var nhen = require("akaneko");
var shrink = require("tinyurl");
var request = require("request");
var cheerio = require("cheerio");
var { JSDOM } = require("jsdom");
var express = require("express");
var { load } = require("cheerio");
var fetch = require("node-fetch");
var Spinnies = require("spinnies");
var FormData = require("form-data");
var FFmpeg = require("fluent-ffmpeg");
const { v4: uuidv4 } = require("uuid");
var malScraper = require("mal-scraper");
var bodyParser = require("body-parser");
var animation = require("anime-actions");
var { fromBuffer } = require("file-type");
var YouTube_Scrape = require("krytek-yts");
var { YTAudio, YTVideo } = require("../y2mate");
var YouTube_Downloader = require("../YouTube_Downloader");
var кяукєηz = express();
var router = кяукєηz.Router();
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
async function Tube(string, req, resp) {
  spinnies.add("youtube", {
    text: "🦋Info: Started Scanning For " + string,
  });
  var raw = await YouTube_Scrape(string);
  var ions = raw.videos.slice(0, 1);
  ions.forEach(async function (cobra) {
    YouTube_Downloader.audioScrapyard(cobra.url).then((data) => {
      spinnies.add("youtube", {
        text: "🦋Info: Completed Audio Engine Search",
      });
      YouTube_Downloader.videoScrapyard(cobra.url).then(async (_data) => {
        spinnies.add("youtube", {
          text: "🦋Info: Completed Video Engine Search",
        });
        _youtube = {
          status: "✓ 🦋Info: KryTek Api says success!",
          _id: uuidv4(),
          _youtube_search: [
            {
              YT_ID: cobra.videoId,
              TITLE: cobra.title,
              UPLOADED: cobra.ago,
              VIEWS: cobra.views,
              DURATION_FULL: cobra.duration.timestamp,
              DURATION_SECONDS: cobra.duration.seconds,
            },
            {
              AUTHOR_NAME: cobra.author.name,
              AUTHOR_CHANNEL: cobra.author.url,
            },
            {
              LINK: cobra.url,
              THUMB: cobra.thumbnail,
              DESCRIPTION: cobra.description,
            },
          ],
          _youtube_downloader: [
            {
              VIDEO_SHORT_LINK: await shrink.shorten(_data.videoLink),
              VIDEO_QUALITY: _data.videoQuality,
              VIDEO_SIZE:
                _data.videoSize.substring(0, _data.videoSize.indexOf(" ")) +
                " MB",
              VIDEO_RAW_LINK: _data.videoLink,
            },
            {
              AUDIO_SHORT_LINK: await shrink.shorten(data.audioLink),
              AUDIO_QUALITY: data.audioQuality,
              AUDIO_SIZE: data.audioSize,
              AUDIO_RAW_LINK: data.audioLink,
            },
          ],
        };
        resp.send(_youtube);
        console.log(_youtube);
        spinnies.succeed("youtube", {
          text: "🦋Info: KryTek Api says success!",
        });
      });
    });
  });
}
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву router ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
router.get("/", async (req, resp) => {
  if (req.query.name) return await Tube(req.query.name, req, resp);
  else if (req.query.link) return await Tube(req.query.link, req, resp);
  else
    return resp.send({
      message:
        "[ ERROR ]: Usage (/youtube?name=sone+name) or (/youtube?link=https://youtube.com)",
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
