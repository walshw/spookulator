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
        link: 'https://phasmophobia.fandom.com/wiki/Banshee',
        strength: 'A Banshee will focus on one player at a time until it kills them or the player leaves the game.',
        weakness: 'Banshees fear the Crucifix, which boosts the Hunt-stopping range of one from 3 meters to 5 meters against it.'
    },
    {
        name: 'Demon',
        evidence: ['Ghost Writing', 'Fingerprints', 'Freezing Temperatures'],
        link: 'https://phasmophobia.fandom.com/wiki/Demon',
        strength: 'Demons are the most aggressive ghosts and will begin Hunts more often.',
        weakness: "Asking a Demon successful questions on the Ouija Board won't lower the user's sanity."
    },
    {
        name: 'Goryo',
        evidence: ['D.O.T.S Projector', 'EMF Level 5', 'Fingerprints'],
        link: 'https://phasmophobia.fandom.com/wiki/Goryo',
        strength: 'Goryo will usually only show itself on camera when there are no people nearby.',
        weakness: 'Goryo are rarely seen far from their place of death'
    },
    {
        name: 'Hantu',
        evidence: ['Ghost Orb', 'Fingerprints', 'Freezing Temperatures'],
        link: 'https://phasmophobia.fandom.com/wiki/Hantu',
        strength: 'Hantu moves faster in colder areas (about 1.8m/s)',
        weakness: 'Hantu moves slower in warmer areas (about 1 m/s)'
    },
    {
        name: 'Jinn',
        evidence: ['EMF Level 5', 'Fingerprints', 'Freezing Temperatures'],
        link: 'https://phasmophobia.fandom.com/wiki/Jinn',
        strength: 'A Jinn will travel at a faster speed if its victim is far away.',
        weakness: "Turning off the location's power source will prevent the Jinn from using its ability."
    },
    {
        name: 'Mare',
        evidence: ['Ghost Writing', 'Ghost Orb', 'Spirit Box'],
        link: 'https://phasmophobia.fandom.com/wiki/Mare',
        strength: 'Increased chance to attack in the dark. As such, it will do what it can to achieve this, such as turning off lights and tripping the fuse box.',
        weakness: 'Turning the lights on will lower its chance to attack.'
    },
    {
        name: 'Myling',
        evidence: ['Ghost Writing', 'EMF Level 5', 'Fingerprints'],
        link: 'https://phasmophobia.fandom.com/wiki/Myling',
        strength: 'A Myling is known to be quieter when hunting',
        weakness: 'Mylings more frequently make paranomral sounds'
    },
    {
        name: 'Oni',
        evidence: ['D.O.T.S Projector', 'EMF Level 5', 'Freezing Temperatures'],
        link: 'https://phasmophobia.fandom.com/wiki/Oni',
        strength: 'Oni are more active when people are nearby and have been seen moving objects at great speed.',
        weakness: 'Being more active will make the Oni easier to find and identify.'
    },
    {
        name: 'Phantom',
        evidence: ['D.O.T.S Projector', 'Fingerprints', 'Spirit Box'],
        link: 'https://phasmophobia.fandom.com/wiki/Phantom',
        strength: 'Looking at a Phantom will considerably drop your Sanity. This refers to any visible manifestations of the Phantom, including during a Hunt.',
        weakness: 'Taking a photo of the Phantom will make it temporarily disappear. This, however, will not stop a Hunt.'
    },
    {
        name: 'Poltergeist',
        evidence: ['Ghost Writing', 'Fingerprints', 'Spirit Box'],
        link: 'https://phasmophobia.fandom.com/wiki/Poltergeist',
        strength: 'A Poltergeist is capable of influencing more objects at once than any other Ghosts, and is capable of shutting multiple doors at once.',
        weakness: 'A Poltergeist is almost ineffective in an empty room.'
    },
    {
        name: 'Revenant',
        evidence: ['Ghost Writing', 'Ghost Orb', 'Freezing Temperatures'],
        link: 'https://phasmophobia.fandom.com/wiki/Revenant',
        strength: 'A Revenant will travel at a significantly faster (2x) speed when hunting a victim. Additionally, the Revenant can freely switch whoever it is targeting during a Hunt.',
        weakness: 'Hiding from the Revenant will cause it to move at a significantly reduced (0.5x) speed.'
    },
    {
        name: 'Shade',
        evidence: ['Ghost Writing', 'EMF Level 5', 'Freezing Temperatures'],
        link: 'https://phasmophobia.fandom.com/wiki/Shade',
        strength: 'As a shy ghost, a Shade will rarely perform actions in the presence of two or more people, making it harder to detect.',
        weakness: 'Conversely, a Shade will rarely start a Hunt when players are grouped together.'
    },
    {
        name: 'Spirit',
        evidence: ['Ghost Writing', 'EMF Level 5', 'Spirit Box'],
        link: 'https://phasmophobia.fandom.com/wiki/Spirit',
        strength: 'The spirit has no discernible strengths, however it is known to increase its hunting as your sanity drops.',
        weakness: 'Using Smudge Sticks on a Spirit will stop it attacking for 180 seconds instead of 90.'
    },
    {
        name: 'Wraith',
        evidence: ['D.O.T.S Projector', 'EMF Level 5', 'Spirit Box'],
        link: 'https://phasmophobia.fandom.com/wiki/Wraith',
        strength: 'Wraiths almost never touch the ground, but this does not apply to the ghost model. Because of this, footprint sounds from a Wraith will be rare to non-existent, and stepping in Salt will be less likely.',
        weakness: 'Wraiths have a toxic reaction to Salt. If a Wraith comes into contact with a pile of salt, Ghost Activity will increase.'
    },
    {
        name: 'Yokai',
        evidence: ['D.O.T.S Projector', 'Ghost Orb', 'Spirit Box'],
        link: 'https://phasmophobia.fandom.com/wiki/Yokai',
        strength: 'Talking near a Yokai will anger it and increase its chance of attacking.',
        weakness: 'While hunting, a Yokai can only hear voices close to it.'
    },
    {
        name: 'Yurei',
        evidence: ['D.O.T.S Projector', 'Ghost Orb', 'Freezing Temperatures'],
        link: 'https://phasmophobia.fandom.com/wiki/Yurei',
        strength: "Yurei have been known to have a stronger effect on people's Sanity during a manifestation.",
        weakness: 'Using Smudge Sticks on the Yurei will cause it to not wander around the location for ~90 seconds.'
    }
];

export { ghostList, evidenceDictionary }