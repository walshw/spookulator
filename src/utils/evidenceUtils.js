const disableEvidence = (evidence, evidenceNamesToBeDisabled) => {
    Object.keys(evidence).forEach(eKey => {
        if (evidenceNamesToBeDisabled.includes(evidence[eKey].name)) {
            evidence[eKey].isDisabled = true;
        } else {
            evidence[eKey].isDisabled = false;
        }
    });
}

const getEvidenceByName = (evidence, name) => {
    return Object.values(evidence).find(value => value.name === name)
}

export {disableEvidence, getEvidenceByName}