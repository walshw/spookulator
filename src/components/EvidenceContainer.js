import React, { Component } from 'react';
import { evidenceDictionary, ghostList } from '../constants/constants'
import EvidenceOptions from './EvidenceOptions';

class EvidenceContainer extends Component {
    constructor(props) {
        super(props);
        console.log("EVIDENCE CONTAINER RE-RENDERED");
        // ^ THIS WONT GET CALLED IF YOU CLICK ON AN EVIDENCE IN A CHILD COMPONENT
        // NICEEEEEEEE

        let evidenceObject = {}

        Object.keys(evidenceDictionary).forEach(e => evidenceObject[e] = {
            name: evidenceDictionary[e],
            isSelected: false
        });

        this.state = {
            evidence: evidenceObject
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

        this.setState({ selectedEvidence: updatedEvidence });
    }

    render() {
        return (
            <div>
                <EvidenceOptions
                    toggleEvidence={this.toggleEvidence} 
                    evidence={this.state.evidence}/>
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