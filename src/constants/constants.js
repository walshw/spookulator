const evidenceDictionary = {
    emfLevelFive: 'EMF Level 5',
    ghostWriting: 'Ghost Writing',
    fingerPrints: 'Fingerprints',
    spiritBox: 'Spirit Box',
    freezingTemperatures: 'Freezing Temperatures',
    ghostOrb: 'Ghost Orb'
};

const ghostList = [
    {
        name: 'Banshee',
        evidence: ['EMF Level 5', 'Fingerprints', 'Freezing Temperatures'],
        link: 'https://phasmophobia.fandom.com/wiki/Banshee',
        strength: 'A Banshee will focus on one player at a time until it kills them.',
        weakness: 'Banshees fear the Crucifix, which boosts the Hunt-stopping range of one from 3 meters to 5 meters against it.'
    },
    {
        name: 'Demon',
        evidence: ['Ghost Writing', 'Spirit Box', 'Freezing Temperatures'],
        link: 'https://phasmophobia.fandom.com/wiki/Demon',
        strength: 'Demons will attack more often than any other ghost.',
        weakness: "Asking a Demon successful questions on the Ouija Board won't lower the users' sanity."
    },
    {
        name: 'Jinn',
        evidence: ['EMF Level 5', 'Spirit Box', 'Ghost Orb'],
        link: 'https://phasmophobia.fandom.com/wiki/Jinn',
        strength: 'A Jinn will travel at a faster speed if its victim is far away.',
        weakness: "Turning off the location's power source will prevent the Jinn from using its ability."
    },
    {
        name: 'Mare',
        evidence: ['Spirit Box', 'Freezing Temperatures', 'Ghost Orb'],
        link: 'https://phasmophobia.fandom.com/wiki/Mare',
        strength: 'Increased chance to attack in the dark. As such, it will do what it can to achieve this, such as turning off lights and tripping the fuse box.',
        weakness: 'Turning the lights on will lower its chance to attack.'
    },
    {
        name: 'Oni',
        evidence: ['EMF Level 5', 'Ghost Writing', 'Spirit Box'],
        link: 'https://phasmophobia.fandom.com/wiki/Oni',
        strength: 'Oni are more active when people are nearby and have been seen moving objects at great speed.',
        weakness: 'Being more active will make the Oni easier to find and identify.'
    },
    {
        name: 'Phantom',
        evidence: ['EMF Level 5', 'Freezing Temperatures', 'Ghost Orb'],
        link: 'https://phasmophobia.fandom.com/wiki/Phantom',
        strength: 'Looking at a Phantom will considerably drop your Sanity. This refers to any visible manifestations of the Phantom, including during a Hunt.',
        weakness: 'Taking a photo of the Phantom will make it temporarily disappear. The Photo Camera will make it disappear, but it will not stop a Hunt.'
    },
    {
        name: 'Poltergeist',
        evidence: ['Fingerprints', 'Spirit Box', 'Ghost Orb'],
        link: 'https://phasmophobia.fandom.com/wiki/Poltergeist',
        strength: 'A Poltergeist is capable of influencing more objects at once than any other Ghosts, and is capable of shutting multiple doors at once.',
        weakness: 'A Poltergeist is almost ineffective in an empty room.'
    },
    {
        name: 'Revenant',
        evidence: ['EMF Level 5', 'Ghost Writing', 'Fingerprints'],
        link: 'https://phasmophobia.fandom.com/wiki/Revenant',
        strength: 'A Revenant will travel at a significantly faster speed when hunting a victim. Additionally, the Revenant can freely switch whoever it is targeting during a Hunt.',
        weakness: 'Hiding from the Revenant will cause it to move very slowly.'
    },
    {
        name: 'Shade',
        evidence: ['EMF Level 5', 'Ghost Writing', 'Ghost Orb'],
        link: 'https://phasmophobia.fandom.com/wiki/Shade',
        strength: 'As a shy ghost, a Shade will rarely perform actions in the presence of two or more people, making it harder to detect.',
        weakness: 'Conversely, a Shade will rarely start a Hunt when players are grouped together.'
    },
    {
        name: 'Spirit',
        evidence: ['Ghost Writing', 'Fingerprints', 'Spirit Box'],
        link: 'https://phasmophobia.fandom.com/wiki/Spirit',
        strength: 'None. The Spirit has no unique powers, making it easier to survive but harder to identify.',
        weakness: 'Using Smudge Sticks on a Spirit will stop it attacking for 120 seconds instead of 90.'
    },
    {
        name: 'Wraith',
        evidence: ['Fingerprints', 'Spirit Box', 'Freezing Temperatures'],
        link: 'https://phasmophobia.fandom.com/wiki/Wraith',
        strength: "Wraiths almost never touch the ground, meaning it can't be tracked by footsteps. It can travel through walls and doors without opening them, and will not leave footprints on the ground.",
        weakness: 'Wraiths have a toxic reaction to Salt. If a Wraith comes into contact with a pile of salt, it will immediately cease attacking.'
    },
    {
        name: 'Yurei',
        evidence: ['Ghost Writing', 'Freezing Temperatures', 'Ghost Orb'],
        link: 'https://phasmophobia.fandom.com/wiki/Yurei',
        strength: "Yurei have been known to have a stronger effect on people's Sanity.",
        weakness: "Using Smudge Sticks on the Yurei's Ghost Room will cause it to not wander around the location for ~90 seconds."
    }
];

export { ghostList, evidenceDictionary }