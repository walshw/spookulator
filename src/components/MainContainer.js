import React, { Component } from 'react';
import { evidenceDictionary, ghostList } from '../constants/constants';
import { disableEvidence, getEvidenceByName } from '../utils/evidenceUtils';
import { AppBar, Typography } from '@material-ui/core';
import EvidenceOptions from './EvidenceOptions';
import GhostContainer from './GhostContainer';
import ListContainer from './ListContainer';

import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    offset: theme.mixins.toolbar
})

class MainContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            drawerOpen: false,
            ...this.getInitialState()
        };
    }

    getInitialState = () => {
        let evidenceObject = {};
        let possibleEvidence = [];

        Object.keys(evidenceDictionary).forEach(e => {
            evidenceObject[e] = {
                name: evidenceDictionary[e].name,
                image: evidenceDictionary[e].image,
                isSelected: false,
                isDisabled: false
            };

            possibleEvidence.push({ name: evidenceDictionary[e].name, image: evidenceDictionary[e].image });
        });

        return {
            evidence: evidenceObject,
            possibleGhosts: ghostList,
            impossibleGhosts: [],
            possibleRemainingEvidence: possibleEvidence
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
        const possibleGhosts = [];
        const impossibleGhosts = [];
        const allPossibleEvidence = new Set();

        const selectedEvidenceNames = Object.keys(currentEvidence)
            .filter((eKey) => currentEvidence[eKey].isSelected)
            .map(eKey => currentEvidence[eKey].name);

        ghostList.forEach(ghost => {
            if (selectedEvidenceNames.every(evidence => ghost.evidence.includes(evidence))) {
                possibleGhosts.push(ghost);
                ghost.evidence.forEach(e => allPossibleEvidence.add(e))
            } else {
                impossibleGhosts.push(ghost);
            }
        });

        const possibleRemainingEvidenceNames = Array.from(allPossibleEvidence).filter(e => !selectedEvidenceNames.includes(e));
        const impossibleRemainingEvidenceNames =
            Object.values(evidenceDictionary)
                .filter(e => !possibleRemainingEvidenceNames.includes(e.name) && !selectedEvidenceNames.includes(e.name))
                .map(e => e.name);

        disableEvidence(currentEvidence, impossibleRemainingEvidenceNames);

        const possibleRemainingEvidence =
            possibleRemainingEvidenceNames.map(evidenceName => ({
                name: evidenceName,
                image: getEvidenceByName(evidenceDictionary, evidenceName).image
            }))

        this.setState({
            possibleGhosts: possibleGhosts,
            impossibleGhosts: impossibleGhosts,
            possibleRemainingEvidence: possibleRemainingEvidence,
            selectedEvidence: currentEvidence
        });
    }

    renderRemainingGhosts = () => {
        const { possibleGhosts } = this.state;

        const title = possibleGhosts.length > 1 ? "Possible Ghosts" : "Ghost Type";

        return <div>
            <GhostContainer
                title={title}
                ghosts={possibleGhosts}
            />
            <hr />
        </div>
    }

    render() {
        const { drawerOpen } = this.state;

        const { classes } = this.props;

        return (
            <div className="evidenceContainer">
                <AppBar
                    position="fixed"
                >
                    <Typography variant="h2">
                        Spookulator
                        </Typography>
                </AppBar>
                <div className={classes.offset} />
                <EvidenceOptions
                    toggleEvidence={this.toggleEvidence}
                    evidence={this.state.evidence}
                    reset={this.resetState}
                    isOpen={drawerOpen}
                    toggleOpen={() => this.setState({ drawerOpen: !drawerOpen })}
                />
                <hr />
                <ListContainer
                    title="Possible Remaining Evidence"
                    contentList={this.state.possibleRemainingEvidence}
                    emptyText="No remaining evidence"
                />
                <hr />
                {this.renderRemainingGhosts()}
            </div>
        )
    }
}

export default withStyles(styles)(MainContainer);