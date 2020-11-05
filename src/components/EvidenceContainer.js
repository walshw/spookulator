import React, { Component } from 'react';
import { evidenceDictionary, ghostList } from '../constants/constants'
import EvidenceOptions from './EvidenceOptions';
import ListContainer from './ListContainer';

class EvidenceContainer extends Component {
    constructor(props) {
        super(props);

        let evidenceObject = {}

        Object.keys(evidenceDictionary).forEach(e => evidenceObject[e] = {
            name: evidenceDictionary[e],
            isSelected: false,
            isDisabled: false
        });

        this.state = {
            evidence: evidenceObject,
            possibleGhosts: ghostList,
            impossibleGhosts: [],
            possibleRemainingEvidence: []
        }
    }

    renderGhosts = () => {
        return ghostList.map(ghost => {
            return <div>
                <div><b>{ghost.name}</b></div>
                <div>{ghost.evidence[0]}</div>
                <div>{ghost.evidence[1]}</div>
                <div>{ghost.evidence[2]}</div>
                <hr />
            </div>
        })
    }

    toggleEvidence = (evidenceKey) => {
        // condense this method

        let updatedEvidence = this.state.evidence;

        updatedEvidence[evidenceKey].isSelected = !updatedEvidence[evidenceKey].isSelected;

        // logic to evalute evidence states should be done at the end of a toggle
        // i.e Enabling previously disabled evidence, disabling impossible evidence

        this.evaluateEvidenceStates(updatedEvidence);

        // set state is async, probs do this AFTER evaluation of states
        this.setState({ selectedEvidence: updatedEvidence });

        // have a clear button?
    }

    evaluateEvidenceStates = (currentEvidence) => {
        // I am having an issue with names
        // we have evidence in the state which is an object with ALL evidence and is used for tracking what is clicked and what isnt
        // THEN we have to get the evidence objects that are selected

        const selectedEvidence = Object.keys(currentEvidence)
            .filter((eKey) => currentEvidence[eKey].isSelected)
            .map(eKey => currentEvidence[eKey].name);

        // loop through the ghost list and collect all the names of ghosts that contain
        // the selected evidence

        // maybe add all the ghosts that dont match the evidence
        // need to find the set difference ?
        // FOCUS ON ALL THE POSSIBLE GHOSTS AND POSSIBLE REMAINING EVIDENCE FIRST

        // this below has nothing to do with validating evidence states
        const possibleGhosts = [];
        const impossibleGhosts = [];

        const possibleRemainingEvidenceSet = new Set();

        ghostList.forEach(ghost => {
            if (selectedEvidence
                .every(evidence => ghost.evidence
                    .includes(evidence))) {
                possibleGhosts.push(ghost);

                const difference = ghost.evidence.filter(e => !selectedEvidence.includes(e));

                difference.forEach(e => possibleRemainingEvidenceSet.add(e));

            } else {
                impossibleGhosts.push(ghost);
            }
        });

        // do similar logic but now we check for evidence that is NOT in the possible evidence?
        // maybe instead of adding it each time in the ELSE up above I can just find the set difference between all the
        // possible evidence and all evidence

        let possibleRemainingEvidence = [];

        possibleRemainingEvidenceSet.forEach(evidenceName => possibleRemainingEvidence.push({ name: evidenceName }));

        this.setState({
            possibleGhosts: possibleGhosts,
            impossibleGhosts: impossibleGhosts,
            possibleRemainingEvidence: possibleRemainingEvidence
        });
    }

    render() {
        return (
            <div>
                <EvidenceOptions
                    toggleEvidence={this.toggleEvidence}
                    evidence={this.state.evidence} />
                <hr />
                <ListContainer
                    title="Possible Remaining Evidence"
                    contentList={this.state.possibleRemainingEvidence}
                />
                <hr />
                <ListContainer
                    title="Possible Ghosts"
                    contentList={this.state.possibleGhosts}
                />
                <hr />
                <ListContainer
                    title="Impossible Ghosts"
                    contentList={this.state.impossibleGhosts}
                />
            </div>
        )
    }
}

// im thinking of having a box of all the evidences
// they will be clickable labels that glow when selected

// choices will have the unselectable evidence be grayed out
// on selection a box listing all impossible evidence will pop up? (see if this is redundant)


// Selection area (EvidenceOptions)

// Possible remaining evidence
// Impossible evidence
// Possible ghosts
// Impossible ghosts

//^ Maybe all of these can be in one component (ListContainer.js?)
// and just have render methods for each section

// ^ for these sections see if you can have a hide/show button??
// maybe animations for shrinking and growing when they get bigger

export default EvidenceContainer;