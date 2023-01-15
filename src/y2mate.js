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
var { load } = require("cheerio");
var Spinnies = require("spinnies");
var fetch = require("node-fetch");
var FormData = require("form-data");
var FFmpeg = require("fluent-ffmpeg");
var malScraper = require("mal-scraper");
var bodyParser = require("body-parser");
var animation = require("anime-actions");
var { fromBuffer } = require("file-type");
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
var Spinnies = require("spinnies");
var api = require("express");
var router = api.Router();
var spinnies = new Spinnies();
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
const YTVideo = async (yutub, qualityny) => {
  function post(url, formdata) {
    return fetch(url, {
      method: "POST",
      headers: {
        accept: "*/*",
        "accept-language": "en-US,en;q=0.9",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      body: new URLSearchParams(Object.entries(formdata)),
    });
  }
  const ytIdRegex =
    /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/;
  let ytId = ytIdRegex.exec(yutub);
  url = "https://youtu.be/" + ytId[1];
  let res = await post(`https://www.y2mate.com/mates/en68/analyze/ajax`, {
    url,
    q_auto: 0,
    ajax: 1,
  });
  const Found = await res.json();
  const $ = cheerio.load(Found.result);
  console.log(Found);
  const hasil = [];
  let thumb = $("div").find(".thumbnail.cover > a > img").attr("src");
  let judul = $("div").find(".thumbnail.cover > div > b").text();
  let quality = $("div")
    .find("#mp4 > table > tbody > tr:nth-child(1) > td:nth-child(3) > a")
    .attr("data-fquality");
  let tipe = $("div")
    .find("#mp4 > table > tbody > tr:nth-child(3) > td:nth-child(3) > a")
    .attr("data-ftype");
  let output = `${judul}.` + tipe;
  let size = $("div")
    .find("#mp4 > table > tbody > tr:nth-child(1) > td:nth-child(2)")
    .text();
  let id = /var k__id = "(.*?)"/.exec(Found.result)[1];
  let res2 = await post(`https://www.y2mate.com/mates/en68/convert`, {
    type: "youtube",
    _id: id,
    v_id: ytId[1],
    ajax: "1",
    token: "",
    ftype: tipe,
    fquality: qualityny,
  });
  const meme = await res2.json();
  const supp = cheerio.load(meme.result);
  let link = supp("div").find("a").attr("href");
  hasil.push({ thumb, judul, quality, tipe, size, output, link });
  return hasil;
};

const YTAudio = async (yutub, qualityny) => {
  function post(url, formdata) {
    return fetch(url, {
      method: "POST",
      headers: {
        accept: "*/*",
        "accept-language": "en-US,en;q=0.9",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      body: new URLSearchParams(Object.entries(formdata)),
    });
  }
  const ytIdRegex =
    /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/;
  let ytId = ytIdRegex.exec(yutub);
  url = "https://youtu.be/" + ytId[1];
  let res = await post(`https://www.y2mate.com/mates/en68/analyze/ajax`, {
    url,
    q_auto: 0,
    ajax: 1,
  });
  const Found = await res.json();
  const $ = cheerio.load(Found.result);
  const hasil = [];
  let thumb = $("div").find(".thumbnail.cover > a > img").attr("src");
  let judul = $("div").find(".thumbnail.cover > div > b").text();
  let size = $("div")
    .find("#mp3 > table > tbody > tr > td:nth-child(2)")
    .text();
  let tipe = $("div")
    .find("#mp3 > table > tbody > tr > td:nth-child(3) > a")
    .attr("data-ftype");
  let output = `${judul}.` + tipe;
  let quality = $("div")
    .find("#mp3 > table > tbody > tr > td:nth-child(3) > a")
    .attr("data-fquality");
  let id = /var k__id = "(.*?)"/.exec(Found.result)[1];
  let res2 = await post(`https://www.y2mate.com/mates/en68/convert`, {
    type: "youtube",
    _id: id,
    v_id: ytId[1],
    ajax: "1",
    token: "",
    ftype: tipe,
    fquality: qualityny,
  });
  const meme = await res2.json();
  const supp = cheerio.load(meme.result);
  let link = supp("div").find("a").attr("href");
  hasil.push({ thumb, judul, quality, tipe, size, output, link });
  return hasil;
};

module.exports = { YTVideo, YTAudio };

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
