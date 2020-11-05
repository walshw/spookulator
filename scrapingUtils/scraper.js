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
                    evidence: ghostEvidence
                });
            }
        });

        // I AM BENCHING THIS CODE BECAUSE OF WIKI INCONSISTENCIES
        // THIS WORKS FOR IF THE STRENGTHS AND WEAKNESSES ARE IN A UL
        // HOWEVER SOME ARE IN P TAGS

        // ghosts.forEach(ghost => {
        //     const url = "https://phasmophobia.fandom.com/wiki/";
        //     axios.get(url + ghost.name).then((response) => {
        //         const c = cheerio.load(response.data);
        //         const temp = c('.mw-parser-output');

        //         let strengthWeaknessIndex = null;

        //         temp.each((index, x) => {
        //             const text = c(x).text().trim();

        //             if (index === strengthWeaknessIndex) {
        //                 let bongo = c(x).children().toArray();
                        
        //                 ghost["strength"] = c(bongo[0]).text().split("Strengths:")[1].trim();
        //                 ghost["weakness"] = c(bongo[1]).text().split("Weaknesses:")[1].trim();

        //             } else if (text.includes("Strengths and Weaknesses[edit | edit source]")) {
        //                 strengthWeaknessIndex = index + 1;
        //             }
        //         });

        //     });
        // });

        // console.log(ghosts);
        // console.log(evidence)
    });