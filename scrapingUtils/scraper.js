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
                })

                ghosts.push({
                    name: ghostName,
                    evidence: ghostEvidence
                });
            }
        });

        console.log(ghosts);
        console.log(evidence)
    });