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
require("../global");
var router = express.Router();
const { v4: uuidv4 } = require("uuid");
router.get("/", (req, resp) => {
  return resp.send(
    "[ ANIMATION ]: Available Commands Are: bite,blush,bonk,bored,confused,cry,cuddle,dance,goodnight,happy,highfive,hug,kick,kill,kiss,nervous,pat,poke,punch,sad,scream,slap,smile,stare,wave,wink,yeet,yes"
  );
});

router.get("/:animation", async (req, resp) => {
  try {
    if (req.params.animation.toLowerCase() === "bite") {
      return resp.send({
        _id: uuidv4(),
        API_CALL_TIMESTAMP: Date.now(),
        GIF_LINK: await animation.bite(),
      });
    } else if (req.params.animation.toLowerCase() === "blush") {
      return resp.send({
        _id: uuidv4(),
        API_CALL_TIMESTAMP: Date.now(),
        GIF_LINK: await animation.blush(),
      });
    } else if (req.params.animation.toLowerCase() === "bonk") {
      return resp.send({
        _id: uuidv4(),
        API_CALL_TIMESTAMP: Date.now(),
        GIF_LINK: await animation.bonk(),
      });
    } else if (req.params.animation.toLowerCase() === "bored") {
      return resp.send({
        _id: uuidv4(),
        API_CALL_TIMESTAMP: Date.now(),
        GIF_LINK: await animation.bored(),
      });
    } else if (req.params.animation.toLowerCase() === "confused") {
      return resp.send({
        _id: uuidv4(),
        API_CALL_TIMESTAMP: Date.now(),
        GIF_LINK: await animation.confused(),
      });
    } else if (req.params.animation.toLowerCase() === "cry") {
      return resp.send({
        _id: uuidv4(),
        API_CALL_TIMESTAMP: Date.now(),
        GIF_LINK: await animation.cry(),
      });
    } else if (req.params.animation.toLowerCase() === "cuddle") {
      return resp.send({
        _id: uuidv4(),
        API_CALL_TIMESTAMP: Date.now(),
        GIF_LINK: await animation.cuddle(),
      });
    } else if (req.params.animation.toLowerCase() === "dance") {
      return resp.send({
        _id: uuidv4(),
        API_CALL_TIMESTAMP: Date.now(),
        GIF_LINK: await animation.dance(),
      });
    } else if (req.params.animation.toLowerCase() === "goodnight") {
      return resp.send({
        _id: uuidv4(),
        API_CALL_TIMESTAMP: Date.now(),
        GIF_LINK: await animation.goodnight(),
      });
    } else if (req.params.animation.toLowerCase() === "happy") {
      return resp.send({
        _id: uuidv4(),
        API_CALL_TIMESTAMP: Date.now(),
        GIF_LINK: await animation.happy(),
      });
    } else if (req.params.animation.toLowerCase() === "highfive") {
      return resp.send({
        _id: uuidv4(),
        API_CALL_TIMESTAMP: Date.now(),
        GIF_LINK: await animation.highfive(),
      });
    } else if (req.params.animation.toLowerCase() === "hug") {
      return resp.send({
        _id: uuidv4(),
        API_CALL_TIMESTAMP: Date.now(),
        GIF_LINK: await animation.hug(),
      });
    } else if (req.params.animation.toLowerCase() === "kick") {
      return resp.send({
        _id: uuidv4(),
        API_CALL_TIMESTAMP: Date.now(),
        GIF_LINK: await animation.kick(),
      });
    } else if (req.params.animation.toLowerCase() === "kill") {
      return resp.send({
        _id: uuidv4(),
        API_CALL_TIMESTAMP: Date.now(),
        GIF_LINK: await animation.kill(),
      });
    } else if (req.params.animation.toLowerCase() === "kiss") {
      return resp.send({
        _id: uuidv4(),
        API_CALL_TIMESTAMP: Date.now(),
        GIF_LINK: await animation.kiss(),
      });
    } else if (req.params.animation.toLowerCase() === "nervous") {
      return resp.send({
        _id: uuidv4(),
        API_CALL_TIMESTAMP: Date.now(),
        GIF_LINK: await animation.nervous(),
      });
    } else if (req.params.animation.toLowerCase() === "pat") {
      return resp.send({
        _id: uuidv4(),
        API_CALL_TIMESTAMP: Date.now(),
        GIF_LINK: await animation.pat(),
      });
    } else if (req.params.animation.toLowerCase() === "poke") {
      return resp.send({
        _id: uuidv4(),
        API_CALL_TIMESTAMP: Date.now(),
        GIF_LINK: await animation.poke(),
      });
    } else if (req.params.animation.toLowerCase() === "punch") {
      return resp.send({
        _id: uuidv4(),
        API_CALL_TIMESTAMP: Date.now(),
        GIF_LINK: await animation.punch(),
      });
    } else if (req.params.animation.toLowerCase() === "sad") {
      return resp.send({
        _id: uuidv4(),
        API_CALL_TIMESTAMP: Date.now(),
        GIF_LINK: await animation.sad(),
      });
    } else if (req.params.animation.toLowerCase() === "scream") {
      return resp.send({
        _id: uuidv4(),
        API_CALL_TIMESTAMP: Date.now(),
        GIF_LINK: await animation.scream(),
      });
    } else if (req.params.animation.toLowerCase() === "slap") {
      return resp.send({
        _id: uuidv4(),
        API_CALL_TIMESTAMP: Date.now(),
        GIF_LINK: await animation.slap(),
      });
    } else if (req.params.animation.toLowerCase() === "smile") {
      return resp.send({
        _id: uuidv4(),
        API_CALL_TIMESTAMP: Date.now(),
        GIF_LINK: await animation.smile(),
      });
    } else if (req.params.animation.toLowerCase() === "stare") {
      return resp.send({
        _id: uuidv4(),
        API_CALL_TIMESTAMP: Date.now(),
        GIF_LINK: await animation.stare(),
      });
    } else if (req.params.animation.toLowerCase() === "wave") {
      return resp.send({
        _id: uuidv4(),
        API_CALL_TIMESTAMP: Date.now(),
        GIF_LINK: await animation.wave(),
      });
    } else if (req.params.animation.toLowerCase() === "wink") {
      return resp.send({
        _id: uuidv4(),
        API_CALL_TIMESTAMP: Date.now(),
        GIF_LINK: await animation.wink(),
      });
    } else if (req.params.animation.toLowerCase() === "yeet") {
      return resp.send({
        _id: uuidv4(),
        API_CALL_TIMESTAMP: Date.now(),
        GIF_LINK: await animation.yeet(),
      });
    } else if (req.params.animation.toLowerCase() === "yes") {
      return resp.send({
        _id: uuidv4(),
        API_CALL_TIMESTAMP: Date.now(),
        GIF_LINK: await animation.yes(),
      });
    } else {
      return resp.send(
        "[ ANIMATION-ERROR ]: Available Commands Are: bite,blush,bonk,bored,confused,cry,cuddle,dance,goodnight,happy,highfive,hug,kick,kill,kiss,nervous,pat,poke,punch,sad,scream,slap,smile,stare,wave,wink,yeet,yes"
      );
    }
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
