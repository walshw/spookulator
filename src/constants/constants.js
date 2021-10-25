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
        evidence: ['D.O.T.S Projector', 'Ghost Orb', 'Fingerprints'],
        remainingEvidence: ['D.O.T.S Projector', 'Ghost Orb', 'Fingerprints'],
        link: 'https://phasmophobia.fandom.com/wiki/Banshee',
        strength: 'A Banshee will focus on one player at a time until it kills them or the player leaves the game.',
        weakness: 'Banshees fear the Crucifix, which boosts the Hunt-stopping range of one from 3 meters to 5 meters against it.'
    },
    {
        name: 'Demon',
        evidence: ['Ghost Writing', 'Fingerprints', 'Freezing Temperatures'],
        remainingEvidence: ['Ghost Writing', 'Fingerprints', 'Freezing Temperatures'],
        link: 'https://phasmophobia.fandom.com/wiki/Demon',
        strength: 'Demons are the most aggressive ghosts and will begin Hunts more often.',
        weakness: "Asking a Demon successful questions on the Ouija Board won't lower the user's sanity."
    },
    {
        name: 'Goryo',
        evidence: ['D.O.T.S Projector', 'EMF Level 5', 'Fingerprints'],
        remainingEvidence: ['D.O.T.S Projector', 'EMF Level 5', 'Fingerprints'],
        link: 'https://phasmophobia.fandom.com/wiki/Goryo',
        strength: 'Goryo will usually only show itself on camera when there are no people nearby.',
        weakness: 'Goryo are rarely seen far from their place of death.'
    },
    {
        name: 'Hantu',
        evidence: ['Ghost Orb', 'Fingerprints', 'Freezing Temperatures'],
        remainingEvidence: ['Ghost Orb', 'Fingerprints', 'Freezing Temperatures'],
        link: 'https://phasmophobia.fandom.com/wiki/Hantu',
        strength: 'Hantu moves faster in colder areas (about 1.8 m/s)[verify]',
        weakness: 'Hantu moves slower in warmer areas (about 1 m/s)[verify]'
    },
    {
        name: 'Jinn',
        evidence: ['EMF Level 5', 'Fingerprints', 'Freezing Temperatures'],
        remainingEvidence: ['EMF Level 5', 'Fingerprints', 'Freezing Temperatures'],
        link: 'https://phasmophobia.fandom.com/wiki/Jinn',
        strength: 'A Jinn will travel at a faster speed if its victim is far away.',
        weakness: "Turning off the location's power source will prevent the Jinn from using its ability."
    },
    {
        name: 'Mare',
        evidence: ['Ghost Writing', 'Ghost Orb', 'Spirit Box'],
        remainingEvidence: ['Ghost Writing', 'Ghost Orb', 'Spirit Box'],
        link: 'https://phasmophobia.fandom.com/wiki/Mare',
        strength: 'When in the dark, the Mare can hunt from 60% average sanity',
        weakness: 'Turning the lights on will decrease the range where it can hunt to 40% average sanity'
    },
    {
        name: 'Myling',
        evidence: ['Ghost Writing', 'EMF Level 5', 'Fingerprints'],
        remainingEvidence: ['Ghost Writing', 'EMF Level 5', 'Fingerprints'],
        link: 'https://phasmophobia.fandom.com/wiki/Myling',
        strength: 'A Myling is known to be quieter when hunting.',
        weakness: 'Mylings more frequently make paranormal sounds.'
    },
    {
        name: 'Oni',
        evidence: ['D.O.T.S Projector', 'EMF Level 5', 'Freezing Temperatures'],
        remainingEvidence: ['D.O.T.S Projector', 'EMF Level 5', 'Freezing Temperatures'],
        link: 'https://phasmophobia.fandom.com/wiki/Oni',
        strength: 'Oni are more active when people are nearby and have been seen moving objects at great speed.',
        weakness: 'Being more active will make the Oni easier to find and identify.'
    },
    {
        name: 'Phantom',
        evidence: ['D.O.T.S Projector', 'Fingerprints', 'Spirit Box'],
        remainingEvidence: ['D.O.T.S Projector', 'Fingerprints', 'Spirit Box'],
        link: 'https://phasmophobia.fandom.com/wiki/Phantom',
        strength: 'Looking at a Phantom will considerably drop your sanity.',
        weakness: 'Taking a photo of the Phantom will make it temporarily disappear.'
    },
    {
        name: 'Poltergeist',
        evidence: ['Ghost Writing', 'Fingerprints', 'Spirit Box'],
        remainingEvidence: ['Ghost Writing', 'Fingerprints', 'Spirit Box'],
        link: 'https://phasmophobia.fandom.com/wiki/Poltergeist',
        strength: 'A Poltergeist is capable of influencing more objects at once than any other Ghosts, and is capable of shutting multiple doors at once.',
        weakness: 'A Poltergeist is almost ineffective in an empty room.'
    },
    {
        name: 'Revenant',
        evidence: ['Ghost Writing', 'Ghost Orb', 'Freezing Temperatures'],
        remainingEvidence: ['Ghost Writing', 'Ghost Orb', 'Freezing Temperatures'],
        link: 'https://phasmophobia.fandom.com/wiki/Revenant',
        strength: 'A Revenant will travel at a significantly faster (2x) speed when hunting a victim. Additionally, the Revenant can freely switch whoever it is targeting during a Hunt.',
        weakness: 'Hiding from the Revenant will cause it to move at a significantly reduced (0.5x) speed.'
    },
    {
        name: 'Shade',
        evidence: ['Ghost Writing', 'EMF Level 5', 'Freezing Temperatures'],
        remainingEvidence: ['Ghost Writing', 'EMF Level 5', 'Freezing Temperatures'],
        link: 'https://phasmophobia.fandom.com/wiki/Shade',
        strength: 'As a shy ghost, a Shade will rarely perform actions in the presence of two or more people, making it harder to detect.',
        weakness: 'Conversely, a Shade will rarely start a Hunt when players are grouped together.'
    },
    {
        name: 'Spirit',
        evidence: ['Ghost Writing', 'EMF Level 5', 'Spirit Box'],
        remainingEvidence: ['Ghost Writing', 'EMF Level 5', 'Spirit Box'],
        link: 'https://phasmophobia.fandom.com/wiki/Spirit',
        strength: 'Nothing.',
        weakness: 'Using Smudge Sticks on a Spirit will prevent it from starting a hunt for a long period of time (180 seconds instead of 90).'
    },
    {
        name: 'Wraith',
        evidence: ['D.O.T.S Projector', 'EMF Level 5', 'Spirit Box'],
        remainingEvidence: ['D.O.T.S Projector', 'EMF Level 5', 'Spirit Box'],
        link: 'https://phasmophobia.fandom.com/wiki/Wraith',
        strength: "Wraiths almost never touch the ground meaning it can't be tracked by footsteps.",
        weakness: 'Wraiths have a toxic reaction to Salt.'
    },
    {
        name: 'Yokai',
        evidence: ['D.O.T.S Projector', 'Ghost Orb', 'Spirit Box'],
        remainingEvidence: ['D.O.T.S Projector', 'Ghost Orb', 'Spirit Box'],
        link: 'https://phasmophobia.fandom.com/wiki/Yokai',
        strength: 'Talking near a Yokai will anger it and increase its chance of attacking.',
        weakness: 'While hunting, a Yokai can only hear voices close to it.'
    },
    {
        name: 'Yurei',
        evidence: ['D.O.T.S Projector', 'Ghost Orb', 'Freezing Temperatures'],
        remainingEvidence: ['D.O.T.S Projector', 'Ghost Orb', 'Freezing Temperatures'],
        link: 'https://phasmophobia.fandom.com/wiki/Yurei',
        strength: "Yurei have been known to have a stronger effect on people's Sanity during a manifestation.",
        weakness: 'Using Smudge Sticks on the Yurei will cause it to not wander around the location for ~90 seconds.'
    }
];

export { ghostList, evidenceDictionary }