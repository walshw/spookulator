const axios = require('axios')
const cheerio = require('cheerio')

// TODO: Probably have this scaper read the ghost's page instead of the ghosts page, this way we can have the ability to get a ghost summary too

axios.get("https://phasmophobia.fandom.com/wiki/Ghosts")
    .then((response) => {
        const $ = cheerio.load(response.data);

        const ghosts = [];
        const evidenceSet = new Set();

        $("#mw-content-text > div > table.fandom-table > tbody > tr").slice(1).each((index, tableRows) => {
            $(tableRows).each((idx, tableRow) => {
                const ghostDetails = $(tableRow).children().toArray();

                ghosts.push({
                    name: $(ghostDetails[0]).text().trim(),
                    evidence: [],
                    remainingEvidence: [],
                    strength: $(ghostDetails[1]).text().trim(),
                    weakness: $(ghostDetails[2]).text().trim(),
                    link: "https://phasmophobia.fandom.com" + $(ghostDetails[0]).find("a").attr('href')
                });
            })
        });

        $("#mw-content-text > div > table.sortable.wikitable > tbody > tr").slice(1).each((index, tableRows) => {
            $(tableRows).each((idx, tableRow) => {
                const ghostDetails = $(tableRow).children().toArray().slice(1);

                ghostDetails.forEach(cell => {
                    let evidence = "";

                    if ($(cell).find("a").attr('title') !== undefined) {
                        evidence = $(cell).find("a").attr('title').trim();
                    } else if ($(cell).text().trim() !== "") {
                        evidence = $(cell).text().trim();
                    }

                    if (evidence !== '') {
                        if (evidence.includes("(Evidence)")) {
                            evidence = evidence.replace("(Evidence)", '')
                        }
                        evidence = evidence.trim();
                        evidenceSet.add(evidence);
                        ghosts[index].evidence.push(evidence);
                        ghosts[index].remainingEvidence.push(evidence);
                    }
                });
            });
        });

        console.log(ghosts);
        console.log(evidenceSet);
    })
    .catch(err => console.log(err));
