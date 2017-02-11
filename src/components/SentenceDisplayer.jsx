import React from 'react';
import { findProposalForMutation } from "../library/stateManipulations";

const SentenceDisplayer = ({mutationIndexes, splittedSentence, proposals, onMutationClicked}) => {
	const redColor = {color: "red"};
	const blueColor = {color: "blue"};
	const onClickMethod = (e, mutationIndex) => {
		e.preventDefault();
		onMutationClicked(mutationIndex);
	};
	return (
		<div className="sentenceDisplayerContainer">{
			splittedSentence.map((chunk, index) => {
				// If the chunk is a mutation...
				if (mutationIndexes.indexOf(index) !== -1) {
					let mutationIndex = index;
					let proposal = findProposalForMutation(mutationIndex, proposals);
					// Display the potential proposal from the user in green if there is one
					if (typeof findProposalForMutation(mutationIndex, proposals) !== 'undefined') {
						return (
							<span onClick={(e) => {onClickMethod(e, mutationIndex)}}
										key={index}
										style={blueColor}>
								[{proposal.text}]
							</span>
						)
					}
					// Otherwise, display the letter of the word not mutated in red
					else {
						return <span onClick={(e) => {onClickMethod(e, mutationIndex)}} key={index} style={redColor}>[{chunk}]</span>
					}
				}
				// If it's not a mutation, simply display the chunk
				else {
					return <span key={index}>{chunk}</span>
				}
			})
		}</div>
	)
};

export default SentenceDisplayer;
