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
var fetch = require("node-fetch");
var FormData = require("form-data");
var FFmpeg = require("fluent-ffmpeg");
const { v4: uuidv4 } = require("uuid");
var malScraper = require("mal-scraper");
var animation = require("anime-actions");
var { fromBuffer } = require("file-type");
var YouTube_Scrape = require("krytek-yts");
var { YTAudio, YTVideo } = require("../src/y2mate");
var YouTube_Downloader = require("../src/YouTube_Downloader");
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
var Spinnies = require("spinnies");
var api = require("express");
var root = api.Router();
var spinnies = new Spinnies();
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
root.get("/", (req, resp) => {
  return resp.send(
    "[ HENTAI ]: Available Commands Are: bdsm,blowjob,cum,doujin,feet,femdom,foxgirl,gifs,glasses,hentai,netorare,maid,masturbation,orgy,panties,pussy,school,succubus,tentacles,uglyBastard,uniform,yuri,zettaiRyouiki"
  );
});

root.get("/:item", async (req, resp) => {
  try {
    if (req.params.item.toLowerCase() === "ass")
      return resp.send(await nhen.nsfw.ass());
    else if (req.params.item.toLowerCase() === "bdsm")
      return resp.send(await nhen.nsfw.bdsm());
    else if (req.params.item.toLowerCase() === "blowjob")
      return resp.send(await nhen.nsfw.blowjob());
    else if (req.params.item.toLowerCase() === "cum")
      return resp.send(await nhen.nsfw.cum());
    else if (req.params.item.toLowerCase() === "doujin")
      return resp.send(await nhen.nsfw.doujin());
    else if (req.params.item.toLowerCase() === "feet")
      return resp.send(await nhen.nsfw.feet());
    else if (req.params.item.toLowerCase() === "femdom")
      return resp.send(await nhen.nsfw.femdom());
    else if (req.params.item.toLowerCase() === "foxgirl")
      return resp.send(await nhen.nsfw.foxgirl());
    else if (req.params.item.toLowerCase() === "gifs")
      return resp.send(await nhen.nsfw.gifs());
    else if (req.params.item.toLowerCase() === "glasses")
      return resp.send(await nhen.nsfw.glasses());
    else if (req.params.item.toLowerCase() === "hentai")
      return resp.send(await nhen.nsfw.hentai());
    else if (req.params.item.toLowerCase() === "netorare")
      return resp.send(await nhen.nsfw.netorare());
    else if (req.params.item.toLowerCase() === "maid")
      return resp.send(await nhen.nsfw.maid());
    else if (req.params.item.toLowerCase() === "masturbation")
      return resp.send(await nhen.nsfw.masturbation());
    else if (req.params.item.toLowerCase() === "orgy")
      return resp.send(await nhen.nsfw.orgy());
    else if (req.params.item.toLowerCase() === "panties")
      return resp.send(await nhen.nsfw.panties());
    else if (req.params.item.toLowerCase() === "pussy")
      return resp.send(await nhen.nsfw.pussy());
    else if (req.params.item.toLowerCase() === "school")
      return resp.send(await nhen.nsfw.school());
    else if (req.params.item.toLowerCase() === "succubus")
      return resp.send(await nhen.nsfw.succubus());
    else if (req.params.item.toLowerCase() === "tentacles")
      return resp.send(await nhen.nsfw.thighs());
    else if (req.params.item.toLowerCase() === "uglyBastard")
      return resp.send(await nhen.nsfw.uglyBastard());
    else if (req.params.item.toLowerCase() === "uniform")
      return resp.send(await nhen.nsfw.uniform());
    else if (req.params.item.toLowerCase() === "yuri")
      return resp.send(await nhen.nsfw.yuri());
    else if (req.params.item.toLowerCase() === "zettaiRyouiki")
      return resp.send(await nhen.nsfw.zettaiRyouiki());
    else
      return resp.send(
        "[ HENTAI-ERROR ]: Available Commands Are: bdsm,blowjob,cum,doujin,feet,femdom,foxgirl,gifs,glasses,hentai,netorare,maid,masturbation,orgy,panties,pussy,school,succubus,tentacles,uglyBastard,uniform,yuri,zettaiRyouiki"
      );
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
