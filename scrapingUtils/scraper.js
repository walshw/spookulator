const axios = require('axios')
const cheerio = require('cheerio')

axios.get("https://phasmophobia.fandom.com/wiki/Evidence")
    .then((response) => {
        const $ = cheerio.load(response.data);
        const tableRows = $('table.wikitable > tbody > tr');

        const evidence = [];
        const ghosts = [];

        tableRows.each((elementIndex, element) => {
            if (elementIndex === 0) {
                $(element).children().each((evidenceIndex, evidenceTd) => {
                    if (evidenceIndex > 0) {
                        evidence.push($(evidenceTd).text().trim());
                    }
                });
            } else {
                let ghostName = '';
                let ghostEvidence = [];

                $(element).children().each((index, category) => {
                    text = $(category).text().trim();

                    if (index === 0) {
                        ghostName = text;
                    } else if (text === 'X') {
                        ghostEvidence.push(evidence[index - 1])
                    }
                });

                ghosts.push({
                    name: ghostName,
                    evidence: ghostEvidence,
                    link: ("https://phasmophobia.fandom.com/wiki/" + ghostName),
                    strength: "",
                    weakness: ""
                });
            }
        });


        const requests = ghosts.map(ghost => axios.get('https://phasmophobia.fandom.com/wiki/' + ghost.name))

        axios.all(requests).then(axios.spread((...responses) => {
            responses.forEach((response, index) => {
                const c = cheerio.load(response.data);
                const siteText = c('.mw-parser-output').text();
                try {
                    ghosts[index]['strength'] = new RegExp('.*Strengths: (.*\n){1}').exec(siteText)[1].trim();
                    ghosts[index]['weakness'] = new RegExp('.*Weaknesses: (.*\n){1}').exec(siteText)[1].trim();
                } catch (error) {
                    ghosts[index]['strength'] = "Will update once wiki is updated";
                    ghosts[index]['weakness'] = "Will update once wiki is updated";
                }
                
                
            });

            // REMEMBER THIS IS WHERE THE FOREACH ENDS, NOT IN A FINALLY() OUTSIDE OF THIS SCOPE
            console.log(ghosts);
            console.log(evidence);
        }));
    });