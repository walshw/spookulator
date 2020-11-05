import React, { Component } from 'react';
import { evidenceDictionary, ghostList } from '../constants/constants'
import EvidenceOptions from './EvidenceOptions';
import ListContainer from './ListContainer';

class EvidenceContainer extends Component {
    constructor(props) {
        super(props);

        this.state = this.getInitialState();
    }

    getInitialState = () => {
        let evidenceObject = {}

        Object.keys(evidenceDictionary).forEach(e => evidenceObject[e] = {
            name: evidenceDictionary[e],
            isSelected: false,
            isDisabled: false
        });

        return {
            evidence: evidenceObject,
            possibleGhosts: ghostList,
            impossibleGhosts: [],
            possibleRemainingEvidence: [],
            impossibleRemainingEvidence: []
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
        let updatedEvidence = this.state.evidence;

        updatedEvidence[evidenceKey].isSelected = !updatedEvidence[evidenceKey].isSelected;

        this.calculateEvidenceStates(updatedEvidence);
    }

    resetState = () => {
        this.setState(this.getInitialState());
    }

    calculateEvidenceStates = (currentEvidence) => {
        const selectedEvidenceNames = Object.keys(currentEvidence)
            .filter((eKey) => currentEvidence[eKey].isSelected)
            .map(eKey => currentEvidence[eKey].name);

        const possibleGhosts = [];
        const impossibleGhosts = [];

        const allPossibleEvidence = new Set();

        ghostList.forEach(ghost => {
            if (selectedEvidenceNames
                .every(evidence => ghost.evidence
                    .includes(evidence))) {
                possibleGhosts.push(ghost);

                ghost.evidence.forEach(e => allPossibleEvidence.add(e))

            } else {
                impossibleGhosts.push(ghost);
            }
        });

        const possibleRemainingEvidenceNames = Array.from(allPossibleEvidence).filter(e => !selectedEvidenceNames.includes(e));
        const impossibleRemainingEvidenceNames = Object.values(evidenceDictionary).filter(e => !possibleRemainingEvidenceNames.includes(e) && !selectedEvidenceNames.includes(e));

        Object.keys(currentEvidence).forEach(eKey => {
            if (impossibleRemainingEvidenceNames.includes(currentEvidence[eKey].name)) {
                currentEvidence[eKey].isDisabled = true;
            } else {
                currentEvidence[eKey].isDisabled = false;
            }
        })

        this.setState({
            possibleGhosts: possibleGhosts,
            impossibleGhosts: impossibleGhosts,
            possibleRemainingEvidence: possibleRemainingEvidenceNames.map(e => ({name: e})),
            impossibleRemainingEvidence: impossibleRemainingEvidenceNames.map(e => ({name: e})),
            selectedEvidence: currentEvidence
        });
    }

    render() {
        return (
            <div>
                <EvidenceOptions
                    toggleEvidence={this.toggleEvidence}
                    evidence={this.state.evidence}
                    reset={this.resetState}/>
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
                <hr />
                <ListContainer
                    title="Impossible Evidence"
                    contentList={this.state.impossibleRemainingEvidence}
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