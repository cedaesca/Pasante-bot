function def(cmd, user, users, bot, channelID, evt) {

    /*
    Misión cumplida, señor Anderson?
    */

    const https = require("https");
    const request = require("request");
    const cheerio = require("cheerio");

    let query = cmd.substring(cmd.search(" "), cmd.length);
    let url = "https://api.stackexchange.com/2.2/similar?pagesize=1&order=desc&sort=relevance&title=" + query + "&site=stackoverflow&key=" + process.env.SO_KEY;

    request({uri: url, gzip: true}, function (err, res, body) {

        let JsonData = "";
        let FinalData = "";

        if (res.statusCode !== 400) {
            JsonData = JSON.parse(body);
        }

        if (JsonData.hasOwnProperty("items") && JsonData.items.length > 0) {

            if (!JsonData.items[0].is_answered) {
                bot.sendMessage({
                    to: channelID,
                    message: "Encontré una pregunta, pero no posee una respuesta definitiva. Puedes revisarlo si te interesa: \n" + JsonData.items[0].link
                });
            } else {
                https.get(JsonData.items[0].link, (resp) => {
                    resp.on("data", (c) => {
                        FinalData += c;
                    });

                    resp.on("end", () => {
                        let $ = cheerio.load(FinalData);
                        let pred = $(".answercell").first().text();
                        let FinalText = pred.substring(0, pred.search("share"));

                        //Para evitar errores con el embed
                        if (FinalText.length > 1020) {
                            FinalText = FinalText.substring(0, 1020) + "...";
                        }

                        bot.sendMessage({
                            to: channelID,
                            message: "Esto fue lo primero que encontré en Stack Overflow:",
                            embed: {
                                color: 16749596,
                                title: JsonData.items[0].title,
                                url: JsonData.items[0].link,
                                fields: [
                                    {
                                        name: "Respuesta",
                                        value: FinalText.trim()
                                    }
                                ],
                            }
                        }, function (error, response) {
                            if (error) console.log(error);
                        });
                    });
                });
            }
        } else {
            bot.sendMessage({
                to: channelID,
                message: "No pude encontrar nada en Stack Overflow."
            });
        }
    });
}

module.exports.def = def;