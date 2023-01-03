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
var { load } = require("cheerio");
var Spinnies = require("spinnies");
var fetch = require("node-fetch");
var FormData = require("form-data");
var FFmpeg = require("fluent-ffmpeg");
var malScraper = require("mal-scraper");
var bodyParser = require("body-parser");
var animation = require("anime-actions");
var { fromBuffer } = require("file-type");
var YouTube_Scrape = require("krytek-yts");
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");

async function regex(url) {
  try {
    var regex =
      /https:\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?[\w\?=]*)?/;
    var result = url.match(YouTube_Regex);
    return result[1];
  } catch {
    return false;
  }
}
async function audioScrapyard(url) {
  return new Promise(async (resolve, reject) => {
    axios({
      method: "post",
      url: "https://www.y2mate.com/mates/en68/analyze/ajax",
      headers: {
        accept: "*/*",
        "accept-language": "en-US,en;q=0.9,vi;q=0.8",
        "content-type": "multipart/form-data",
      },
      data: {
        url: url,
        q_auto: 0,
        ajax: 2,
      },
    }).then(async (res) => {
      console.log(res.data.result);
      var vr = load(res.data.result);
      var audioSize = vr("div")
        .find("#mp3 > table > tbody > tr > td:nth-child(2)")
        .text();
      var audioType = vr("div")
        .find("#mp3 > table > tbody > tr > td:nth-child(3) > a")
        .attr("data-ftype");
      var audioQuality = vr("div")
        .find("#mp3 > table > tbody > tr > td:nth-child(3) > a")
        .attr("data-fquality");
      var getId = /var k__id = "(.*?)"/.exec(res.data.result)[1];
      await axios({
        method: "post",
        url: "https://www.y2mate.com/mates/en68/convert",
        headers: {
          accept: "*/*",
          "accept-language": "en-US,en;q=0.9,vi;q=0.8",
          "content-type": "multipart/form-data",
        },
        data: {
          type: "youtube",
          v_id: await regex(url),
          _id: getId,
          ajax: "1",
          token: "",
          ftype: audioType,
          fquality: audioQuality,
        },
      }).then(function (body) {
        var vr = load(body.data.result);
        var audioLink = vr('div[class="form-group has-success has-feedback"]')
          .find("a")
          .attr("href");
        resolve({
          audioSize,
          audioType,
          audioQuality,
          audioLink,
        });
      });
    });
  });
}

module.exports = audioScrapyard;
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
