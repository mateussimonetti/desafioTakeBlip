"use strict";
const https = require("https");

exports.getRepos = async () => {
  return new Promise(function (res, rej) {
    var options = {
      host: "api.github.com",
      path: "/users/takenet/repos?per_page=6&sort=created&direction=asc",
      method: "GET",
      headers: { "user-agent": "node.js" },
    };

    var request = https.request(options, function (response) {
      var body = "";
      response.on("data", function (chunk) {
        body += chunk.toString("utf8");
      });

      response.on("end", function () {
        let repos = JSON.parse(body);
        var wantedRepos = repos
          .filter((el, idx) => {
            return el.language == "C#";
          })
          .map((el, idx) => {
            return {
              avatar_url: el.owner.avatar_url,
              full_name: el.full_name,
              description: el.description,
            };
          });

        //Retorna a resposta
        res(wantedRepos);
      });

      response.on("error", function () {
        rej(err);
      });
    });
    request.end();
  });
};
