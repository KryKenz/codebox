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
const ffmpegInstaller = require("@ffmpeg-installer/ffmpeg");
const ffprobe = require("@ffprobe-installer/ffprobe");
const ffmpeg = require("fluent-ffmpeg")()
.setFfprobePath(ffprobe.path)
.setFfmpegPath(ffmpegInstaller.path);
const request = require("request");
const axios = require("axios");
const chalk = require("chalk");
const fs = require("fs");
(async () => {
const url = "http://localhost:8080/"; // If running locally else https://sjvl7c-8080.preview.csb.app
const name = "youtube/often+by+weeknd";
axios({
method: "get",
url: url + name,
headers: {
accept: "*/*",
"accept-language": "en-US,en;q=0.9",
"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
},
}).then((response) => {
console.log(" [ YouTube Search By KryTek Api ]\n\n");
_Found = `
${console.log(chalk.green("💡STATUS: ") + chalk.white(response.data.status))}
${console.log(chalk.green("🔑KRYTEK_ID: ") + chalk.white(response.data._id))}
${console.log(chalk.green("📍YT_ID: ") + chalk.white(response.data._youtube_search[0].YT_ID))}
${console.log(chalk.green("⚡TITLE: ") + chalk.white(response.data._youtube_search[0].TITLE))}
${console.log(chalk.green("🗓️UPLOADED: ") + chalk.white(response.data._youtube_search[0].UPLOADED))}
${console.log(chalk.green("🧿VIEWS: ") + chalk.white(response.data._youtube_search[0].VIEWS))}
${console.log(chalk.green("⏰DURATION_FULL: ") + chalk.white(response.data._youtube_search[0].DURATION_FULL))}
${console.log(chalk.green("⏲️DURATION_SECONDS: ") + chalk.white(response.data._youtube_search[0].DURATION_SECONDS))}
${console.log(chalk.green("🖋️AUTHOR_NAME: ") + chalk.white(response.data._youtube_search[1].AUTHOR_NAME))}
${console.log(chalk.green("🖊️AUTHOR_CHANNEL: ") + chalk.white(response.data._youtube_search[1].AUTHOR_CHANNEL))}
${console.log(chalk.green("🔗LINK: ") + chalk.white(response.data._youtube_search[2].LINK))}
${console.log(chalk.green("🖼️THUMB: ") + chalk.white(response.data._youtube_search[2].THUMB))}
${console.log(chalk.green("📑DESCRIPTION: ") + chalk.white(response.data._youtube_search[2].DESCRIPTION))}
${console.log(chalk.green("📼VIDEO_SHORT_LINK: ") + chalk.white(response.data._youtube_downloader[0].VIDEO_SHORT_LINK))}
${console.log(chalk.green("📼VIDEO_QUALITY: ") + chalk.white(response.data._youtube_downloader[0].VIDEO_QUALITY))}
${console.log(chalk.green("📼VIDEO_SIZE: ") + chalk.white(response.data._youtube_downloader[0].VIDEO_SIZE))}
${console.log(chalk.green("📼VIDEO_RAW_LINK: ") + chalk.white(response.data._youtube_downloader[0].VIDEO_RAW_LINK))}

${console.log(chalk.green("🎙️AUDIO_SHORT_LINK: ") + chalk.white(response.data._youtube_downloader[1].AUDIO_SHORT_LINK))}
${console.log(chalk.green("🎙️AUDIO_QUALITY: ") + chalk.white(response.data._youtube_downloader[1].AUDIO_QUALITY))}
${console.log(chalk.green("🎙️AUDIO_SIZE: ") + chalk.white(response.data._youtube_downloader[1].AUDIO_SIZE))}
${console.log(chalk.green("🎙️AUDIO_RAW_LINK: ") + chalk.white(response.data._youtube_downloader[1].AUDIO_RAW_LINK))}`;
});
})();
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