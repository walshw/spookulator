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
            isEnabled: true
        });

        this.state = {
            evidence: evidenceObject,
            possibleGhosts: ghostList,
            impossibleGhosts: []
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

    evaluateEvidenceStates = (evidence) => {
        // get all selected evidence

        const evidenceNames = Object.keys(evidence).filter((eKey) => evidence[eKey].isSelected);

        // loop through the ghost list and collect all the names of ghosts that contain
        // the selected evidence

        // maybe add all the ghosts that dont match the evidence
        // need to find the set difference ?
        // FOCUS ON ALL THE POSSIBLE GHOSTS AND POSSIBLE REMAINING EVIDENCE FIRST

        // this below has nothing to do with validating evidence states
        const possibleGhosts = [];
        const impossibleGhosts = [];

        ghostList.forEach(ghost => {
            if (evidenceNames
                .every(evidenceName => ghost.evidence
                    .includes(evidenceDictionary[evidenceName]))) {
                possibleGhosts.push(ghost);
            } else {
                impossibleGhosts.push(ghost);
            }
        });

        // IN HERE I NEED TO ADD THE ACTUAL POSSIBLE EVIDENCE AND IMPOSSIBLE EVIDENCE

        this.setState({
            possibleGhosts: possibleGhosts,
            impossibleGhosts: impossibleGhosts
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