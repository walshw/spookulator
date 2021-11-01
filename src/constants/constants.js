const dirUrl = process.env.PUBLIC_URL + "/evidenceImages/";

const evidenceDictionary = {
    dotsProjector: {
        name: 'D.O.T.S Projector',
        image: dirUrl + 'dotsProjector.jpg'
    },
    emfLevelFive: {
        name: 'EMF Level 5',
        image: dirUrl + 'emfLevel5.jpg'
    },
    ghostWriting: {
        name: 'Ghost Writing',
        image: dirUrl + 'ghostWriting.png'
    },
    fingerPrints: {
        name: 'Fingerprints',
        image: dirUrl + 'fingerprints.jpg'
    },
    spiritBox: {
        name: 'Spirit Box',
        image: dirUrl + 'spiritBox.png'
    },
    freezingTemperatures: {
        name: 'Freezing Temperatures',
        image: dirUrl + 'freezingTemperatures.jpg'
    },
    ghostOrb: {
        name: 'Ghost Orb',
        image: dirUrl + 'ghostOrb.png'
    }
};

const ghostList = [
    {
        name: 'Banshee',
        evidence: ['Ghost Orb', 'Fingerprints', 'D.O.T.S Projector'],
        remainingEvidence: ['Ghost Orb', 'Fingerprints', 'D.O.T.S Projector'],
        strength: 'Will target only one player at a time.',
        weakness: 'Crucifix effectiveness is increased to 5m against one.',
        link: 'https://phasmophobia.fandom.com/wiki/Banshee'
    },
    {
        name: 'Demon',
        evidence: ['Freezing Temperatures', 'Fingerprints', 'Ghost Writing'],
        remainingEvidence: ['Freezing Temperatures', 'Fingerprints', 'Ghost Writing'],
        strength: 'Can initiate Hunts more often.',
        weakness: 'Getting Ouija Board responses will lower sanity less.',
        link: 'https://phasmophobia.fandom.com/wiki/Demon'
    },
    {
        name: 'Goryo',
        evidence: ['EMF Level 5', 'Fingerprints', 'D.O.T.S Projector'],
        remainingEvidence: ['EMF Level 5', 'Fingerprints', 'D.O.T.S Projector'],
        strength: 'Can only be seen interacting with D.O.T.S. through a camera when nobody is nearby.',
        weakness: 'Never wanders far from its place of death.',
        link: 'https://phasmophobia.fandom.com/wiki/Goryo'
    },
    {
        name: 'Hantu',
        evidence: ['Ghost Orb', 'Freezing Temperatures', 'Fingerprints'],
        remainingEvidence: ['Ghost Orb', 'Freezing Temperatures', 'Fingerprints'],
        strength: 'Lower temperatures allow the Hantu to move faster.',
        weakness: "Warmer areas slow the Hantu's movement.",
        link: 'https://phasmophobia.fandom.com/wiki/Hantu'
    },
    {
        name: 'Jinn',
        evidence: ['EMF Level 5', 'Freezing Temperatures', 'Fingerprints'],
        remainingEvidence: ['EMF Level 5', 'Freezing Temperatures', 'Fingerprints'],
        strength: 'Travels at faster speeds if its victim is far away.',
        weakness: "Cannot use its ability if the site's fuse box is off.",
        link: 'https://phasmophobia.fandom.com/wiki/Jinn'
    },
    {
        name: 'Mare',
        evidence: ['Ghost Orb', 'Spirit Box', 'Ghost Writing'],
        remainingEvidence: ['Ghost Orb', 'Spirit Box', 'Ghost Writing'],
        strength: 'Has an increased chance to attack in the dark.',
        weakness: 'Turning the lights on will reduce the chance of an attack.',
        link: 'https://phasmophobia.fandom.com/wiki/Mare'
    },
    {
        name: 'Myling',
        evidence: ['EMF Level 5', 'Fingerprints', 'Ghost Writing'],
        remainingEvidence: ['EMF Level 5', 'Fingerprints', 'Ghost Writing'],
        strength: 'Has quieter footsteps during a hunt.',
        weakness: 'Produces paranormal sounds more frequently.',
        link: 'https://phasmophobia.fandom.com/wiki/Myling'
    },
    {
        name: 'Obake',
        evidence: ['EMF Level 5', 'Ghost Orb', 'Fingerprints'],
        remainingEvidence: ['EMF Level 5', 'Ghost Orb', 'Fingerprints'],
        strength: 'Rarely leaves a trace when interacting with the environment.',
        weakness: 'Sometimes leaves behind unique evidence.',
        link: 'https://phasmophobia.fandom.com/wiki/Obake'
    },
    {
        name: 'Oni',
        evidence: ['EMF Level 5', 'Freezing Temperatures', 'D.O.T.S Projector'],
        remainingEvidence: ['EMF Level 5', 'Freezing Temperatures', 'D.O.T.S Projector'],
        strength: 'Increased activity if there are multiple players nearby.',
        weakness: "An Oni's increased activity makes them easier to find.",
        link: 'https://phasmophobia.fandom.com/wiki/Oni'
    },
    {
        name: 'Onryo',
        evidence: ['Ghost Orb', 'Spirit Box', 'Freezing Temperatures'],
        remainingEvidence: ['Ghost Orb', 'Spirit Box', 'Freezing Temperatures'],
        strength: 'Extinguishing a flame can cause an Onryo to attack.',
        weakness: 'When threatened, this ghost will be less likely to hunt.',
        link: 'https://phasmophobia.fandom.com/wiki/Onryo'
    },
    {
        name: 'Phantom',
        evidence: ['Spirit Box', 'Fingerprints', 'D.O.T.S Projector'],
        remainingEvidence: ['Spirit Box', 'Fingerprints', 'D.O.T.S Projector'],
        strength: "Looking at a Phantom will lower the player's Sanity considerably.",
        weakness: 'Taking a photo of the Phantom will cause it to briefly disappear.',
        link: 'https://phasmophobia.fandom.com/wiki/Phantom'
    },
    {
        name: 'Poltergeist',
        evidence: ['Spirit Box', 'Fingerprints', 'Ghost Writing'],
        remainingEvidence: ['Spirit Box', 'Fingerprints', 'Ghost Writing'],
        strength: 'Capable of throwing multiple objects at once.',
        weakness: 'Becomes powerless with no throwables nearby.',
        link: 'https://phasmophobia.fandom.com/wiki/Poltergeist'
    },
    {
        name: 'Raiju',
        evidence: ['EMF Level 5', 'Ghost Orb', 'D.O.T.S Projector'],
        remainingEvidence: ['EMF Level 5', 'Ghost Orb', 'D.O.T.S Projector'],
        strength: 'Moves faster near electrical devices.',
        weakness: 'Constantly disrupt electronic equipment.',
        link: 'https://phasmophobia.fandom.com/wiki/Raiju'
    },
    {
        name: 'Revenant',
        evidence: ['Ghost Orb', 'Freezing Temperatures', 'Ghost Writing'],
        remainingEvidence: ['Ghost Orb', 'Freezing Temperatures', 'Ghost Writing'],
        strength: 'Can travel significantly faster if a player is spotted during a Hunt.',
        weakness: 'Without a target, the Revenant moves very slowly.',
        link: 'https://phasmophobia.fandom.com/wiki/Revenant'
    },
    {
        name: 'Shade',
        evidence: ['EMF Level 5', 'Freezing Temperatures', 'Ghost Writing'],
        remainingEvidence: ['EMF Level 5', 'Freezing Temperatures', 'Ghost Writing'],
        strength: 'Being shy makes it more difficult to locate and obtain evidence.',
        weakness: 'Less likely to hunt if multiple people are nearby.',
        link: 'https://phasmophobia.fandom.com/wiki/Shade'
    },
    {
        name: 'Spirit',
        evidence: ['EMF Level 5', 'Spirit Box', 'Ghost Writing'],
        remainingEvidence: ['EMF Level 5', 'Spirit Box', 'Ghost Writing'],
        strength: 'None.',
        weakness: 'Smudge Sticks are more effective, preventing a hunt for longer.',
        link: 'https://phasmophobia.fandom.com/wiki/Spirit'
    },
    {
        name: 'The Twins',
        evidence: ['EMF Level 5', 'Spirit Box', 'Freezing Temperatures'],
        remainingEvidence: ['EMF Level 5', 'Spirit Box', 'Freezing Temperatures'],
        strength: 'Either Twin can be angered and initiate an attack on their prey.',
        weakness: 'The Twins will often interact with the environment at the same time.',
        link: 'https://phasmophobia.fandom.com/wiki/The_Twins'
    },
    {
        name: 'Wraith',
        evidence: ['EMF Level 5', 'Spirit Box', 'D.O.T.S Projector'],
        remainingEvidence: ['EMF Level 5', 'Spirit Box', 'D.O.T.S Projector'],
        strength: 'Does not leave UV Footprints after stepping in salt.',
        weakness: 'Will become more active if it steps in salt.',
        link: 'https://phasmophobia.fandom.com/wiki/Wraith'
    },
    {
        name: 'Yokai',
        evidence: ['Ghost Orb', 'Spirit Box', 'D.O.T.S Projector'],
        remainingEvidence: ['Ghost Orb', 'Spirit Box', 'D.O.T.S Projector'],
        strength: 'Talking near the Yokai will anger it, increasing the chance to attack.',
        weakness: 'Can only hear voices close to it during a Hunt.',
        link: 'https://phasmophobia.fandom.com/wiki/Yokai'
    },
    {
        name: 'Yurei',
        evidence: ['Ghost Orb', 'Freezing Temperatures', 'D.O.T.S Projector'],
        remainingEvidence: ['Ghost Orb', 'Freezing Temperatures', 'D.O.T.S Projector'],
        strength: 'Has a stronger effect on Sanity.',
        weakness: "Smudging the Yurei's Ghost Room will reduce how often it wanders.",
        link: 'https://phasmophobia.fandom.com/wiki/Yurei'
    }
];

export { ghostList, evidenceDictionary }