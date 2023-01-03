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
  return resp.send("[ ANIME ]: usage /anime/anime+name");
});

router.get("/:animation", async (req, resp) => {
  try {
    raw = req.params.animation.split(" ").join("+").toLowerCase();
    console.log("[ ANIME ]: " + raw);
    malScraper.getInfoFromName(raw).then((cobra) => {
      var Found = [
        {
          _id: uuidv4(),
          MAL_ID: cobra.id,
          TITLE: cobra.title,
          EN_TITLE: cobra.englishTitle,
          JP_TITLE: cobra.japaneseTitle,
          IMAGE: cobra.picture,
          PREMIERED: cobra.premiered,
          WEBPAGE: cobra.url,
          BROADCAST: cobra.broadcast,
          GENRES: cobra.genres,
          TYPE: cobra.type,
          EPISODES: cobra.episodes,
          RATING: cobra.rating,
          AIRED: cobra.aired,
          SCORE: cobra.score,
          FAVORITES: cobra.favorites,
          RANK: cobra.ranked,
          DURATION: cobra.duration,
          STUDIOS: cobra.studios,
          PRODUCERS: cobra.producers,
          POPULARITY: cobra.popularity,
          TOTAL_MEMBERS: cobra.members,
          SCORE_STATUS: cobra.scoreStats,
          SOURCE: cobra.source,
          SYNONYMS: cobra.synonyms,
          STATUS: cobra.status,
          SYNOPSIS: cobra.synopsis,
          CHARACTERS: cobra.charaters,
          STAFF: cobra.staff,
        },
      ];
      resp.send(Found);
      console.log(Found);
    });
  } catch (error) {
    return resp.send(error);
  }
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
