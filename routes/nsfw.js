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
    "[ NSFW ]: Available Commands Are: 4k,blowjobs,milf,lactating,pussy,cumslut"
  );
});

router.get("/:nsfw", async (req, resp) => {
  try {
    if (req.params.nsfw.toLowerCase() === "4k") {
      await got("https://www.reddit.com/r/RealGirls/random.json").then(
        async (Form) => {
          var FF = JSON.parse(Form.body);
          var FFTitle = FF[0].data.children[0].data.title;
          var FFLink = FF[0].data.children[0].data.url;
          if (FFLink) return resp.send(FFLink);
          else return resp.send("[ SORRY ]: Server did not return req.");
        }
      );
    } else if (req.params.nsfw.toLowerCase() === "blowjobs") {
      await got("https://www.reddit.com/r/Blowjobs/random.json").then(
        async (Form) => {
          var FF = JSON.parse(Form.body);
          var FFTitle = FF[0].data.children[0].data.title;
          var FFLink = FF[0].data.children[0].data.url;
          if (FFLink) return resp.send(FFLink);
          else return resp.send("[ SORRY ]: Server did not return req.");
        }
      );
    } else if (req.params.nsfw.toLowerCase() === "milf") {
      await got("https://www.reddit.com/r/milf/random.json").then(
        async (Form) => {
          var FF = JSON.parse(Form.body);
          var FFTitle = FF[0].data.children[0].data.title;
          var FFLink = FF[0].data.children[0].data.url;
          if (FFLink) return resp.send(FFLink);
          else return resp.send("[ SORRY ]: Server did not return req.");
        }
      );
    } else if (req.params.nsfw.toLowerCase() === "lactating") {
      await got("https://www.reddit.com/r/lactating/random.json").then(
        async (Form) => {
          var FF = JSON.parse(Form.body);
          var FFTitle = FF[0].data.children[0].data.title;
          var FFLink = FF[0].data.children[0].data.url;
          if (FFLink) return resp.send(FFLink);
          else return resp.send("[ SORRY ]: Server did not return req.");
        }
      );
    } else if (req.params.nsfw.toLowerCase() === "pussy") {
      await got("https://www.reddit.com/r/pussy/random.json").then(
        async (Form) => {
          var FF = JSON.parse(Form.body);
          var FFTitle = FF[0].data.children[0].data.title;
          var FFLink = FF[0].data.children[0].data.url;
          if (FFLink) return resp.send(FFLink);
          else return resp.send("[ SORRY ]: Server did not return req.");
        }
      );
    } else if (req.params.nsfw.toLowerCase() === "cumslut") {
      await got("https://www.reddit.com/r/cumsluts/random.json").then(
        async (Form) => {
          var FF = JSON.parse(Form.body);
          var FFTitle = FF[0].data.children[0].data.title;
          var FFLink = FF[0].data.children[0].data.url;
          if (FFLink) return resp.send(FFLink);
          else return resp.send("[ SORRY ]: Server did not return req.");
        }
      );
    } else
      return resp.send(
        "[ NSFW-ERROR ]: Available Commands Are: 4k,blowjobs,milf,lactating,pussy,cumslut"
      );
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
