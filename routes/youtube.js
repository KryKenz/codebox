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
let fs = require("fs");
let qs = require("qs");
let got = require("got");
let axios = require("axios");
let nhen = require("akaneko");
let request = require("request");
let cheerio = require("cheerio");
let { JSDOM } = require("jsdom");
let { load } = require("cheerio");
let promise = require("bluebird");
let fetch = require("node-fetch");
let FormData = require("form-data");
let FFmpeg = require("fluent-ffmpeg");
let { v4: uuidv4 } = require("uuid");
let malScraper = require("mal-scraper");
let animation = require("anime-actions");
let { fromBuffer } = require("file-type");
let YouTube_Scrape = require("yt-search");
let cloudscraper = require("cloudscraper");
let { YTAudio, YTVideo } = require("../src/y2mate");
let YouTube_Downloader = require("../src/YouTube_Downloader");
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
let Spinnies = require("spinnies");
let api = require("express");
let root = api.Router();
let spinnies = new Spinnies();
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
root.get("/", async (req, resp) => {
  try {
    if (req.query.q) {
      raw = await YouTube_Scrape(req.query.q);
      ions = raw.videos.slice(0, 1);
      ions.forEach(async function (cobra) {
        promise
          .resolve(
            axios({
              method: "post",
              url: "https://www.y2mate.com/mates/en68/analyze/ajax",
              headers: {
                accept: "*/*",
                "accept-language": "en-US,en;q=0.9,vi;q=0.8",
                "content-type": "multipart/form-data",
                "user-agent":
                  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
              },
              data: {
                url: cobra.url,
                q_auto: 0,
                ajax: 2,
              },
            })
          )
          .then(async (response) => {
            let $ = load(response.data.result);
            let a_imageSrc = $('div[class="thumbnail cover"]')
              .find("a > img")
              .attr("src");
            let a_title = $('div[class="caption text-left"]').find("b").text();
            let a_size = $("div")
              .find("#mp3 > table > tbody > tr > td:nth-child(2)")
              .text();
            let a_type = $("div")
              .find("#mp3 > table > tbody > tr > td:nth-child(3) > a")
              .attr("data-ftype");
            let a_quality = $("div")
              .find("#mp3 > table > tbody > tr > td:nth-child(3) > a")
              .attr("data-fquality");
            let a_id = /let k__id = "(.*?)"/.exec(response.data.result)[1];

            promise
              .resolve(
                await axios({
                  method: "post",
                  url: "https://www.y2mate.com/mates/en68/convert",
                  headers: {
                    accept: "*/*",
                    "accept-language": "en-US,en;q=0.9,vi;q=0.8",
                    "content-type": "multipart/form-data",
                    "user-agent":
                      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
                  },
                  data: {
                    type: "youtube",
                    v_id: await regex(cobra.url),
                    _id: a_id,
                    ajax: "1",
                    token: "",
                    ftype: a_type,
                    fquality: a_quality,
                  },
                }).then(function (body) {
                  let $ = load(body.data.result);
                  let v_urlDown = $(
                    'div[class="form-group has-success has-feedback"]'
                  )
                    .find("a")
                    .attr("href");
                  let urlDown = v_urlDown;
                  let _Final_Found = [
                    {
                      _status: "🎊success",
                      _id: uuidv4(),
                      TIMESTAMP: Date.now(),
                      TOPIC: "[YouTube Meta Searcher]: server-y2mate",
                      QUERY: req.query.q,
                      _youtube_search: [
                        {
                          YT_ID: cobra.videoId,
                          TITLE: cobra.title,
                          UPLOADED: cobra.ago,
                          VIEWS: cobra.views,
                          DURATION_FULL: cobra.duration.timestamp,
                          DURATION_SECONDS: cobra.duration.seconds,
                          AUTHOR_NAME: cobra.author.name,
                          AUTHOR_CHANNEL: cobra.author.url,
                          LINK: cobra.url,
                          THUMB: cobra.thumbnail,
                          HQ_IMAGE: cobra.image,
                          DESCRIPTION: cobra.description,
                        },
                      ],
                      _youtube_downloader: [
                        {
                          dl_meta: {
                            META_ID: id,
                          },
                          dl_audio: {
                            SIZE: a_size.replace(/ .*/, "") + "mb",
                            TYPE: a_type,
                            QUALITY: a_quality + "kbps",
                            DOWNLOAD: a_urlDown,
                          },
                          dl_video: {
                            SIZE: size.replace(/ .*/, "") + "mb",
                            TYPE: type,
                            QUALITY: quality + "p",
                            DOWNLOAD: urlDown,
                          },
                        },
                      ],
                    },
                  ];
                  logger.info(_Final_Found);
                  res.send(_Final_Found);
                })
              )
              .catch((err) => {
                console.error(err);
                return false;
              });
          })
          .catch((err) => {
            console.error(err);
            return false;
          });
      });
    } else {
      return resp.send({
        message:
          "[ ERROR ]: Usage (/dldr?q=song name) or (/dldr?q=https://dldr.com)",
      });
    }
  } catch (error) {
    console.log(error);
    resp.redirect("/404");
  }
});
module.exports = root;
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву root ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
// ╔⧉༻ [ KryKenz Multi Module Api ]
// ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
// ║
// ║ This API was made for fun purpose and to make group management easier.
// ║ Also, Forks won't be entertained.
// ║ If you fork this repo and edit plugins, it's your concern for further updates.
// ║ Forking Repo is fine. But if you edit something we will not provide any help.
// ║ In short, Fork At Your Own Risk.
// ╚════════════╝
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву root ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
