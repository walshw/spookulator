const axios = require('axios')
const cheerio = require('cheerio')

axios.get("https://phasmophobia.fandom.com/wiki/Evidence")
    .then((response) => {
        const $ = cheerio.load(response.data);
        // Since either I am using Cheerio wrong, or something is wrong with it, using the query selector to get the body ALSO gets the table header for some reason
        // This makes a slice after the table header with all the table rows
        const tableRows = $('#mw-content-text > div > table.article-table.sortable.wikitable > tbody > tr').slice(1);
        const evidence = new Set();
        const ghosts = [];
        
        tableRows.each((elementIndex, element) => {
                let ghostName = '';
                let ghostEvidence = [];

                // the first TD is ghost name
                // the following will have either a piece of evidence OR no text
                // All we have to do is just grab all the evidence, add it to our evidence set, and add it to the ghost's evidence

                $(element).children().each((index, category) => {
                    text = $(category).text().trim();
                    if (index === 0) {
                        ghostName = text;
                    } else if (text.trim() !== '') {
                        evidence.add(text);
                        ghostEvidence.push(text);
                    }
                });

                ghosts.push({
                    name: ghostName,
                    evidence: ghostEvidence,
                    link: ("https://phasmophobia.fandom.com/wiki/" + ghostName),
                    strength: "",
                    weakness: ""
                });
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
            console.log(Array.from(evidence));
        }));
    });